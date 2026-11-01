import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  subject: z.string().min(3).max(100),
  message: z.string().min(20).max(2000),
});

// Simple in-memory rate limiter (per-IP, 5 submissions per 10 min)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 422 });
  }

  const { name, email, subject, message } = parsed.data;

  // In production: send via Resend / SendGrid / Nodemailer here.
  // For now, log server-side (never exposed to client).
  console.log('[CONTACT FORM]', { name, email, subject, messageLength: message.length, ip });

  return NextResponse.json({ success: true, message: 'Message received. I will reply within 24 hours.' });
}
