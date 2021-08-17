import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import Privacy from '../src/pages/Privacy.vue'
import Terms from '../src/pages/Terms.vue'
import NotFound from '../src/pages/NotFound.vue'
import Collection from '../src/pages/Collection.vue'
import Artists from '../src/pages/Artists.vue'
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css' // Cookie banner css

// Reusbale Components
import Footer from '../src/components/layout/Footer.vue'
import ArtCollectionText from '../src/components/text/ArtCollectionText.vue'
import VisionText from '../src/components/text/VisionText.vue'

Vue.component('app-footer', Footer)
Vue.component('art-collection-text', ArtCollectionText)
Vue.component('vision-text', VisionText)
Vue.component("vue-cookie-accept-decline", VueCookieAcceptDecline);

// Device detector
import device from "vue-device-detector"
Vue.use(device)

// Defining routes
const routes = {
  '/': App,
  '/privacy': Privacy,
  '/terms': Terms,
  '/collection-mobile': Collection,
  '/artists-mobile': Artists
}

/* Reusable Components */
let ArtCollectionDescription = Vue.component('art-collection-description', {
  template: '<p> All pieces are handpicked from our in-house collection and will be available until' +
    'the presentation of the Summer Collection at the end of June.</p>'
})

new Vue({
  el: '#app',
  name: 'App',
  data: {
    currentRoute: window.location.pathname
  },
  components: {
    ArtCollectionDescription
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render(h) { return h(this.ViewComponent) }
})

