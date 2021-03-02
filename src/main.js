import Vue from 'vue'
import App from './App.vue'
import Privacy from '../src/components/Privacy.vue'
import Terms from '../src/components/Terms.vue'
import NotFound from '../src/components/NotFound.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import device from "vue-device-detector"

import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(device)

const routes = {
  '/': App,
  '/privacy': Privacy,
  '/terms': Terms
}

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
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

