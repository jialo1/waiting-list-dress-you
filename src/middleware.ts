import { NextRequest, NextResponse } from "next/server";
import { ACCESS_COOKIE, sitePassword } from "@/lib/access";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // la page d'accès et son endpoint doivent rester joignables
  if (pathname === "/acces" || pathname === "/api/acces") {
    return NextResponse.next();
  }

  if (req.cookies.get(ACCESS_COOKIE)?.value === sitePassword()) {
    return NextResponse.next();
  }

  // on réécrit sans rediriger : l'URL demandée est conservée
  const url = req.nextUrl.clone();
  url.pathname = "/acces";
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // tout, sauf les assets statiques et le logo affiché sur la page d'accès
    "/((?!_next/static|_next/image|favicon.ico|icon.png|logo.png).*)",
  ],
};
