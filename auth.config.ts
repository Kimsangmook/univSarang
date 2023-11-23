import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'
// import GitHub from "next-auth/providers/github"
import GitHubProvider from 'next-auth/providers/github'
 
export const authConfig = {
  providers: [
    GitHubProvider({
      clientId:process.env.GITHUB_ID as string,
      clientSecret:process.env.GITHUB_SECRET as string,
    }),
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
          const user = {id:"42",name:"mook",password:"1234"}
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
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("asdg");
      const isLoggedIn = !!auth?.user;

      const isOnMain = nextUrl.pathname.startsWith('/attendance');
      if (isOnMain) {
        if (isLoggedIn) return true;
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/attendance', nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;