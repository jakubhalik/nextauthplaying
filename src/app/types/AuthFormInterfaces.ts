export interface AuthFormData {
    title: string, buttonText: string, data: { [key: string]: string }, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, 
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, submitFunc?: (data: any) => Promise<any>, onSuccess?: () => void
}
export interface WithAuthFormProps extends AuthFormData { submitFunc: (data: any) => Promise<any> }