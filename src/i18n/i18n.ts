import {addLocale, useLocale} from 'ttag'
const LOCALE = '__locale'

function getLocale() {
  return localStorage.getItem(LOCALE) || 'en'
}

function setLocale(locale: string) {
  localStorage.setItem(LOCALE, locale)
}

// setup
const locale = getLocale()

if (locale !== 'en') {
  const translationsObj = require(`../../locales/${locale}.po.json`)
  addLocale(locale, translationsObj)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLocale(locale)
}

export {getLocale, setLocale}
