'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const toolUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'https://calyxra-tool-production.up.railway.app';

  useEffect(() => {
    window.location.href = `${toolUrl}/login`;
  }, [toolUrl]);

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', sans-serif", background: '#FAFAF9',
    }}>
      <p style={{ color: '#636e72', fontSize: 14 }}>Redirecting to dashboard login...</p>
    </div>
  );
}
