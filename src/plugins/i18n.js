import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    welcomeMsg: 'Welcome, please choose when you want to travel bellow'
  },
  'de': {
    welcomeMsg: 'Willkommen, bitte wählen Sie unten, wann Sie reisen möchten'
  }
}

export default {
  messages
}