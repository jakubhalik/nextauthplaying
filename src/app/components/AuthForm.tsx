import { ChangeEvent, FormEvent } from 'react';
type InputProps = { name: string, type: 'text' | 'email' | 'password', value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }
const Input: React.FC<InputProps> = ({ name, type, value, onChange }) => <>
    <label htmlFor={name} className={`block text-lg font-medium text-gray-900 ${name !== 'name' ? "mt-3 sm:mt-4" : ""}`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
    </label>
    <input id={name} name={name} type={type} required value={value} className="mt-2 block w-full rounded-md p-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset 
    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md" onChange={onChange} />
</>;
type AuthFormProps = { 
    title: string, buttonText: string, data: { name: string, email: string, password: string }, 
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void, handleSubmit: (e: FormEvent<HTMLFormElement>) => void 
}
export const AuthForm = ({ title, buttonText, data, handleChange, handleSubmit }: AuthFormProps) => <div className="flex justify-center py-24 3xl:py-56">
    <div className="border rounded-md p-4 sm:p-14">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{title}</h2>
        <form onSubmit={handleSubmit}>
            <Input name="name" type="text" value={data.name} onChange={handleChange} />
            <Input name="email address" type="email" value={data.email} onChange={handleChange} />
            <Input name="password" type="password" value={data.password} onChange={handleChange} />
            <div className="mt-4">
                <button type="submit" className="flex w-full justify-center rounded-md bg-sky-500 p-2 text-white text-xl sm:text-2xl font-bold border-0 shadow-sm 
                hover:bg-sky-400 active:bg-sky-300">
                    {buttonText}
                </button>
            </div>
        </form>
    </div>
</div>;