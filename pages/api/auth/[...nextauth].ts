import NextAuth, { NextAuthOptions } from 'next-auth'; import CredentialsProvider from 'next-auth/providers/credentials';
export const authOptions: NextAuthOptions = { providers: [ CredentialsProvider({
    name: 'Credentials', credentials: { username: { label: 'Username', type: 'text', placeholder: 'bro' }, password: { label: 'Password', type: 'password' } },
    async authorize(credentials, req) { const { username, password } = credentials as string; }
}) ] }; export default NextAuth(authOptions);