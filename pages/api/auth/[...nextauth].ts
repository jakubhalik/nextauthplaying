import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

type CustomCredentials = {
  username: string;
  password: string;
};

type CustomUser = {
  id: number;
  name: string;
  role: string;
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials: CustomCredentials) => {
        if (
          typeof process.env.ADMIN_USERNAME !== 'string' ||
          typeof process.env.ADMIN_PASSWORD !== 'string'
        ) {
          throw new Error('Environment variables not set.');
        }

        if (
          credentials.username === process.env.ADMIN_USERNAME &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          const user: CustomUser = { id: 1, name: 'Admin', role: 'admin' };
          return Promise.resolve(user);
        } else {
          return Promise.reject(new Error('Invalid credentials'));
        }
      },
    }),
  ],
});
