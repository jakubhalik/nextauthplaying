'use client'; import { useRouter } from 'next/navigation'; import { useFormState } from '../hooks/useFormState'; import { AuthForm } from '../components/AuthForm';
export default function RegisterPage() { 
    const [data, handleChange] = useFormState({ name: '', email: '', password: ''}); const router = useRouter(); return <AuthForm  
        title="Register an account" buttonText="Register" data={data} handleChange={handleChange} handleSubmit=
            {async e => {e.preventDefault(); await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); router.push('/login');}} 
    />;
}