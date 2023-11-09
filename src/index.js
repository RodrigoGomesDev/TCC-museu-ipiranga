import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { IntlProvider } from 'react-intl';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import messages_en from './i18n/en/translation.json'; 
import messages_es from './i18n/es/translation.json';
import messages_fr from './i18n/fr/translation.json';
import messages_ptBr from './i18n/pt-br/translation.json';


const locale = navigator.language;
console.log('Locale:', locale);
const messages = {
  'en': messages_en,
  'es': messages_es,
  'fr': messages_fr,
  'pt-BR': messages_ptBr
};
console.log('Messages:', messages[locale]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <App />
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>
);