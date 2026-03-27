// Temporary diagnostic endpoint — DELETE after debugging
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const steps: Record<string, unknown> = {};

  // Step 1: Can we import Prisma?
  try {
    const { prisma } = await import('@/lib/db');
    steps.prismaImport = 'OK';

    // Step 2: Can we query the database?
    try {
      const count = await prisma.agency.count();
      steps.dbConnection = 'OK';
      steps.agencyCount = count;
    } catch (dbErr) {
      steps.dbConnection = 'FAIL';
      steps.dbError = dbErr instanceof Error ? dbErr.message : String(dbErr);
    }

    // Step 3: Can we find the specific user?
    try {
      const agency = await prisma.agency.findUnique({
        where: { email: 'strit05@ukr.net' },
        select: { id: true, name: true, email: true, password: true },
      });
      if (agency) {
        steps.userFound = true;
        steps.userName = agency.name;
        steps.passwordHashLength = agency.password.length;
        steps.passwordHashPrefix = agency.password.substring(0, 7);

        // Step 4: Test bcrypt
        try {
          const { compare } = await import('bcryptjs');
          steps.bcryptImport = 'OK';
          // Just verify bcrypt can process the hash format
          steps.hashFormat = agency.password.startsWith('$2') ? 'valid bcrypt' : 'unknown';
        } catch (bcryptErr) {
          steps.bcryptImport = 'FAIL';
          steps.bcryptError = bcryptErr instanceof Error ? bcryptErr.message : String(bcryptErr);
        }
      } else {
        steps.userFound = false;
      }
    } catch (userErr) {
      steps.userQuery = 'FAIL';
      steps.userError = userErr instanceof Error ? userErr.message : String(userErr);
    }
  } catch (importErr) {
    steps.prismaImport = 'FAIL';
    steps.importError = importErr instanceof Error ? importErr.message : String(importErr);
  }

  // Step 5: Check env vars
  steps.hasDbUrl = !!process.env.DATABASE_URL;
  steps.hasNextAuthSecret = !!process.env.NEXTAUTH_SECRET;
  steps.nextAuthUrl = process.env.NEXTAUTH_URL || 'NOT SET';

  return NextResponse.json(steps);
}
