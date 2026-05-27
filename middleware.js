import { NextResponse } from "next/server";

export function middleware(request) {
  const adminAuth = request.cookies.get("admin-auth");

  // Protect admin route
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    request.nextUrl.pathname !== "/admin-login" &&
    !adminAuth
  ) {
    return NextResponse.redirect(
      new URL("/admin-login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};