//* Nextjs official Middleware;
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";
import { Locales } from "./infrastructure/interfaces/locales";

export let locales: Locales[] = ["en", "es"];

function getLocale(request: NextRequest) {
  let headers = { "accept-language": "es" };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "es";

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|public).*)"],
};
