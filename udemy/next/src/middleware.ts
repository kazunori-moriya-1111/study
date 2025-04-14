import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // ページリクエストのみ有効にする
  if (!request.nextUrl.pathname.includes('.')) {
    console.log('middleware test')
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/blog/:path*']
}
