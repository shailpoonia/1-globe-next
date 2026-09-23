import { useEffect } from 'react'

export interface SeoHeadProps {
  title: string
  description: string
  ogType?: string
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  ogType = 'website',
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title

    // 2. Helper to set or create meta tags
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attributeName, attributeValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Set standard meta description
    setMetaTag('name', 'description', description)

    // Set Open Graph tags
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:site_name', '1-globe.com')

    // Set Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
  }, [title, description, ogType])

  return null
}
