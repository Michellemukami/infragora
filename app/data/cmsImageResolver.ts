import articleImage from '~/assets/images/article.jpg'
import newsImage from '~/assets/images/news.jpg'

const cmsImageMap: Record<string, string> = {
  article: articleImage,
  news: newsImage,
}

export const resolveCmsImageSrc = (src?: string) => {
  if (!src) return ''

  if (src.startsWith('/') || src.startsWith('http')) {
    return src
  }

  return cmsImageMap[src] || src
}
