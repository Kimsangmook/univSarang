import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'
 
export const authConfig = {
  providers: [
    CredentialsProvider({
      name:"Credentials",
      credentials:{
          username:{
              label:"Username:",
              type:"text",
              placeholder:"Username"
          },
          password:{
              label:"Password:",
              type:"password",
              placeholder:"Password"
          }
      },
      async authorize(credentials) {
          const user = {id:"42",name:"mook",email:"uj03109@naver.com",password:"1234"}
          if(credentials?.username === user.name && credentials?.password === user.password){
              console.log("hi");
              return user
          }else{
              console.log("no");
              return null
          }
      }   
  })
  ],
  pages: {
    signIn: '/signin',
  },
  secret:process.env.NEXTAUTH_SECRET,
  session:{
    strategy:'jwt'
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnMain = nextUrl.pathname.startsWith('/');

      if (isOnMain) {
        if (isLoggedIn) return true;
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },

    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
    }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      
      console.log('session callback',{session,user,token});
      return session
    },
    async jwt({ token, user, account, profile, isNewUser,session }) {
      console.log('jwt callback',{session,user,token});
      return token
    }
  },
} satisfies NextAuthConfig;