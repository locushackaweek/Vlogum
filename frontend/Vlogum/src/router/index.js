import Vue from 'vue'
import Router from 'vue-router'
import Feeds from '@/components/Feeds/Index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/feeds', component: Feeds }
  ],
  mode: 'history'
})
