'use client'; 
import { useRouter } from 'next/navigation'; import { useFormState } from '../hooks/useFormState'; import { AuthForm } from '../components/AuthForm'; import { useState, FormEvent } from 'react';
import ErrorComponent from '../components/ErrorComponent';
export default function RegisterPage() { 
    const [data, handleChange] = useFormState({ name: '', email: '', password: ''}); const [error, setError] = useState(null); const router = useRouter(); 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); const response = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); 
        const result = await response.json(); if (result.error) { setError(result.message); } else { router.push('/login'); } 
    }
    return <>
        {error && <ErrorComponent message={error} onClose={() => setError(null)} />}
        <AuthForm title="Register an account" buttonText="Register" data={data} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>;
}