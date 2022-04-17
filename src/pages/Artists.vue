<template>
  <div class="mobile">
    <div class="back-button">
      <a href="/">
        <h4 class="back-button-title">&#5130; {{ $t("message.back") }}</h4>
      </a>
    </div>
    <div
      class="background"
      v-for="artist in $store.artists"
      :key="artist.title"
    >
      <div class="shadow-box">
        <div class="header-box">
          <h2 id="title">{{ $t("message.artists") }}</h2>
          <h4 id="subtitle">{{ $t("message.artistsSubtitle") }}</h4>
        </div>
        <div class="content-mobile">
          <div
            class="content-img-mobile"
            :style="{ backgroundImage: `url(${artist.path})` }"
          ></div>
          <div class="title-mobile">{{ artist.title }}</div>
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
        <div class="content-vision">
          <p>
            {{ $t("message.artistsDescription") }}
          </p>
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
  methods: {
    openInstagram: function () {
      window.open("https://www.instagram.com/zeroartium/", "_blank");
    },
  },
};
</script>


<style>
@import url("../styles-mobile.css");
</style>