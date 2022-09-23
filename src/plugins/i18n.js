import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    welcomeMsg: 'Welcome, please choose when you want to travel bellow',
    label: 'Choose Travel Date:'
  },
  'de': {
    welcomeMsg: 'Willkommen, bitte wählen Sie unten, wann Sie reisen möchten',
    label: 'Ausgewähltes Reisedatum:'
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'de', // set fallback locale
  messages, // set locale messages
});

export default i18n