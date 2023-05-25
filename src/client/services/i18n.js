import i18n from 'i18next';
import ChainedBackend from "i18next-chained-backend";
import HttpBackend  from 'i18next-http-backend';
import LocalStorageBackend from "i18next-localstorage-backend";

i18n
  .use(ChainedBackend)
  .init({
    supportedLngs: ['en-US'],
    fallbackLng: ['en-US'],
    backend: {
      backends: [
        LocalStorageBackend,
        HttpBackend,
      ],
      backendOptions: [{
        expirationTime: 24 * 60 * 60 * 1000
      }, {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }]
    },
  });

  export default i18n;