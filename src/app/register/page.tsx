'use client'; 
import { useRouter } from 'next/navigation'; import { useFormState } from '../hooks/useFormState'; import { AuthForm } from '../components/AuthForm'; import { useState, FormEvent } from 'react';
export default function RegisterPage() { 
    const [data, handleChange] = useFormState({ name: '', email: '', password: ''}); const [error, setError] = useState(null); const router = useRouter(); 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); const response = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); 
        const result = await response.json(); if (result.error) { setError(result.message); } else { router.push('/login'); } 
    }
    return <>
        {error && (<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 text-2xl rounded fixed w-full text-center" role="alert">
            {error}
            <button onClick={() => setError(null)}>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-8 w-8 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </button>
        </div>)}
        <AuthForm title="Register an account" buttonText="Register" data={data} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>;
}