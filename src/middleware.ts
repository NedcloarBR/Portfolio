import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';
 
export default createMiddleware({
  locales,
  localePrefix,
  localeDetection: true,
  defaultLocale: 'en-US'
});
 
export const config = {
  matcher: ['/', '/(pt-BR|en-US)/:path*']
};