import { ChangeEvent, FormEvent } from 'react';
const Input = ({ name, value, onChange }: { name: string, value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void}) => <>
    <label htmlFor={name} className={`block text-lg font-medium text-gray-900 ${name !== 'name' ? "mt-3 sm:mt-4" : ""}`}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
    <input id={name} type={name} name={name} required value={value} onChange={onChange} className="mt-2 block w-full rounded-md p-2 border text-gray-900 shadow-sm ring-1 ring-inset 
    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md" />
</>;
export const AuthForm = ({ title, buttonText, data, handleChange, handleSubmit }: 
    { title: string, buttonText: string, data: { [key: string]: string }, handleChange: (e: ChangeEvent<HTMLInputElement>) => void, handleSubmit: (e: FormEvent<HTMLFormElement>) => void }) => 
        <div className="flex justify-center py-24 3xl:py-56"><div className="border rounded-md p-4 sm:p-14">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{title}</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(data).map(key => <Input key={key} name={key} value={data[key]} onChange={handleChange} />)}
                <div className="mt-4">
                    <button type="submit" 
                    className="flex w-full justify-center rounded-md bg-sky-500 p-2 text-white text-xl sm:text-2xl font-bold border-0 shadow-sm hover:bg-sky-400 active:bg-sky-300">
                        {buttonText}
                    </button>
                </div>
            </form>
        </div></div>;