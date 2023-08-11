'use client';
import { useRouter } from 'next/navigation'; import { FormEvent, useState } from 'react'; import { signIn } from 'next-auth/react'; import { useFormState } from '../hooks/useFormState';
import { AuthForm } from '../components/AuthForm'; import ErrorComponent from '../components/ErrorComponent';
export default function loginPage() { 
    const [data, handleChange] = useFormState({ name: '', email: '', password: ''}); const [error, setError] = useState<string | null>(null); const router = useRouter();
    const loginUser = async (e: FormEvent) => {
        e.preventDefault(); const result = await signIn('credentials', { ...data, redirect: false }); if (result?.error) { setError(result.error); } else { router.push('/dashboard'); }
    }
    return <>
            {error && <ErrorComponent message={error} onClose={() => setError(null)} />}
            <AuthForm title="Sign in to your account" buttonText="Sign in" data={data} handleChange={handleChange} handleSubmit={loginUser} />
        </>;
}
