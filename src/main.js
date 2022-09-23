// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n';
import FlagIcon from 'vue-flag-icon';
import messages from '@/plugins/i18n.js'

Vue.use(VueI18n)
Vue.use(FlagIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
const i18n = new VueI18n({
  locale: 'de', // set language
  fallbackLocale: 'en', // set fallback lang
  messages, // set language messages
})

new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>'
})