const i18n = require('i18n')

i18n.configure({
  locales: ['en-US', 'de-DE'],
  directory: __dirname + '/locales',
  defaultLocale: 'de-DE',
  register: global,
  preserveLegacyCase: false
})

module.exports = i18n
