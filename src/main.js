import Vue from 'vue'
import App from './App.vue'
import Privacy from '../src/components/Privacy.vue'
import Terms from '../src/components/Terms.vue'
import NotFound from '../src/components/NotFound.vue'

import device from "vue-device-detector"
Vue.use(device)

const routes = {
  '/': App,
  '/privacy': Privacy,
  '/terms': Terms
}

new Vue({
  el: '#app',
  name: 'App',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render(h) { return h(this.ViewComponent) }
})

