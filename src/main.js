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
const messages = {
  en: {
    message: {
      back: 'Back',
      end: 'End',
      wantMore: 'Want more?',
      artCollection: 'Art Collection',
      artCollectionSubtitle: 'ZeroArtium Fall Collection.',
      artCollectionDescriptionOne: 'All pieces are handpicked from our in-house collection and will be presented at our fall collection exhibition at the end of September.',
      artCollectionDescriptionTwo: 'You can find more artworks on our Instagram page or contact our team directly via the link below.',
      viewCollection: 'View Collection',
      visionSubtitle: 'What drives us.',
      visionDescriptionOne: 'ZeroArtium offers unique and exquisite art and is a collective of international creative minds presenting modern art at the cutting edge.',
      visionDescriptionTwo: 'We believe that art should not only be enjoyed as an individual, but in community. That is why we regularly organise exhibitions of our collective of artists with new collections.',
      artists: 'Artists',
      artistsSubtitle: 'The Masterminds behind the Creations.',
      viewArtists: 'View Artists',
      artistsDescription: 'View our artists and learn more about their personalities and work. Please be aware that not all of our artists perform in public, but we are happy to organise appointments on request.',
      contact: 'Contact',
      contactSubtitle: 'Keep in touch.',
      contactDescription: 'Feel free to contact us via the channels below and our team will take care of your request in no time.',
      legalNotice: 'Legal notice',
      privacyStatement: 'Privacy statement',

    }
  },
  de: {
    message: {
      back: 'Zurück',
      end: 'Ende',
      wantMore: 'Möchten Sie mehr?',
      artCollection: 'Kunst Kollektion',
      artCollectionSubtitle: 'ZeroArtium Herbst Kollektion.',
      artCollectionDescriptionOne: 'Alle Exponate sind handverlesen aus unserer hauseigenen Kollektion und werden auf unserer Herbstausstellung im September präsentiert.',
      artCollectionDescriptionTwo: 'Weitere Kunstwerke finden Sie auf unserer Instagram-Seite oder kontaktieren Sie unser Team direkt über die untenstehende Links.',
      viewCollection: 'Kollektion anzeigen',
      visionSubtitle: 'Was uns antreibt.',
      visionDescriptionOne: 'ZeroArtium bietet einzigartige und exquisite Kunst an und präsentiert ein Kollektiv von internationalen kreativen Köpfen, die moderne Kunst am Puls der Zeit präsentieren.',
      visionDescriptionTwo: 'Wir sind der Meinung, dass man Kunst nicht nur als Individuum genießen sollte, sondern in der Gemeinschaft. Deshalb veranstalten wir regelmäßig Ausstellungen mit unserem Künstlerkollektiv und neuen Kollektionen.',
      artists: 'Künstler',
      artistsSubtitle: 'Die Schöpfer hinter den Kreationen.',
      viewArtists: 'Künstler anzeigen',
      artistsDescription: 'Lernen Sie unsere Künstler kennen und erfahren Sie mehr über ihre Persönlichkeiten und Arbeit. Bitte beachten Sie, dass nicht alle unsere Künstler öffentlich auftreten, aber auf Anfrage können wir gerne Termine organisieren.',
      contact: 'Kontakt',
      contactSubtitle: 'Bleiben Sie in Kontakt.',
      contactDescription: 'Kontaktieren Sie uns einfach über die unten stehenden Kanäle und unser Team wird sich in kürzester Zeit um Ihr Anliegen kümmern.',
      legalNotice: 'Impressum',
      privacyStatement: 'Datenschutz'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: navigator.language.split('-')[0], // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
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

