import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ezenardr.dev",
      lastModified: new Date(),
    },
  ];
}
