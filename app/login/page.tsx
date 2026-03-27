'use client';

import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    window.location.href =
      (process.env.NEXT_PUBLIC_TOOL_URL || 'https://app.calyxra.com') + '/login';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9]">
      <p className="text-[#78716C] text-sm">Redirecting to dashboard...</p>
    </div>
  );
}
