import { useState, ChangeEvent } from 'react';
export const useFormState = (initialData = {}) => {
    const [data, setData] = useState(initialData); 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { setData({ ...data, [e.target.name]: e.target.value }); }; return [data, handleChange];
}