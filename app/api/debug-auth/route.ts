// Temporary diagnostic endpoint — DELETE after debugging
import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const password = searchParams.get('password');
  const steps: Record<string, unknown> = {};

  try {
    const { prisma } = await import('@/lib/db');
    steps.prismaImport = 'OK';

    const count = await prisma.agency.count();
    steps.dbConnection = 'OK';
    steps.agencyCount = count;

    // If email+password provided, test the full auth flow manually
    if (email && password) {
      const agency = await prisma.agency.findUnique({
        where: { email },
        select: { id: true, name: true, email: true, password: true },
      });

      if (!agency) {
        steps.authTest = 'USER_NOT_FOUND';
      } else {
        steps.authTest = 'USER_FOUND';
        steps.userName = agency.name;
        const isValid = await compare(password, agency.password);
        steps.passwordValid = isValid;
        if (isValid) {
          steps.wouldReturn = { id: agency.id, name: agency.name, email: agency.email };
        }
      }
    } else {
      // List all agency emails for reference
      const agencies = await prisma.agency.findMany({
        select: { email: true, name: true },
      });
      steps.agencies = agencies;
    }
  } catch (err) {
    steps.error = err instanceof Error ? err.message : String(err);
  }

  steps.hasDbUrl = !!process.env.DATABASE_URL;
  steps.hasNextAuthSecret = !!process.env.NEXTAUTH_SECRET;
  steps.nextAuthUrl = process.env.NEXTAUTH_URL || 'NOT SET';
  steps.nextAuthVersion = 'checking...';

  try {
    // Check next-auth version
    const nextAuth = await import('next-auth');
    steps.nextAuthVersion = (nextAuth as Record<string, unknown>).version || 'unknown';
  } catch {
    steps.nextAuthVersion = 'import failed';
  }

  return NextResponse.json(steps);
}
