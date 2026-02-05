import { NextRequest, NextResponse } from 'next/server';

export const proxy = (request: NextRequest) => {
  const hostname = request.headers.get('host');

  // If subdomain is resume.*, serve the resume PDF as the primary content.
  if (hostname?.startsWith('resume.')) {
    const url = request.nextUrl.clone();
    if (url.pathname === '/resume.pdf') {
      return NextResponse.next();
    }
    url.pathname = '/resume.pdf';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/(.*)', '/api/(.*)'],
};
