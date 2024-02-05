import createMiddleware from "next-intl/middleware";

import { defaultLocale, localePrefix, locales } from "./navigation";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
});

export const config = {
  matcher: ["/", "/(pt|en)/:path*"],
};
