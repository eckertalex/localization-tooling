import React from 'react'
import ReactDOM from 'react-dom'
import {i18n} from '@lingui/core'
import {I18nProvider} from '@lingui/react'
import {messages as enMessages} from 'locales/en/messages.js'
import {messages as deMessages} from 'locales/de/messages.js'
import {App} from 'app'

i18n.load('en', enMessages)
i18n.load('de', deMessages)
i18n.activate('en')

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
