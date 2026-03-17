// scripts/migrate-users.ts | One-time migration: data/users.json → PostgreSQL
// Run: npx ts-node scripts/migrate-users.ts
// Delete data/users.json after successful migration

import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface StoredUser {
  id: string;
  email: string;
  passwordHash: string;
}

async function main() {
  const usersFile = path.join(process.cwd(), 'data', 'users.json');

  if (!fs.existsSync(usersFile)) {
    console.log('No data/users.json found — nothing to migrate.');
    return;
  }

  const raw = fs.readFileSync(usersFile, 'utf8');
  const users: StoredUser[] = JSON.parse(raw);

  console.log(`Found ${users.length} user(s) to migrate.\n`);

  for (const user of users) {
    try {
      const existing = await prisma.agency.findUnique({
        where: { email: user.email.toLowerCase().trim() },
      });

      if (existing) {
        console.log(`SKIPPED: ${user.email} (already exists as agency ${existing.id})`);
        continue;
      }

      const agency = await prisma.agency.create({
        data: {
          name: user.email.split('@')[0],
          email: user.email.toLowerCase().trim(),
          password: user.passwordHash,
          tier: 'pilot',
        },
      });

      console.log(`MIGRATED: ${user.email} → agency ${agency.id}`);
    } catch (err) {
      console.error(`ERROR: ${user.email} — ${(err as Error).message}`);
    }
  }

  console.log('\nMigration complete. You can now delete data/users.json');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
