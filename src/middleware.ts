import { auth } from "auth"
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// export default auth;

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
  matcher: ["/"],
}