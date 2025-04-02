import tiagoportoConfig from '@tiagoporto/prettier-config'

/** @type {import("prettier").Config} */
export default {
  ...tiagoportoConfig,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    ...tiagoportoConfig.overrides,
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
