<template>
  <div class="mobile">
    <div class="back-button">
      <a href="/">
        <h4 class="back-button-title">&#5130; {{ $t("message.back") }}</h4>
      </a>
    </div>
    <div
      class="background"
      v-for="(image, index) in $store.images"
      :key="image.path"
    >
      <div class="shadow-box">
        <div class="header-box">
          <h2 id="title">{{ $t("message.artCollection") }}</h2>
          <collection-title-text></collection-title-text>
        </div>
        <div class="content-mobile">
          <div
            class="content-img-mobile"
            :style="{ backgroundImage: `url(${image.path})` }"
          ></div>
          <div class="title-mobile">
            {{ image.title }}
            <b-button
              class="description-button"
              v-on:click="showDescription(index)"
            >
              <span v-if="selectedItem == index">&#x2715;</span>
              <span v-else>&#9432;</span>
            </b-button>
            <div v-if="selectedItem == index" class="art-description-mobile">
              {{ $t(image.description) }}
            </div>
          </div>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
    <div class="background">
      <div class="shadow-box">
        <div class="header-box">
          <h2 id="title">{{ $t("message.end") }}</h2>
          <h4 id="subtitle">{{ $t("message.wantMore") }}</h4>
        </div>
        <div class="content-mobile-text">
          <art-collection-text></art-collection-text>
          <div class="contact-email">
            <img
              class="social-desktop"
              src="../assets/img/SocialIcons/mail.png"
            />
            <h5>contact@zeroartium.com</h5>
          </div>
          <div class="contact-link" @click="openInstagram()">
            <img
              class="social-desktop"
              src="../assets/img/SocialIcons/instagram-logo.png"
            />
            <h5>ZeroArtium</h5>
          </div>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artists",
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    openInstagram: function () {
      window.open("https://www.instagram.com/zeroartium/", "_blank");
    },
    showDescription(index) {
      if (this.selectedItem !== index) {
        this.selectedItem = index;
      } else {
        this.selectedItem = null;
      }
    },
  },
};
</script>


<style>
@import url("../styles-mobile.css");
</style>