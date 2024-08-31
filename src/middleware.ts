import { NextRequest, NextResponse } from 'next/server'
import { jwtDecode } from "jwt-decode";
import { cookies } from 'next/headers'
 
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/auth/login', '/auth/register']
 
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  // 3. Decrypt the session from the cookie
  const accessToken = cookies().get('accessToken')?.value
  const refreshToken = cookies().get('refreshToken')?.value
 
  let session = null;
  if (accessToken) {
    try {
      session = jwtDecode(accessToken as string);
    } catch (error) {
      console.error('Invalid access token:', error);
    }
  }

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/auth', req.nextUrl))
  }
 
  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}