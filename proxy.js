import { NextResponse } from "next/server";

export async function proxy(request) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/api") || request.nextUrl.pathname.startsWith("/dashboard")) {
    return response;
  }

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
        page: request.nextUrl.pathname,
      }),
    });
  } catch {}

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};