import { NextResponse } from "next/server";

export async function proxy(request) {
  const auth = await request.cookies.get("admin-auth")?.value;

  if (!auth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};