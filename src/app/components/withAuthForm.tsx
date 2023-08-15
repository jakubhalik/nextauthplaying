import { FormEvent, useState } from 'react'; import { useFormState } from '../hooks/useFormState'; import ErrorComponent from '../components/ErrorComponent';
import { AuthFormData, WithAuthFormProps } from '../types/AuthFormInterfaces';
export function withAuthForm(WrappedComponent: React.ComponentType<AuthFormData>): React.ComponentType<WithAuthFormProps> { return function EnhancedComponent(props: WithAuthFormProps) {
    const [data, handleChange] = useFormState({ name: '', email: '', password: '' }); const [error, setError] = useState<string | null>(null);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); const result = await props.submitFunc(data); if (result?.error) { setError(result.error); } };
    return <>
        {error && <ErrorComponent message={error} onClose={() => setError(null)} />}
        <WrappedComponent title={props.title} buttonText={props.buttonText} data={data} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>;
}; }