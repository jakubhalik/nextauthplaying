import TWBgred100Borderred400Textred700Px8sm4Py3Textlgsm2xlRoundedFixedWfullTextcenter from '../TWcomponents/TWBgred100Borderred400Textred700Px8sm4Py3Textlgsm2xlRoundedFixedWfullTextcenter'; import TWAbsoluteY0R0Px4Py3 from '../TWcomponents/TWAbsoluteY0R0Px4Py3';
import TWErrorSvg from '../TWcomponents/TWErrorSvg';
type ErrorProps = { message: string, onClose?: () => void }
const ErrorComponent: React.FC<ErrorProps> = ({ message, onClose }) => 
    { return <TWBgred100Borderred400Textred700Px8sm4Py3Textlgsm2xlRoundedFixedWfullTextcenter>
        {message}<button onClick={onClose}><TWAbsoluteY0R0Px4Py3><TWErrorSvg /></TWAbsoluteY0R0Px4Py3></button>
    </TWBgred100Borderred400Textred700Px8sm4Py3Textlgsm2xlRoundedFixedWfullTextcenter> } 
export default ErrorComponent;