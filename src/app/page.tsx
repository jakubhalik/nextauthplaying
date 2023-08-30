import Link from 'next/link'; import TWFlexJustifycenterPy24_3xl56 from './TWcomponents/TWFlexJustifyCenterPy24_3xl56';
export default function App() { return <TWFlexJustifycenterPy24_3xl56>
    <div className="text-2xl">
        <h1 className="text-3xl flex justify-center">auth</h1><br />
        <div className="space-x-10"><Link href="/register" className="rounded-lg p-2 bg-black text-white">Register Page</Link><Link href="/login" className="rounded-lg p-2 bg-black text-white">Login Page</Link></div>
    </div>
</TWFlexJustifycenterPy24_3xl56>; }