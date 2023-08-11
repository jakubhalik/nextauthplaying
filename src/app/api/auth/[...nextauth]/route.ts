import NextAuth from 'next-auth/next'; import CredentialsProvider from 'next-auth/providers/credentials'; import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@auth/prisma-adapter'; import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const authorize = async ({ name, email, password }: any) => { 
    if(!(name || email || password)) throw new Error("Incomplete credentials"); 
    const user: any = await prisma.user.findUnique({ where: { email } }); if (!user) throw new Error("Account does not exist");
    const isValidPassword = await bcrypt.compare(password, user.hashedPassword); if (!isValidPassword) throw new Error("Wrong password");
    return user;
};
const authOptions: { adapter: any, providers: any[], session: { strategy: 'jwt' }, secret: string, debug: boolean } = {
    adapter: PrismaAdapter(prisma),
    providers: [ CredentialsProvider({
            name: 'credentials', credentials: { username: { label: 'Username', type: 'text', placeholder: 'jsmith' }, password: { label: 'Password', type: 'password' } }, authorize 
        }) ], session: { strategy: 'jwt' }, secret: process.env.NEXTAUTH_SECRET!, debug: process.env.NODE_ENV === 'development'
}; 
const handler = NextAuth(authOptions); export { handler as GET, handler as POST };