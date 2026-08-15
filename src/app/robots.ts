import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://skywatch-birding-tours.amsitservices.com/sitemap.xml",
  };
}
