const CANONICAL_ORIGIN = 'https://jjinsubag.vercel.app'

export default function middleware(request: Request) {
  const url = new URL(request.url)
  const destination = `${CANONICAL_ORIGIN}${url.pathname}${url.search}`

  return Response.redirect(destination, 308)
}

export const config = {
  matcher: '/(.*)',
}
