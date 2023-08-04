import NextAuth from 'next-auth/next'; import CredentialsProvider from 'next-auth/providers/credentials'; import bcrypt from 'bcrypt'; 
import { PrismaAdapter } from '@auth/prisma-adapter'; import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient(); 
export const authOptions: { adapter: any, providers: any[], session: { strategy: 'jwt' }, secret: string, debug: boolean } = { 
    adapter: PrismaAdapter(prisma), providers: [ CredentialsProvider({ 
    name: 'credentials', credentials: { username: { label: 'Username', type: 'text', placeholder: 'jsmith' }, password: { label: 'Password', type: 'password' } }, 
    async authorize(credentials) { return null; } 
    }) ], 
    session: { strategy: 'jwt' }, secret: process.env.NEXTAUTH_SECRET!, debug: process.env.NODE_ENV === 'development' 
};
const handler = NextAuth(authOptions); export { handler as GET, handler as POST };