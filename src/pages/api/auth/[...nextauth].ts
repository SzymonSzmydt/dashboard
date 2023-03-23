import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
// import FacebookProvider from 'next-auth/providers/facebook';
// import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: 'NorthShape <no-reply@northshape.eu>',
    }),
  ],
});
