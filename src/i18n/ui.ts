import en from './locales/en.json'
import pt from './locales/pt-br.json'

export const languages = {
  en: 'English',
  'pt-br': 'Português',
}

export const defaultLang = 'en'

// whether the defaultLang should show up in the url just as other locales.
export const showDefaultLang = true

export const ui = {
  en,
  'pt-br': pt,
} as const

export const routes = {
  'pt-br': {
    blog: 'blog',
    'blog.good-practices-and-automation-in-the-front-end-talk':
      'blog.boas-praticas-e-automatizacao-de-tarefas-no-front-end-talk',
    'blog.hybrid-apps-with-ionic-you-can-start-developing-now-talk':
      'blog.aplicativos-hibridos-com-ionic-voce-tambem-pode-comecar-a-desenvolver-agora-talk',
    'blog.saudade-typeface': 'blog.fonte-saudade',
  },
}
