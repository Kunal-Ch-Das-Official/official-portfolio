import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about", "/projects", "/blogs"],
        disallow: ["/hire"],
      },
    ],
    sitemap: "https://www.kunalchandradas.tech/sitemap.xml",
  };
}
