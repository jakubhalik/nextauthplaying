'use client';
import { useSession, SessionProvider } from 'next-auth/react';
function DashboardContent() {
    const { data: session, status } = useSession();
    if (status === 'loading') { return <div>Loading...</div>; } if (!session || !session.user) { return <div>You are not authenticated!</div>; }
    return <div>Hi {session.user.name}! Welcome to your dashboard</div>;
}
export default function DashboardPage( pageProps: any ) { return <SessionProvider session={pageProps.session}><DashboardContent /></SessionProvider>; }