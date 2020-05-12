import Vue from 'vue'
import App from './App.vue'

import './firebase'
import { firestorePlugin } from 'vuefire'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)
Vue.use(firestorePlugin);
new Vue({
  el: '#app',
  render: h => h(App)
})
