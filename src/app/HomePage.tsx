import { signIn } from 'next-auth/react';
export default function HomePage() { return <div className="flex justify-center">
    <div className="pt-80"><button className="p-2 bg-black text-white rounded-lg text-2xl" onClick={() => signIn('credentials')}>Login to go to Batman page</button></div>
</div>; }