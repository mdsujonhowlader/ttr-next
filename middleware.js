import { NextResponse } from "next/server";

export async function middleware(request) {
  const auth = await request.cookies.get("admin-auth")?.value;

  if (!auth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
