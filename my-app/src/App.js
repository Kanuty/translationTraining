import React from 'react';
import './App.css';

import { I18nProvider, LOCALES } from './providers/i18n'
import translate from './providers/i18n/translate';

function App() {
  return (
    <I18nProvider locale={LOCALES.ENGLISH}>
      <div className="App">
        <header className="App-header">
          {translate('hello', {name: 'Bartosz'})}
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
