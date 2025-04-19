import { PUBLIC_GTAG_ID } from 'astro:env/client'

window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', PUBLIC_GTAG_ID)
