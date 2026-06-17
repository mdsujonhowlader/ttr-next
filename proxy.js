import { NextResponse } from "next/server";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (pathname === "/login") {
      return NextResponse.next();
    }

    const authCookie = request.cookies.get("admin-auth");

    if (authCookie?.value !== "true") {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  if (!pathname.startsWith("/_next") && !pathname.startsWith("/api") && !pathname.startsWith("/favicon")) {
    const response = NextResponse.next();

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]
      || request.headers.get("x-real-ip")
      || "unknown";

    const userAgent = request.headers.get("user-agent") || "";

    try {
      await fetch(`${request.nextUrl.origin}/api/analytics/track`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ip: ip.substring(0, 50),
          userAgent: userAgent.substring(0, 200),
          page: pathname,
        }),
      });
    } catch {}

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
