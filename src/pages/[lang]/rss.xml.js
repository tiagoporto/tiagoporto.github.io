import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts'
import { useI18n } from '../../i18n/utils'
import { languages } from '../../i18n/ui'
import { slugify } from '../../utils'

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => {
    return { params: { lang } }
  })
}
export async function GET(context) {
  const { lang, tp } = useI18n(context.url)

  const posts = await getCollection('blog', ({ id }) => id.startsWith(lang))
  return rss({
    title: `${SITE_TITLE} - Blog`,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `${tp('/blog')}${slugify(post.slug)}`,
    })),
  })
}
