import Vue from 'vue'
import Router from 'vue-router'
import Feeds from '@/components/Feeds/Index'
import Profile from '@/components/Profile/Index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/feeds', component: Feeds },
    { path: '/vlogs', component: Profile }
  ],
  mode: 'history'
})
