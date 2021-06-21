function LanguageSwitcher() {
  function handleLanguageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    // noop
  }

  return (
    <div style={{marginTop: '32px', display: 'flex', flexDirection: 'column', width: '128px'}}>
      <label htmlFor="language-select">Language</label>
      <select id="language-select" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  )
}

export {LanguageSwitcher}
