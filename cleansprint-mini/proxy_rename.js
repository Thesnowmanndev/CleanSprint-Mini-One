import { NextResponse } from "next/server";

export function proxy(req) {
  const url = req.nextUrl;
  const isAppRoute = url.pathname.startsWith("/rooms") || url.pathname === "/"; // app surface
  const sid = req.cookies.get("sid"); // stub check

  if (isAppRoute && !sid) {
    // not signed in → send to public landing
    url.pathname = "/(public)/landing";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/rooms/:path*"], // protect app dashboard + rooms
};
