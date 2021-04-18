import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import Privacy from '../src/components/Privacy.vue'
import Terms from '../src/components/Terms.vue'
import NotFound from '../src/components/NotFound.vue'
import Collection from '../src/components/Collection.vue'
import Artists from '../src/components/Artists.vue'

// Reusbale Components
import Footer from '../src/components/Footer.vue'
import ArtCollectionText from '../src/components/ArtCollectionText.vue'
Vue.component('app-footer', Footer)
Vue.component('art-collection-text', ArtCollectionText)

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

