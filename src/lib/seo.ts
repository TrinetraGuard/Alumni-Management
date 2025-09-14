import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
  noIndex?: boolean
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonicalUrl,
  noIndex = false
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'keywords'
        meta.content = keywords
        document.head.appendChild(meta)
      }
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description)
    }

    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]')
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage)
      }
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title)
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description)
    }

    if (ogImage) {
      const twitterImage = document.querySelector('meta[property="twitter:image"]')
      if (twitterImage) {
        twitterImage.setAttribute('content', ogImage)
      }
    }

    // Update canonical URL
    if (canonicalUrl) {
      const canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl)
      } else {
        const link = document.createElement('link')
        link.rel = 'canonical'
        link.href = canonicalUrl
        document.head.appendChild(link)
      }
    }

    // Update robots meta tag
    const robots = document.querySelector('meta[name="robots"]')
    if (robots) {
      robots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow')
    }

    // Cleanup function to reset to default values when component unmounts
    return () => {
      document.title = 'Allumino - AI-Powered Alumni Management Platform | Smart Alumni Ecosystem'
      
      const defaultDescription = "Transform alumni engagement with Allumino's AI-powered platform. Centralized alumni hub, smart mentor matching, blockchain security, and transparent donations. Built by Team Trinetra for Smart India Hackathon 2025."
      
      if (metaDescription) {
        metaDescription.setAttribute('content', defaultDescription)
      }
    }
  }, [title, description, keywords, ogImage, canonicalUrl, noIndex])
}

// SEO data for each page
export const seoData = {
  home: {
    title: 'Allumino - AI-Powered Alumni Management Platform | Smart Alumni Ecosystem',
    description: "Transform alumni engagement with Allumino's AI-powered platform. Centralized alumni hub, smart mentor matching, blockchain security, and transparent donations. Built by Team Trinetra for Smart India Hackathon 2025.",
    keywords: 'alumni management, AI-powered platform, mentor matching, blockchain security, alumni engagement, smart alumni ecosystem, educational technology, alumni donations, career networking, educational innovation',
    canonicalUrl: 'https://allumino.teamtrinetra.com/'
  },
  problem: {
    title: 'The Problem - Alumni Management Challenges | Allumino',
    description: 'Discover the critical challenges in traditional alumni management: scattered data, limited engagement, no structured donations, and missed growth opportunities. See how Allumino solves these problems.',
    keywords: 'alumni management problems, educational challenges, alumni engagement issues, donation transparency, mentorship gaps, data fragmentation, educational technology problems',
    canonicalUrl: 'https://allumino.teamtrinetra.com/problem'
  },
  solution: {
    title: 'Our Solution - AI-Powered Alumni Platform | Allumino',
    description: 'Explore Allumino\'s comprehensive solution: centralized alumni hub, AI-powered mentor matching, blockchain security, transparent donations, and career networking. Transform your alumni engagement.',
    keywords: 'alumni management solution, AI-powered platform, mentor matching system, blockchain security, transparent donations, career networking, educational technology solution',
    canonicalUrl: 'https://allumino.teamtrinetra.com/solution'
  },
  features: {
    title: 'Features - Complete Alumni Management Suite | Allumino',
    description: 'Discover Allumino\'s powerful features: admin dashboard, fundraising transparency, alumni network maps, role-based access, LinkedIn sync, mobile apps, and advanced analytics.',
    keywords: 'alumni management features, admin dashboard, fundraising tools, network visualization, mobile apps, LinkedIn integration, analytics, educational platform features',
    canonicalUrl: 'https://allumino.teamtrinetra.com/features'
  },
  tech: {
    title: 'Technology Stack - Modern Tech Architecture | Allumino',
    description: 'Learn about Allumino\'s cutting-edge technology stack: React, Node.js, AI/ML, blockchain, cloud infrastructure, and mobile development. Built for scalability and performance.',
    keywords: 'technology stack, React, Node.js, AI machine learning, blockchain technology, cloud infrastructure, mobile development, educational technology architecture',
    canonicalUrl: 'https://allumino.teamtrinetra.com/tech'
  },
  feasibility: {
    title: 'Feasibility Study - Implementation Analysis | Allumino',
    description: 'Comprehensive feasibility analysis of Allumino\'s implementation: technical requirements, market analysis, cost-benefit evaluation, and implementation roadmap for educational institutions.',
    keywords: 'feasibility study, implementation analysis, technical requirements, market analysis, cost-benefit, educational technology implementation, alumni platform feasibility',
    canonicalUrl: 'https://allumino.teamtrinetra.com/feasibility'
  },
  impact: {
    title: 'Impact & Results - Alumni Engagement Metrics | Allumino',
    description: 'See the measurable impact of Allumino: 93% alumni engagement, 156% higher donations, improved mentorship rates, and enhanced career opportunities. Real results from our platform.',
    keywords: 'alumni engagement impact, donation increase, mentorship success, career opportunities, educational impact metrics, platform results, alumni platform benefits',
    canonicalUrl: 'https://allumino.teamtrinetra.com/impact'
  },
  research: {
    title: 'Research & Development - Innovation in Alumni Management | Allumino',
    description: 'Explore our research methodology, market analysis, user studies, and innovation approach that led to Allumino\'s development. Evidence-based alumni management solutions.',
    keywords: 'alumni management research, educational technology research, user studies, market analysis, innovation methodology, evidence-based solutions, academic research',
    canonicalUrl: 'https://allumino.teamtrinetra.com/research'
  },
  team: {
    title: 'Our Team - Meet Team Trinetra | Allumino',
    description: 'Meet the talented Team Trinetra behind Allumino. Learn about our expertise in AI, blockchain, cloud computing, and educational technology. Smart India Hackathon 2025 finalists.',
    keywords: 'Team Trinetra, development team, AI experts, blockchain developers, cloud engineers, educational technology team, Smart India Hackathon, team members',
    canonicalUrl: 'https://allumino.teamtrinetra.com/team'
  },
  demo: {
    title: 'Live Demo - Try Allumino Platform | Allumino',
    description: 'Experience Allumino\'s features with our interactive demo. Test the AI-powered mentor matching, explore the alumni network, and see how our platform transforms engagement.',
    keywords: 'alumni platform demo, interactive demo, mentor matching demo, alumni network demo, platform trial, educational technology demo, Allumino demo',
    canonicalUrl: 'https://allumino.teamtrinetra.com/demo'
  },
  faq: {
    title: 'FAQ - Frequently Asked Questions | Allumino',
    description: 'Find answers to common questions about Allumino: features, pricing, implementation, security, and more. Get all the information you need about our alumni management platform.',
    keywords: 'FAQ, frequently asked questions, Allumino questions, alumni platform FAQ, educational technology FAQ, platform support, help center',
    canonicalUrl: 'https://allumino.teamtrinetra.com/faq'
  },
  login: {
    title: 'Login - Access Allumino Platform | Allumino',
    description: 'Login to your Allumino account to access the AI-powered alumni management platform. Secure login with role-based access for administrators, alumni, and students.',
    keywords: 'login, sign in, Allumino login, platform access, secure login, alumni platform login, educational platform access',
    canonicalUrl: 'https://allumino.teamtrinetra.com/login'
  }
}

// Helper function to get SEO data for a specific page
export const getSEOData = (page: keyof typeof seoData) => {
  return seoData[page]
}
