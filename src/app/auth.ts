// src/app/auth.ts
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (credentials.username === 'batman' && credentials.password === 'robin') {
          return Promise.resolve({ name: 'batman', email: 'batman@batman.com' });
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
});
