import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://relentnet.com/images/software-35.webp',
  ogType = 'website',
  twitterCard = 'summary_large_image',
}: SEOProps) {
  const siteTitle = 'RelentNet'
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`

  useEffect(() => {
    // Update Title
    document.title = fullTitle

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Helper to update or create link tags
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    // Basic Meta
    updateMeta('description', description)

    // Open Graph
    updateMeta('og:title', fullTitle, 'property')
    updateMeta('og:description', description, 'property')
    updateMeta('og:type', ogType, 'property')
    updateMeta('og:image', ogImage, 'property')
    if (canonical) updateMeta('og:url', canonical, 'property')

    // Twitter
    updateMeta('twitter:card', twitterCard)
    updateMeta('twitter:title', fullTitle)
    updateMeta('twitter:description', description)
    updateMeta('twitter:image', ogImage)

    // Canonical
    if (canonical) {
      updateLink('canonical', canonical)
    } else {
      // Remove canonical if not provided to avoid stale tags
      const element = document.querySelector('link[rel="canonical"]')
      if (element) document.head.removeChild(element)
    }

  }, [fullTitle, description, canonical, ogImage, ogType, twitterCard])

  return null
}
