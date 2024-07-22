// src/app/layout.tsx
"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './globals.css';

const MyApp: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.email && pathname !== '/signin') {
      router.push('/signin');
    }
  }, [router, pathname]);

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default MyApp;
