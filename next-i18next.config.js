module.exports = {
    i18n: {
      defaultLocale: 'ru_RU',
      locales: ['ru_RU', 'en_GB'],
      localeDetection: false,
    },
    fallbackLng: 'ru_RU',
    ns: ['footer'],
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  };