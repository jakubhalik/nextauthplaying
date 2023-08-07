'use client'; import { useState } from 'react'; import { useRouter } from 'next/navigation'; import { FormEvent } from 'react';
export default function RegisterPage() { 
    const router = useRouter(); const [data, setData] = useState({ name: '', email: '', password: '' });
    const registerUser = async (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); const response = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        const userInfo = await response.json(); console.log(userInfo); router.push('/login'); 
    }
    return <div className="flex justify-center py-24 3xl:py-56">
    <div className="border rounded-md p-4 sm:p-14">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Sign in to your account</h2>
        <form className="space-y-6" onSubmit={registerUser}>
            <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-900">Name</label>
                <input id="name" name="name" type="text" required value={data.name} className="mt-2 block w-full rounded-md p-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset 
                ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md" 
                onChange={(e) => {setData({...data, name: e.target.value})}} />
                <label htmlFor="email" className="block mt-3 sm:mt-4 text-lg font-medium text-gray-900">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={data.email} className="mt-2 block w-full rounded-md p-2 border-0 text-gray-900 shadow-sm ring-1 
                ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md"
                onChange={(e) => {setData({...data, email: e.target.value})}} />
                <label htmlFor="password" className="block mt-3 sm:mt-4 text-lg font-medium text-gray-900">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required value={data.password} className="mt-2 block w-full rounded-md p-2 border-0 
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md" 
                onChange={(e) => {setData({...data, password: e.target.value})}}/>
            </div>
            <div className="mt-4">
                <button type="submit" className="flex w-full justify-center rounded-md bg-sky-500 p-2 text-white text-xl sm:text-2xl font-bold border-0 shadow-sm hover:bg-sky-400 
                active:bg-sky-300">
                    Sign in
                </button>
            </div>
        </form>
    </div>
</div>; 
}