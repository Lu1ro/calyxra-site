// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const handler = NextAuth({
  debug: true,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.error('[AUTH] Missing email or password');
            return null;
          }

          console.log('[AUTH] Login attempt for:', credentials.email);

          // Lazy import to avoid module-level init issues on Vercel
          const { prisma } = await import('@/lib/db');

          const agency = await prisma.agency.findUnique({
            where: { email: credentials.email },
          });

          if (!agency) {
            console.error('[AUTH] No account found for:', credentials.email);
            return null;
          }

          console.log('[AUTH] Found account, checking password...');
          const isValid = await compare(credentials.password, agency.password);
          if (!isValid) {
            console.error('[AUTH] Invalid password for:', credentials.email);
            return null;
          }

          console.log('[AUTH] Login success:', credentials.email);
          return {
            id: agency.id,
            name: agency.name,
            email: agency.email,
          };
        } catch (err) {
          console.error('[AUTH] Authorize error:', err instanceof Error ? err.message : err);
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
