import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    backend: {
      /* translation file path */
     loadPath: '/countly-banking-demo/assets/i18n/{{ns}}/{{lng}}.json', // for prod
      //   loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',  // for dev

    },
    fallbackLng: 'en',
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;