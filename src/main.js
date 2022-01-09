import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import Privacy from '../src/pages/Privacy.vue'
import LegalNotice from '../src/pages/LegalNotice.vue'
import NotFound from '../src/pages/NotFound.vue'
import Collection from '../src/pages/Collection.vue'
import Artists from '../src/pages/Artists.vue'
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
import VueI18n from 'vue-i18n'
import device from "vue-device-detector"
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css' // Cookie banner css

// Reusbale Components
import Footer from '../src/components/layout/Footer.vue'
import ThirdPartyContent from '../src/components/layout/ThirdPartyContent.vue'
import LegalNoticeContent from '../src/components/text/LegalNoticeContent.vue'
import CollectionSlider from '../src/components/layout/CollectionSlider.vue'

import ArtCollectionText from '../src/components/text/ArtCollectionText.vue'
import VisionText from '../src/components/text/VisionText.vue'
import ArtistsText from '../src/components/text/ArtistsText.vue'
import CollectionTitleText from '../src/components/text/CollectionTitleText.vue'
import DSGVOText from '../src/components/text/DSGVOText.vue'
import PrivacyStatementText from '../src/components/text/PrivacyStatementText.vue'

Vue.component('app-footer', Footer)
Vue.component('third-party-content', ThirdPartyContent)
Vue.component('legal-notice-content', LegalNoticeContent)
Vue.component('collection-slider', CollectionSlider)

Vue.component('art-collection-text', ArtCollectionText)
Vue.component('vision-text', VisionText)
Vue.component('artists-text', ArtistsText)
Vue.component('collection-title-text', CollectionTitleText)
Vue.component('dsgvo-text', DSGVOText)
Vue.component('privacy-statement-text', PrivacyStatementText)

Vue.component("vue-cookie-accept-decline", VueCookieAcceptDecline);

// Vue use ...
Vue.use(device)
Vue.use(VueI18n)

// Defining routes
const routes = {
  '/': App,
  '/privacy': Privacy,
  '/legal-notice': LegalNotice,
  '/collection-mobile': Collection,
  '/artists-mobile': Artists
}

/* Reusable Components */
let ArtCollectionDescription = Vue.component('art-collection-description', {
  template: '<p> All pieces are handpicked from our in-house collection and will be available until' +
    'the presentation of the Summer Collection at the end of June.</p>'
})

// ------- i18n ---------
function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: window.localStorage.getItem("appLanguage") || 'en', // set locale
  fallbackLocale: 'en',
  messages: loadLocaleMessages(), // set locale messages
})


// --------------------------------
//  Store
// --------------------------------
const store = Vue.observable({
  images: [
    {
      path: require("./assets/img/2022Spring/BeautifulMind.jpg"),
      title: "Beautiful Mind • Massimo Bene",
      description: "artTexts.beautifulMind",
    },
    {
      path: require("./assets/img/2022Spring/CandleBar.png"),
      title: "Candle Bar • D.L. Béni",
      description: "artTexts.candleBar",
    },
    {
      path: require("./assets/img/2022Spring/CityAtNight.png"),
      title: "City at Night • D.L. Béni",
      description: "artTexts.cityAtNight",
    },
    {
      path: require("./assets/img/2022Spring/DigitalPurge.jpg"),
      title: "Digital Purge • Massimo Bene",
      description: "artTexts.digitalPurge",
    },
    {
      path: require("./assets/img/2022Spring/ForteresseDeGlace.png"),
      title: "Forteresse de Glace • D.L. Béni",
      description: "artTexts.fortressDeGlace",
    },
    {
      path: require("./assets/img/2022Spring/PantaRhei.jpg"),
      title: "Panta Rhei • Massimo Bene",
      description: "artTexts.pantaRhei",
    },
    {
      path: require("./assets/img/2022Spring/TavernsMirror.jpeg"),
      title: "The Taverns Mirror • D.L. Béni",
      description: "artTexts.tavernsMirror",
    },
    {
      path: require("./assets/img/2022Spring/Themisto.png"),
      title: "Themisto • D.L. Béni",
      description: "artTexts.themisto",
    },
    {
      path: require("./assets/img/2022Spring/Turbulences.jpg"),
      title: "Turbulences • Massimo Bene",
      description: "artTexts.turbulences",
    },
  ]
})

// Make the store globally
Vue.prototype.$store = store

new Vue({
  i18n,
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

