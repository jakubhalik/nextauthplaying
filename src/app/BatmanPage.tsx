// src/app/BatmanPage.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

export default function BatmanPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      if (session?.user?.name !== 'batman') {
        router.push('/login');
      }
    } else if (status === 'unauthenticated') {
      signIn();
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  } else if (status === 'unauthenticated') {
    return <p>Redirecting to login...</p>;
  }

  return (
    <>
      <h1 className="text-2xl">Welcome to the Batman page!</h1>
      <p>You are logged in as Batman.</p>
    </>
  );
}
