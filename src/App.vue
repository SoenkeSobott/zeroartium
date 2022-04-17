<template>
  <div>
    <vue-cookie-accept-decline
      :ref="'myPanel1'"
      :elementId="'myPanel1'"
      :debug="false"
      :position="'bottom-right'"
      :type="'floating'"
      :disableDecline="false"
      :transitionName="'slideFromBottom'"
      :showPostponeButton="false"
      @status="cookieStatus"
      @clicked-accept="cookieClickedAccept"
      @clicked-decline="cookieClickedDecline"
    >
      <!-- Optional -->
      <div slot="postponeContent">&times;</div>

      <!-- Optional -->
      <div slot="message">
        {{ $t("cookie.text") }}
        <a href="https://cookiesandyou.com/" target="_blank">{{ $t("cookie.learnMore") }}</a>
      </div>

      <!-- Optional -->
      <div slot="declineContent">{{ $t("cookie.optOut") }}</div>

      <!-- Optional -->
      <div slot="acceptContent">{{ $t("cookie.gotIt") }}</div>
    </vue-cookie-accept-decline>
    <div v-if="!this.$device.mobile" class="application-desktop">
      <div
        class="navigation-indicator"
        v-bind:style="{ transform: computedVisibility }"
      >
        <div id="navigation-pointer" @click="goToPage(0)">
          <h5 v-html="navPointOne"></h5>
        </div>
        <div id="navigation-pointer" @click="goToPage(1)">
          <h5 v-html="navPointTwo"></h5>
        </div>
        <div id="navigation-pointer" @click="goToPage(2)">
          <h5 v-html="navPointThree"></h5>
        </div>
        <div id="navigation-pointer" @click="goToPage(3)">
          <h5 v-html="navPointFour"></h5>
        </div>
        <div id="navigation-pointer" @click="goToPage(4)">
          <h5 v-html="navPointFive"></h5>
        </div>
      </div>
      <div id="0" class="base">
        <welcome @clicked="goToPage" />
      </div>
      <div id="1" class="base">
        <collection @clicked="goToPage" />
      </div>
      <div id="2" class="background">
        <vision @clicked="goToPage" />
      </div>
      <div id="3" class="background">
        <artists @clicked="goToPage" />
      </div>
      <div id="4" class="background">
        <contact @clicked="goToPage" />
      </div>
    </div>

    <!-- ****************************** -->
    <!-- ****************************** -->
    <!--          Mobile View           -->
    <!-- ****************************** -->
    <!-- ****************************** -->
    <div v-else class="mobile">
      <div class="background">
        <div class="shadow-box">
          <div class="header-box">
            <h1 id="title">ZeroArtium</h1>
            <h4 id="subtitle">Where art transcends.</h4>
          </div>
          <div class="content-mobile-left">
            <a href="#collection">
              <h5>&#x25E6; {{ $t("message.artCollection") }}</h5>
            </a>
            <a href="#vision">
              <h5>&#x25E6; Vision</h5>
            </a>
            <a href="#artists">
              <h5>&#x25E6; {{ $t("message.artists") }}</h5>
            </a>
            <a href="#contact">
              <h5>&#x25E6; {{ $t("message.contact") }}</h5>
            </a>
          </div>
          <app-footer></app-footer>
        </div>
      </div>
      <div class="background" id="collection">
        <div class="shadow-box">
          <div class="header-box">
            <h2 id="title">{{ $t("message.artCollection") }}</h2>
            <h4 id="subtitle">{{ $t("message.artCollectionSubtitle") }}</h4>
          </div>
          <div class="content-mobile-left">
            <art-collection-text></art-collection-text>
            <a href="/collection-mobile">
              <h5>&#x25E6; {{ $t("message.viewCollection") }}</h5>
            </a>
            <a href="#contact">
              <h5>&#x25E6; {{ $t("message.contact") }}</h5>
            </a>
          </div>
          <app-footer></app-footer>
        </div>
      </div>
      <div class="background" id="vision">
        <div class="shadow-box">
          <div class="header-box">
            <h2 id="title">Vision</h2>
            <h4 id="subtitle">{{ $t("message.visionSubtitle") }}</h4>
          </div>
          <div class="content-mobile-left">
            <vision-text></vision-text>
          </div>
          <app-footer></app-footer>
        </div>
      </div>
      <div class="background" id="artists">
        <div class="shadow-box">
          <div class="header-box">
            <h2 id="title">{{ $t("message.artists") }}</h2>
            <h4 id="subtitle">{{ $t("message.artistsSubtitle") }}</h4>
          </div>
          <div class="content-mobile-left">
            <artists-text></artists-text>
            <a href="/artists-mobile">
              <h5>&#x25E6; {{ $t("message.viewArtists") }}</h5>
            </a>
            <a href="#contact">
              <h5>&#x25E6; {{ $t("message.contact") }}</h5>
            </a>
          </div>
          <app-footer></app-footer>
        </div>
      </div>
      <div class="background" id="contact">
        <div class="shadow-box">
          <div class="header-box">
            <h2 id="title">{{ $t("message.contact") }}</h2>
            <h4 id="subtitle">{{ $t("message.contactSubtitle") }}</h4>
          </div>
          <div class="content-mobile-left">
            <p>
              {{ $t("message.contactDescription") }}
            </p>
            <div class="contact-email">
              <img
                class="social-desktop"
                src="./assets/img/SocialIcons/mail.png"
              />
              <h5>contact@zeroartium.com</h5>
            </div>
            <div class="contact-link" @click="openInstagram()">
              <img
                class="social-desktop"
                src="./assets/img/SocialIcons/instagram-logo.png"
              />
              <h5>ZeroArtium</h5>
            </div>
          </div>
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue/dist/vue.js";
import Welcome from "./components/home/Welcome.vue";
import Collection from "./components/home/Collection.vue";
import Vision from "./components/home/Vision.vue";
import Artists from "./components/home/Artists.vue";
import Contact from "./components/home/Contact.vue";
Vue.component("welcome", Welcome);
Vue.component("collection", Collection);
Vue.component("vision", Vision);
Vue.component("artists", Artists);
Vue.component("contact", Contact);

