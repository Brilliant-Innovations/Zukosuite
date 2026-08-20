import type { MetadataRoute } from 'next'

const base = 'https://zukosuite.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/waitlist`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/demo`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookies`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
