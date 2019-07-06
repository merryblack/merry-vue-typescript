import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFlicking from '@egjs/vue-flicking'

Vue.use(VueFlicking);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
