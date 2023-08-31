import Link from 'next/link'; import TWFlexJustifycenterPy24_3xl56 from './TWcomponents/TWFlexJustifyCenterPy24_3xl56'; import TWText2xl from './TWcomponents/TWText2xl';
import TWText3xlFlexJustifycenter from './TWcomponents/TWText3xlFlexJustifycenter';
export default function App() { return <TWFlexJustifycenterPy24_3xl56>
    <TWText2xl>
        <TWText3xlFlexJustifycenter>auth</TWText3xlFlexJustifycenter><br />
        <div className="space-x-10"><Link href="/register" className="rounded-lg p-2 bg-black text-white">Register Page</Link><Link href="/login" className="rounded-lg p-2 bg-black text-white">Login Page</Link></div>
    </TWText2xl>
</TWFlexJustifycenterPy24_3xl56>; }