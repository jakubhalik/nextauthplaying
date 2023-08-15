'use client';
import { AuthForm } from '../components/AuthForm';
export default function RegisterPage() { 
    const registerCallback = async (data: { [key: string]: string }) => { 
        const response = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); const result = await response.json(); 
        if (!response.ok) { throw new Error(result.message || 'Registration failed'); } return result;
    }
    return <AuthForm title="Register an account" buttonText="Register" actionCallback={registerCallback} push="/login" />
}