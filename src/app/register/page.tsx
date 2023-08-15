'use client'; 
import { useRouter } from 'next/navigation'; import { withAuthForm } from '../components/withAuthForm'; import { AuthForm } from '../components/AuthForm';
import { ChangeEvent, FormEvent } from 'react';
const RegisterFunc = async (data: any) => { const response = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); } 
const RegisterPage = withAuthForm(() => { 
    const router = useRouter(); 
    return <AuthForm title="Register an account" buttonText="Register" submitFunc={RegisterFunc} onSuccess={() => router.push('/login')} data={{}} 
        handleChange={function (e: ChangeEvent<HTMLInputElement>): void { throw new Error('Function not implemented.'); } }
        handleSubmit={function (e: FormEvent<HTMLFormElement>): void { throw new Error('Function not implemented.'); } } 
    /> 
}); 
export default RegisterPage;