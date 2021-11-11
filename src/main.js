import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Bootstrap
import { registerPlugins } from './plugins'
import { createRouter } from '@/router'
import { createI18n } from '@/i18n'
import { createStore } from '@/store'

import { sync } from 'vuex-router-sync'
const store = createStore()
const router = createRouter()
const i18n = createI18n()
sync(store, router)
registerPlugins(Vue)
new Vue({
  vuetify,
  i18n,
  store,
  router,
  render: h => h(App),
}).$mount('#app')