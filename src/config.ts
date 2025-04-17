// https://astro.build/config
export const config = {
  base: '/',
  trailingSlash: 'never',
}

export const base = config.base
  ? config.base.split('/').length === 1
    ? config.base
    : config.base.split('/')[1] || ''
  : ''

export const configHelper: {
  isTrailingSlashEnabled: boolean
  isBaseEnabled: boolean
} = {
  isTrailingSlashEnabled:
    config.trailingSlash !== undefined && config.trailingSlash === 'always',
  isBaseEnabled: base !== '',
}
