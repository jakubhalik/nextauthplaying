type TWSubmitButtonProps = { children: React.ReactNode }
const TWSubmitButton: React.FC<TWSubmitButtonProps> = ({ children }) => 
    <button type="submit" className="flex w-full justify-center rounded-md bg-sky-500 p-2 text-white text-xl sm:text-2xl font-bold border-0 shadow-sm hover:bg-sky-400 active:bg-sky-300">
        {children}
    </button>;
export default TWSubmitButton;