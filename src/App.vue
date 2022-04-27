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
    <div class="application">
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
      <div id="2" class="base">
        <vision @clicked="goToPage" />
      </div>
      <div id="3" class="base">
        <artists @clicked="goToPage" />
      </div>
      <div id="4" class="base">
        <contact @clicked="goToPage" />
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
    cookieClickedAccept() {
      console.log("Cookie Accepted");
    },
    cookieClickedDecline() {
      console.log("Cookie declined");
    },
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
    }
  },
};
</script>


<style>
@import url("./styles.css");
@import url("./styles-responsive.scss");
@import url('vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css');
</style>