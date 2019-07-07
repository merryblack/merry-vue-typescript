import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Scene from '../components/Scene.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/scene',
      name: 'Scene',
      component: Scene
    }
  ]
})
