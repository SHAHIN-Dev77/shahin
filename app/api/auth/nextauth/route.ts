// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Authenticate service provider here
        const user = { id: '1', name: 'Service Provider', role: 'service_provider' }; // Replace with your own logic
        if (user) return user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login', // Redirect to login page if not signed in
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});
