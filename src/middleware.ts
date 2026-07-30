import { NextRequest, NextResponse } from "next/server";
import { ACCESS_COOKIE, isValidPassword } from "@/lib/access";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // la page d'accès et son endpoint doivent rester joignables
  if (pathname === "/acces" || pathname === "/api/acces") {
    return NextResponse.next();
  }

  if (isValidPassword(req.cookies.get(ACCESS_COOKIE)?.value ?? "")) {
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
    // Tout, sauf les assets statiques.
    // /images doit rester joignable : l'optimiseur d'images de Next refetche
    // ces URLs en interne, sans cookie — les bloquer casse toutes les <Image>.
    "/((?!_next/static|_next/image|images/|favicon.ico|icon.png|logo.png).*)",
  ],
};
