import createMiddleware from "next-intl/middleware";

import { defaultLocale, localePrefix, locales } from "./navigation";

export const config = {
  matcher: ["/", "/(pt|en)/:path*"],
};

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
});
