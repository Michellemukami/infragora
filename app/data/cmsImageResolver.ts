import articleImage from '~/assets/images/article.jpg'
import newsImage from '~/assets/images/news.jpg'
import conferenceImage from '~/assets/images/home/conference.jpg'
import energyImage from '~/assets/images/home/energy.jpg'
import outlookImage from '~/assets/images/home/outlook.jpg'
import portfolioImage from '~/assets/images/home/portfolio.jpg'
import sustainabilityImage from '~/assets/images/home/sustainability.jpg'

const cmsImageMap: Record<string, string> = {
  article: articleImage,
  news: newsImage,
  conference: conferenceImage,
  energy: energyImage,
  outlook: outlookImage,
  portfolio: portfolioImage,
  sustainability: sustainabilityImage,
}

export const resolveCmsImageSrc = (src?: string) => {
  if (!src) return ''

  if (src.startsWith('/') || src.startsWith('http')) {
    return src
  }

  return cmsImageMap[src] || src
}
