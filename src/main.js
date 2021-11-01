import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import Privacy from '../src/pages/Privacy.vue'
import LegalNotice from '../src/pages/LegalNotice.vue'
import NotFound from '../src/pages/NotFound.vue'
import Collection from '../src/pages/Collection.vue'
import Artists from '../src/pages/Artists.vue'
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css' // Cookie banner css

// Reusbale Components
import Footer from '../src/components/layout/Footer.vue'
import ThirdPartyContent from '../src/components/layout/ThirdPartyContent.vue'

import ArtCollectionText from '../src/components/text/ArtCollectionText.vue'
import VisionText from '../src/components/text/VisionText.vue'
import ArtistsText from '../src/components/text/ArtistsText.vue'
import CollectionTitleText from '../src/components/text/CollectionTitleText.vue'
import LegalNoticeText from '../src/components/text/LegalNoticeText.vue'
import DSGVOText from '../src/components/text/DSGVOText.vue'
import PrivacyStatementText from '../src/components/text/PrivacyStatementText.vue'


import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.component('app-footer', Footer)
Vue.component('third-party-content', ThirdPartyContent)

Vue.component('art-collection-text', ArtCollectionText)
Vue.component('vision-text', VisionText)
Vue.component('artists-text', ArtistsText)
Vue.component('collection-title-text', CollectionTitleText)
Vue.component('legal-notice-text', LegalNoticeText)
Vue.component('dsgvo-text', DSGVOText)
Vue.component('privacy-statement-text', PrivacyStatementText)

Vue.component("vue-cookie-accept-decline", VueCookieAcceptDecline);

// Device detector
import device from "vue-device-detector"
Vue.use(device)

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

