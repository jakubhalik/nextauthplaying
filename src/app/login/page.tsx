'use client'; import { useRouter } from 'next/navigation'; import { FormEvent } from 'react'; import { signIn } from 'next-auth/react';
import { useFormState } from '../hooks/useFormState'; import { AuthForm } from '../components/AuthForm';
export default function loginPage() { 
    const [data, handleChange] = useFormState({ name: '', email: '', password: ''}); const router = useRouter();
    const loginUser = async (e: FormEvent) => {
        e.preventDefault(); const result = await signIn('credentials', { ...data, redirect: false }); if (!result?.error) router.push('/dashboard');
    }
    return <AuthForm  title="Sign in to your account" buttonText="Sign in" data={data} handleChange={handleChange} handleSubmit={loginUser} />;
}