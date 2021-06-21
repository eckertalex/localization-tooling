import {useTranslation} from 'react-i18next'

function LanguageSwitcher() {
  const {t, i18n} = useTranslation()

  function handleLanguageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div style={{marginTop: '32px', display: 'flex', flexDirection: 'column', width: '128px'}}>
      <label htmlFor="language-select">{t('LanguageSwitcher.language')}</label>
      <select id="language-select" value={i18n.language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  )
}

export {LanguageSwitcher}
