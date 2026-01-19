import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');

  // If subdomain is resume.*, rewrite to resume page (keeps URL)
  if (hostname?.startsWith('resume.')) {
    return NextResponse.rewrite(new URL('/resume-subdomain', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/(.*)', '/api/(.*)'],
};

