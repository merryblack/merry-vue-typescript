import Vue from 'vue'
import Router from 'vue-router'
import Today from '../components/Today.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Today',
      component: Today
    }
  ]
})
