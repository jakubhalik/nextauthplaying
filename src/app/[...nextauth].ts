import NextAuth from 'next-auth'; import Providers from 'next-auth'; import AuthConfig from './auth';
export default NextAuth({ ...AuthConfig });