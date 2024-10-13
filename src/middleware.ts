import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
 
export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if(pathname === "/resume/download") {
		return NextResponse.rewrite(new URL("/docs/resume/mine.pdf", request.url));
	}

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ]
}