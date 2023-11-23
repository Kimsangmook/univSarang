// export { default } from "next-auth/middleware"
import NextAuth from "next-auth";
import { auth } from "auth"
import { NextRequest, NextResponse } from "next/server";
// import { authConfig } from "./auth.config";

// export default NextAuth(authConfig).auth;
// export default auth;
// export const config = { matcher: ["/signup"] }
export function middleware(request:NextRequest){
  console.log("Asdf");
  return NextResponse.redirect(new URL('/signin',request.url));
}

export const config = {
  matcher: ["/"],
}