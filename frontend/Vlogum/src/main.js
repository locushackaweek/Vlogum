import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueClip from 'vue-clip'
import {store} from './Store/store'

Vue.use(VueClip)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false
import('../node_modules/vuetify/dist/vuetify.min.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
