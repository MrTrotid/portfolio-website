import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');

  // If subdomain is resume.*, redirect to resume PDF
  if (hostname?.startsWith('resume.')) {
    return NextResponse.redirect(new URL('/resume.pdf', request.url), { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/(.*)', '/api/(.*)'],
};

