'use client'; import { useRouter } from 'next/navigation'; import { signIn } from 'next-auth/react';
import { useFormState } from '../hooks/useFormState'; import { AuthForm } from '../components/AuthForm';
export default function LoginPage() { 
    const [data, handleChange] = useFormState({ name: '', email: '', password: ''}); const router = useRouter(); return <AuthForm 
        title="Sign in to your account" buttonText="Sign in" data={data} handleChange={handleChange} 
        handleSubmit={e => {e.preventDefault(); signIn('credentials', { ...data, redirect: false }).then(result => { if (!result?.error) router.push('/dashboard') })}}
    />;
}