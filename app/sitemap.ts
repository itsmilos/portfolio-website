import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://devbym.com",
      lastModified: new Date(),
    },
  ];
}