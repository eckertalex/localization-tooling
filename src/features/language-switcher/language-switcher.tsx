import {getLocale, setLocale} from 'i18n/i18n'
import {t} from 'ttag'

function LanguageSwitcher() {
  function handleLanguageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setLocale(e.target.value)
    window.location.reload()
  }

  return (
    <div style={{marginTop: '32px', display: 'flex', flexDirection: 'column', width: '128px'}}>
      <label htmlFor="language-select">{t`Language`}</label>
      <select id="language-select" value={getLocale()} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  )
}

export {LanguageSwitcher}
