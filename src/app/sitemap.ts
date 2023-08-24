import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ezenardr.dev',
            lastModified: new Date(),
        },
        {
            url: 'https://ezenardr.dev/fr-FR',
            lastModified: new Date(),
        },
    ];
}
