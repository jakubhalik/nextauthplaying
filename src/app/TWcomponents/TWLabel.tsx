type TWLabelProps = { forName: string, isName?: boolean, children: React.ReactNode }
const TWLabel: React.FC<TWLabelProps> = ({ forName, isName, children }) => 
    <label htmlFor={forName} className={`block text-lg font-medium text-gray-900 ${!isName ? "mt-3 sm:mt-4" : ""}`}>{children}</label>;
export default TWLabel;