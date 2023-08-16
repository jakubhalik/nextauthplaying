import { ChangeEvent } from 'react';
type TWInputProps = { id: string, type: string, name: string, value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }
const TWInput: React.FC<TWInputProps> = ({ id, type, name, value, onChange }) =>
    <input id={id} type={type} name={name} required value={value} onChange={onChange} className="mt-2 block w-full rounded-md p-2 border text-gray-900 shadow-sm ring-1 ring-inset 
    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md" />;
export default TWInput;