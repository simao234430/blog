import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
import { createRouter } from '@/router'
import { createI18n } from '@/i18n'
const router = createRouter()
const i18n = createI18n()
new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')