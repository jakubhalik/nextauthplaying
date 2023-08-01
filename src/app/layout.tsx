export const metadata = { title: 'bro', description: 'bro', }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }