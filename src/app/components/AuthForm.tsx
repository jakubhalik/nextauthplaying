import { FormEvent, useState } from 'react'; import { useRouter } from 'next/navigation'; import { useFormState } from '../hooks/useFormState'; import ErrorComponent from '../components/ErrorComponent';
import TWLabel from '../TWcomponents/TWLabel'; import TWInput from '../TWcomponents/TWInput'; import TWSubmitButton from '../TWcomponents/TWSubmitButton'; import TWMt4 from '../TWcomponents/TWMt4';
import TWFlexJustifyCenterPy24_3xl56 from '../TWcomponents/TWFlexJustifyCenterPy24_3xl56'; import BorderRoundedmdP4sm14 from '../TWcomponents/BorderRoundedmdP4sm14'; import CenteredBoldH2Mb6 from '../TWcomponents/CenteredBoldH2Mb6';
type AuthFormProps = { title: string, buttonText: string, actionCallback: (data: {[key: string]: string}) => Promise<any>, push: string }
export const AuthForm: React.FC<AuthFormProps> = ({ title, buttonText, actionCallback, push}) => { 
    const [data, handleChange] = useFormState({ name: '', email: '', password: '' }); const [error, setError] = useState<string | null>(null); const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        try { const result = await actionCallback(data); if (result?.error) { setError(result.error); } else { router.push(push); } } catch (err) { setError(err instanceof Error ? err.message : 'An error occurred'); }
    };
    return <>
        {error && <ErrorComponent message={error} onClose={() => setError(null)} />}
        <TWFlexJustifyCenterPy24_3xl56><BorderRoundedmdP4sm14>
            <CenteredBoldH2Mb6>{title}</CenteredBoldH2Mb6>
            <form onSubmit={handleSubmit}>
                {Object.keys(data).map(key => { 
                    const inputKey = key as keyof typeof data; 
                    return <div key={inputKey}>
                        <TWLabel forName={inputKey} isName={inputKey === 'name'}>{inputKey.charAt(0).toUpperCase() + inputKey.slice(1)}</TWLabel>
                        <TWInput id={inputKey} type={inputKey} name={inputKey} value={data[inputKey]} onChange={handleChange} />
                    </div>;
                })}
                <TWMt4><TWSubmitButton>{buttonText}</TWSubmitButton></TWMt4>
            </form>
        </BorderRoundedmdP4sm14></TWFlexJustifyCenterPy24_3xl56>
    </>;
}