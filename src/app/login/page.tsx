'use client';
import { signIn } from 'next-auth/react'; import { AuthForm } from '../components/AuthForm';
export default function LoginPage() {
    const loginCallback = async (data: { [key: string]: string }) => { return await signIn('credentials', { ...data, redirect: false }); }
    return <AuthForm title="Sign in to your account" buttonText="Sign in" actionCallback={loginCallback} push="/dashboard" mode="login" />
}