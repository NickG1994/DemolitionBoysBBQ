import { defineEventHandler, setResponseHeader } from 'h3'

export default defineEventHandler((event) => {
  const baseUrl = 'https://demolitionboyssmokehouse.com'
  const urls = [
    '',
    '/menu',
    '/about',
    '/contact'
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((path) => {
      const url = `${baseUrl}${path}`
      return `  <url><loc>${url}</loc><changefreq>weekly</changefreq><priority>${path === '' ? '1.0' : '0.8'}</priority></url>`
    })
    .join('\n')}
</urlset>`

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return xml
})
