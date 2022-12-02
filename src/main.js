import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import Privacy from '../src/pages/Privacy.vue'
import LegalNotice from '../src/pages/LegalNotice.vue'
import NotFound from '../src/pages/NotFound.vue'
import CollectionMobile from '../src/pages/CollectionMobile.vue'
import WinterCollection from '../src/pages/WinterCollection.vue'
import ArtistsMobile from '../src/pages/ArtistsMobile.vue'
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
import VueI18n from 'vue-i18n'
import device from "vue-device-detector"
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css' // Cookie banner css
import VideoBackground from 'vue-responsive-video-background-player'

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
Vue.component('video-background', VideoBackground);

// Vue use ...
Vue.use(device)
Vue.use(VueI18n)

// Defining routes
const routes = {
  '/': App,
  '/privacy': Privacy,
  '/legal-notice': LegalNotice,
  '/collection-mobile': CollectionMobile,
  '/artists-mobile': ArtistsMobile,
  '/winter-collection': WinterCollection
}

/* Reusable Components */
let ArtCollectionDescription = Vue.component('art-collection-description', {
  template: '<p> All pieces are handpicked from our in-house collection and will be available until' +
    'the presentation of the Summer Collection at the end of June.</p>'
})

// ------- i18n ---------
function loadLocaleMessages() {
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
  locale: window.localStorage.getItem("appLanguage") || 'de', // set locale
  fallbackLocale: 'de',
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
      details: "50 x 60 • 360,00 €",
      description: "artTexts.beautifulMind",
      artistId: 'MB'
    },
    {
      path: require("./assets/img/2022Spring/CandleBar.png"),
      title: "Candle Bar • D.L. Béni",
      details: "40 x 40 • 800,00 €",
      description: "artTexts.candleBar",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Spring/Jigokudani.jpg"),
      title: "Jigokudani • D.L. Béni",
      details: "56 x 42 / 70 x 55 • 800,00 € (SOLD)",
      description: "artTexts.jigokudani",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Spring/CityAtNight.png"),
      title: "City by Night • D.L. Béni",
      details: "100 x 100 • 1300,00 €",
      description: "artTexts.cityAtNight",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Spring/DigitalPurge.jpg"),
      title: "Digital Purge • Massimo Bene",
      details: "60 x 80 • 510,00 €",
      description: "artTexts.digitalPurge",
      artistId: 'MB'
    },
    {
      path: require("./assets/img/2022Spring/ForteresseDeGlace.png"),
      title: "Forteresse de Glace • D.L. Béni",
      details: "160 x 100 • 3000,00 € (SOLD)",
      description: "artTexts.fortressDeGlace",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Spring/PantaRhei.jpg"),
      title: "Panta Rhei • Massimo Bene",
      details: "60 x 80 • 490,00 €",
      description: "artTexts.pantaRhei",
      artistId: 'MB'
    },
    {
      path: require("./assets/img/2022Spring/TavernsMirror.jpeg"),
      title: "The Taverns Mirror • D.L. Béni",
      details: "40 x 50 • 900,00 €",
      description: "artTexts.tavernsMirror",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Spring/Themisto.png"),
      title: "Themisto • D.L. Béni",
      details: "60 x 80 • 1250,00 €",
      description: "artTexts.themisto",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Spring/Turbulences.jpg"),
      title: "Turbulences • Massimo Bene",
      details: "70 x 100 • 560,00 €",
      description: "artTexts.turbulences",
      artistId: 'MB'
    },
    {
      path: require("./assets/img/2022Summer/blackVelvet.jpg"),
      title: "black velvet • Emily Harry",
      details: "70 x 100 • 2400,00 €",
      description: "artTexts.blackVelvet",
      artistId: 'EH'
    },
    {
      path: require("./assets/img/2022Summer/endlessSummer.jpg"),
      title: "endless summer • Emily Harry",
      details: "120 x 120 • SOLD",
      description: "artTexts.endlessSummer",
      artistId: 'EH'
    },
    {
      path: require("./assets/img/2022Summer/selfSalvation.jpg"),
      title: "self salvation • Emily Harry",
      details: "60 x 80",
      description: "artTexts.selfSalvation",
      artistId: 'EH'
    },
    {
      path: require("./assets/img/2022Summer/untouchedByGreed.jpg"),
      title: "untuched by greed • Emily Harry",
      details: "50 x 70 • 1300 €",
      description: "artTexts.untouchedByGreed",
      artistId: 'EH'
    },
    {
      path: require("./assets/img/2022Spring/Humility.jpg"),
      title: "Humility • Gianni Vasi",
      details: "20 x 30 • 250 € (SOLD)",
      description: "artTexts.humility",
      artistId: 'GV'
    },
    {
      path: require("./assets/img/2022Spring/Fountain.jpg"),
      title: "Fountain • Gianni Vasi",
      details: "30 x 20 • 500 €",
      description: "artTexts.fountain",
      artistId: 'GV'
    },
    {
      path: require("./assets/img/2022Spring/VerkehrteWelt.png"),
      title: "Verkehrte Welt • Gianni Vasi",
      details: "30 x 20 • 350 €",
      description: "artTexts.verkehrteWelt",
      artistId: 'GV'
    },
  ],
  artists: [
    {
      path: require("./assets/img/MB.jpeg"),
      title: "Massimo Bene • Frankfurt",
    },
    {
      path: require("./assets/img/DL_Beni.jpeg"),
      title: "D. L. Béni • Basel",
    },
    {
      path: require("./assets/img/GV.jpg"),
      title: "Gianni Vasi • Loerrach",
    },
    {
      path: require("./assets/img/EH.jpg"),
      title: "Emily Harry • Hamburg",
    }
  ],
  winterCollectionImages: [
    {
      path: require("./assets/img/2022Winter/Themisto.png"),
      title: "Themisto",
      artist: "D.L. Béni",
      details: "45 x 30 / 70 x 50",
      price: "1250,00 €",
      description: "Vielschichtig wie das Universum ist auch unsere Persönlichkeit. In all unseren scheinbar immer gleichen alltäglichen Herausforderungen, findet sich ein immenses Spektrum an Individualität – welche meist unerkannt bleibt. Fühlen wir uns vielleicht im Strom der Normalität sicherer als in der Individualität? Vielleicht wollen wir auch nur bis zu einem bestimmten Grad besonders sein?",
      artStyle: "Cardboard / Oil",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Winter/Noseman.jpg"),
      title: "Nose Man",
      artist: "D.L. Béni",
      details: "56 x 42 / 70 x 55",
      price: "800,00 €",
      description: "Der Nasenmann ist eigentlich ein Niemand und doch fühlen sich einige porträtiert. Woran das liegt, kann selbst ich nicht sagen. Besonders eine Person, die mir nahe steht, spricht mich oft darauf an und fragt spaßeshalber, weshalb ich sie gemalt habe. Kann es sein, dass ich das unbewusst tue? Interessanterweise findet sich diese Person (ihrer Meinung nach) bereits auf einem anderen Kunstwerk von mir. Auch bei diesem war es nicht gewollt. Wisst ihr, welches?",
      artStyle: "Paper / Coal",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Winter/Timebot.png"),
      title: "Timebot",
      artist: "D.L. Béni",
      details: "140 x 90",
      price: "4000,00 €",
      description: "Stellen Sie sich vor, dass der Tag kommt, an dem Zeitreisen möglich sind. Man kann jedoch nur einmal reisen. Stellen Sie sich selbst die Frage: Wohin?",
      artStyle: "Selfmade Canvas / Oil / Spray",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Winter/SilverWorld.png"),
      title: "Silver World",
      artist: "D.L. Béni",
      details: "100 x 70 / 110 x 85",
      price: "2700,00 €",
      description: "Die Erde ist der kostbarste Planet in unserem Universum. Er bietet uns als einziger die Möglichkeit für Leben. Doch meistens sehen wir die Kostbarkeit nur in materiellen Dingen wie Gold oder Silber…",
      artStyle: "Cardboard / Black 3.0 / Spray",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Winter/Silver-City.jpg"),
      title: "Silver City",
      artist: "D.L. Béni",
      details: "56 x 42 / 70 x 55",
      price: "1200,00 €",
      description: "Eine richtige Idee und die damit verbundene Industrie kann eine Stadt reich machen. Doch was macht eine Stadt mit ihrem Wohlstand? Wird das Geld richtig angelegt oder einfach nur verschleudert, wie so oft.",
      artStyle: "Paper / Oil / Spray",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Winter/Blackbeard.jpg"),
      title: "Blackbeard",
      artist: "D.L. Béni",
      details: "50 x 25 / 70 x 50",
      price: "1500,00 €",
      description: "Sehen Sie ihn auch?",
      artStyle: "Alu / Oil / Black 3.0",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Winter/Aquaedukt.jpg"),
      title: "Aquädukt",
      artist: "D.L. Béni",
      details: "56 x 42 / 70 x 55",
      price: "800,00 €",
      description: "Zu jedem Bauwerk gehört auch ein Bauherr. Und zu jedem Kunstwerk gehört auch ein Künstler. Beide wünschen sich, dass ihr Machen die Zeit überdauert.",
      artStyle: "Canvas / Oil / Spray",
      artistId: 'DLB'
    },
    {
      path: require("./assets/img/2022Winter/yamilá.jpeg"),
      title: "Yamilá",
      artist: "Emily Harry",
      details: "80 x 80",
      price: "1400,00 €",
      description: "Einfach mal loslassen, sich von all den Bürden, all den Sorgen, all dem Überdenken mal befreien. Tief durchatmen und sich vorsichtig nach hinten lehnen, denn man wird nicht fallen, auch wenn es immer so erscheint. Die Angst, dass einen nichts auffängt, ist immer da, doch sie ist unbegründet, denn man ist nicht ohne Grund so weit gekommen! All die Arbeit, jede Sekunde die man in seine Leidenschaft reingesteckt hat, türmt sich wie eine große, warme und super weiche Raubkatze hinter einem auf. Niemand muss da sein, um einen aufzufangen, das wird man selbst tun, man selbst und all das, was man schon investiert hat, um seinen Träumen ein Stück näher zu kommen. Also vergiss nicht auch mal innezuhalten, durchzuatmen, und dich umzudrehen, zu sehen was alles hinter dir steht, gibt dir die Kraft wieder nach vorne zu schauen und weiter zu kämpfen!",
      artStyle: "Leinwand / Öl",
      artistId: 'EH'
    },
    {
      path: require("./assets/img/2022Winter/untouchedByGreed.jpeg"),
      title: "Untouched by Greed",
      artist: "Emily Harry",
      details: "50 x 70",
      price: "1300,00 €",
      description: "Gier ist eine unaufhaltsame Naturgewalt, die alles, was ihr im Weg steht, vernichtet. Sie nimmt ohne Maß, ohne Vernunft, ohne jemals satt zu sein. So etwas wie ein Gewissen besitzt sie nicht, all jenes, was sie begehrt, muss ihr sein. Sie ist wie eine Krankheit, die sich langsam in unserem Kopf ausbreitet, mehr und immer mehr will. Doch was bleibt uns noch erhalten, wenn wir immer nur nehmen, immer nur haben wollen und nie befriedigt sein können. Niemals auch mal etwas zurückgeben können für all das, was wir genommen haben.",
      artStyle: "Leinwand / Öl / Spachtelmasse",
      artistId: 'EH'
    },
    {
      path: require("./assets/img/2022Winter/bonfire.jpeg"),
      title: "Bonfire",
      artist: "Emily Harry",
      details: "120 x 120",
      price: "1900,00 €",
      description: "Die Fantasie unserer Köpfe ist es, welche unserem Leben Farbe schenkt. Sie lässt uns träumen, erfinden und voller Neugier die Welt entdecken. Sie lässt uns Geschichten erschaffen, voll fabelhafter Wesen, voll mit Magie und Wundern aller Art. Was wäre eine Kindheit denn schon, ohne Drachen und Feen, ohne Hasen mit Taschenuhren, oder fliegenden Besen? Fantasie lässt uns leben, lässt uns träumen und lässt uns alle, ganz gleich wie alt, wieder ein klein bisschen Kind sein.",
      artStyle: "Leinwand / Öl / 22 Karat Gold",
      artistId: 'EH'
    },
    {
      path: require("./assets/img/2022Winter/expiravit.png"),
      title: "Expiravit",
      artist: "Emily Harry",
      details: "70 x 100",
      price: "1850,00 €",
      description: "Unser Körper ist wie eine hochkomplexe Maschine, kleinste Zahnrädchen greifen ineinander, arbeiten in Harmonie zusammen, für ihr ganz eigenes bestimmtes Ziel. Doch zwischen all diesen komplexen biochemischen Vorgängen gibt es noch unseren Geist, unseren freien Geist. Unbeschränkt von all den körperlichen Barrieren und Grenzen. Er kann träumen und erfinden, ohne sich von der Tristheit der Welt einschränken zu müssen. Nur er selbst kann einzig und allein das Maß seiner Grenzenlosigkeit bestimmen.",
      artStyle: "Leinwand / Öl / Acryl / Spray",
      artistId: 'EH'
    },
    {
      path: require("./assets/img/2022Winter/blackVelvet.jpeg"),
      title: "Black Velvet",
      artist: "Emily Harry",
      details: "70 x 100",
      price: "2400,00 €",
      description: "Wenn doch nur das ganze Leben so anmutig und elegant sein könnte wie die Kunst. Wenn man sich doch nur aussuchen könnte, welche Farben die Welt heute haben soll. Denn manchmal fühlt sie sich schwarz weiß an, manchmal fühlt man sich selbst schwarz weiß an. Doch die Welt ist es nicht, sie ist ein buntes Chaos, indem man verzweifelt nach einem blauen Faden sucht, oder war es ein roter? Sie spielt mit einem, hält dich fest und lässt dich fallen, lässt dich lieben und bereuen, doch all das lohnt sich für die kleinen magischen Momente. Die Momente, in denen man sich lebendig fühlt, sind es, die das Leben lebenswert machen.",
      artStyle: "Leinwand / Öl",
      artistId: 'EH'
    },
    {
      path: require("./assets/img/2022Winter/deepBlueWater.jpg"),
      title: "Deep Blue Water (Sealed)",
      artist: "Massimo Bene",
      details: "50 x 70",
      price: "480,00 €",
      description: "Die Serie “Sealed Landscapes” repräsentiert einen Blick aus der Vogelperspektive auf die Schönheit der verschiedenen Oberflächen, die verglast und verschlossen sind, um die Umwelt vor äußeren Schäden zu schützen. Dieses Werk trägt den Titel 'Deep Blue Water' und stellt ganz offensichtlich die Schönheit des Meeres dar.",
      artStyle: "Alkohol Farbe, Epoxid, Kiefer",
      artistId: 'MB'
    },
    {
      path: require("./assets/img/2022Winter/Panta Rhei.jpg"),
      title: "Pantha Rhei",
      artist: "Massimo Bene",
      details: "60 x 80",
      price: "490,00 €",
      description: "Alles fließt, das Leben geht weiter und man kann es nicht beeinflussen. Doch manchmal ist der Fluss gestört und man befindet sich in einer Sphäre, in der man den Anschein hat, dass alles um einen herum außer Kontrolle gerät. Die Gedanken sind nicht sortiert und man spürt eine innere Unruhe. Man hat den Eindruck, es fließt nicht mehr, doch der Schein trügt. Man befindet sich in einem Fluss, der den bestehenden kreuzt. Mitunter muss man eben neue Wege gehen. Diese können viele neue Möglichkeiten eröffnen, haben jedoch auch Risiken. Lässt man sich nicht vom Pfad abbringen, so findet man seinen ursprünglichen Fluss zurück.",
      artStyle: "Canvas / Acryl, Primer & Liquid",
      artistId: 'MB'
    },
    {
      path: require("./assets/img/2022Winter/Turbulences.jpg"),
      title: "Turbulences",
      artist: "Massimo Bene",
      details: "70 x 100",
      price: "560,00 €",
      description: "Im Zeitalter der Digitalisierung ist jeder Einzelne von ständigen Turbulenzen umgeben. Das Bild drückt aus, wie diese Turbulenzen in Form und Farbe um jede Person oszillieren. Das zentrale Zentrum bleibt jedoch frei und spiegelt die Persönlichkeit wider, die ihren Weg in dieser Welt finden muss. Der Einfluss unzähliger Medien und das tägliche Bombardement mit Informationen in unzähligen Formen bringen das Leben zum Schwingen. Meistens auf eine Art und Weise, die man nicht will, nach der aber jeder süchtig ist. Warum sind wir eigentlich so süchtig nach Informationen?",
      artStyle: "Canvas / Acryl & Primer",
      artistId: 'MB'
    }
  ],
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

