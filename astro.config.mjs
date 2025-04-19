// @ts-check
import { defineConfig, envField } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      PUBLIC_GTAG_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
  site: 'https://tiagoporto.com',
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
})
