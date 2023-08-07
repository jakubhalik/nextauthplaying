'use client'; import Link from 'next/link';
export default function App() { return <main>
    <h1>auth</h1><Link href="/register">Register Page</Link><Link href="/login">Login Page</Link>
</main>; }