// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
 
Vue.use(Vuetify)
import { icons } from './icons'
export default new Vuetify({
 
    icons,
  theme: {
 
    options: {
      customProperties: true,
      variations: false,
    },
  },
})