export default {
  components: {
    Collection,
    Contact,
  },
  name: "App",
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
      },
      currentPage: 0,
      visibility: "translate(-5em,0)",
      navPointOne: "&#x25C9;",
      navPointTwo: "&#x25EF;",
      navPointThree: "&#x25EF;",
      navPointFour: "&#x25EF;",
      navPointFive: "&#x25EF;",
    };
  },
  watch: {
    currentPage() {
      if (this.currentPage === 0) {
        this.navPointOne = "&#x25C9;";
        this.navPointTwo = "&#x25EF;";
        this.navPointThree = "&#x25EF;";
        this.navPointFour = "&#x25EF;";
        this.navPointFive = "&#x25EF;";
      }

      if (this.currentPage === 1) {
        this.navPointOne = "&#x25EF;";
        this.navPointTwo = "&#x25C9;";
        this.navPointThree = "&#x25EF;";
        this.navPointFour = "&#x25EF;";
        this.navPointFive = "&#x25EF;";
      }

      if (this.currentPage === 2) {
        this.navPointOne = "&#x25EF;";
        this.navPointTwo = "&#x25EF;";
        this.navPointThree = "&#x25C9;";
        this.navPointFour = "&#x25EF;";
        this.navPointFive = "&#x25EF;";
      }

      if (this.currentPage === 3) {
        this.navPointOne = "&#x25EF;";
        this.navPointTwo = "&#x25EF;";
        this.navPointThree = "&#x25EF;";
        this.navPointFour = "&#x25C9;";
        this.navPointFive = "&#x25EF;";
      }

      if (this.currentPage === 4) {
        this.navPointOne = "&#x25EF;";
        this.navPointTwo = "&#x25EF;";
        this.navPointThree = "&#x25EF;";
        this.navPointFour = "&#x25EF;";
        this.navPointFive = "&#x25C9;";
      }
    },
  },
  computed: {
    computedVisibility: function () {
      return this.visibility;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goToPage(pageNumber) {
      document.getElementById(pageNumber).scrollIntoView({
        behavior: "smooth",
      });
    },
    handleScroll() {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let scrollPercent = scrollTop / docHeight;

      if (window.scrollY > 0) {
        this.changeVisibility("translate(0em,0)");
      } else {
        this.changeVisibility("translate(-5em,0)");
      }

      if (scrollPercent >= 0 && scrollPercent <= 0.5) {
        this.currentPage = 0;
      } else if (scrollPercent > 0.5 && scrollPercent <= 1.5) {
        this.currentPage = 1;
      } else if (scrollPercent > 1.5 && scrollPercent <= 2.5) {
        this.currentPage = 2;
      } else if (scrollPercent > 2.5 && scrollPercent <= 3.5) {
        this.currentPage = 3;
      } else if (scrollPercent > 3.5) {
        this.currentPage = 4;
      }
    },
    changeVisibility: function (value) {
      this.visibility = value;
    },
    openInstagram: function () {
      window.open("https://www.instagram.com/zeroartium/", "_blank");
    },
  },
};
</script>


<style>
@import url("./styles.css");
@import url("./styles-mobile.css");

.base {
  padding: 5vh 5%;
}
</style>