'use client'; import { useRouter } from 'next/navigation'; import { FormEvent } from 'react'; 
import { useFormState } from '../hooks/useFormState'; import { AuthForm } from '../components/AuthForm';
export default function RegisterPage() { 
    const [data, handleChange] = useFormState({ name: '', email: '', password: ''}); const router = useRouter();
    const registerUser = async (e: FormEvent) => {
        e.preventDefault(); 
        const response = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        await response.json(); router.push('/login');
    }
    return <AuthForm  title="Register an account" buttonText="Register" data={data} handleChange={handleChange} handleSubmit={registerUser} />;
}