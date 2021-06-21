import {t} from '@lingui/macro'
import {useLingui} from '@lingui/react'

function LanguageSwitcher() {
  const {i18n} = useLingui()

  function handleLanguageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    i18n.activate(e.target.value)
  }

  return (
    <div style={{marginTop: '32px', display: 'flex', flexDirection: 'column', width: '128px'}}>
      <label htmlFor="language-select">{t`Language`}</label>
      <select id="language-select" value={i18n.locale} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  )
}

export {LanguageSwitcher}
