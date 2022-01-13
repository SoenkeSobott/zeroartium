<template>
  <div class="collection-mobile">
    <div class="back-button">
      <a href="/">
        <h5 class="back-button-title">&#5130; {{ $t("message.back") }}</h5>
      </a>
    </div>
    <div class="background" v-for="image in $store.images" :key="image.path">
      <div class="shadow-box">
        <div class="header-box">
          <h2 id="title">{{ $t("message.artCollection") }}</h2>
          <collection-title-text></collection-title-text>
        </div>
        <div class="content-mobile">
          <div
            class="art-img"
            :style="{ backgroundImage: `url(${image.path})` }"
          ></div>
          <div class="art-title-mobile">
            {{ image.title }}
            <b-button v-on:click="toggle">&#9432;</b-button>
            <div v-if="infoVisible" class="art-description-mobile">
              {{ $t(image.description) }}
            </div>
          </div>
          <app-footer></app-footer>
        </div>
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
            <h5>contact@zeroArtium.com</h5>
          </div>
          <div class="contact-link" @click="openInstagram()">
            <img
              class="social-desktop"
              src="../assets/img/SocialIcons/instagram-logo.png"
            />
            <h5>zeroArtium</h5>
          </div>
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artists",
  data() {
    return {
      infoVisible: false,
    };
  },
  methods: {
    openInstagram: function () {
      window.open("https://www.instagram.com/zeroartium/", "_blank");
    },
    toggle() {
      this.infoVisible = !this.infoVisible;
    },
  },
};
</script>


<style>
/*---------------------------*/
/* Special Collection Styles */
/*---------------------------*/

.collection-mobile {
  height: 100vh;
  width: 100vw;
  scroll-behavior: auto;
}

.collection-mobile h1 {
  font-size: 12vw;
  font-weight: normal;
}

.collection-mobile h2 {
  font-size: 10vw;
  font-weight: normal;
}

.collection-mobile h3 {
  font-size: 6vw;
  font-weight: normal;
}

.collection-mobile h4 {
  font-size: 6vw;
}

.collection-mobile h5 {
  font-size: 5vw;
}

.back-button {
  position: absolute;
  margin: 0 0 0 1vw;
  height: 5vh;
  width: 100vw;
  z-index: 100;
}

.back-button-title {
  margin: 1vh;
  height: 5vh;
  width: 100vw;
  z-index: -10;
}

/*----------------------------------------*/
/*          Start Specific styles         */
/*----------------------------------------*/

/*---- General Elements ----*/

.collection-mobile .background {
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.collection-mobile .shadow-box {
  height: auto;
  margin: 10% 5% 5% 5%;
  display: flex;
  flex-flow: column;
  flex: 1;
}

.collection-mobile .legal a {
  font-size: 2vh;
}

.collection-mobile .legal .language-switch {
  font-size: 2vh;
  font-weight: bold;
}

.collection-mobile a {
  text-decoration: none;
}

.collection-mobile p {
  font-size: 4.5vw;
}

.collection-mobile #navigation-button:hover {
  transform: none;
}

.collection-mobile .content-mobile {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.collection-mobile .content-mobile-text {
  margin: 0 10vw 0 10vw;
  flex: 1 1 auto;
}
.collection-mobile .contact-link {
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}

/*---- Art Collection Elements ----*/

.art-title-mobile {
  padding: 5%;
  margin-top: 5%;
  background-color: rgba(245, 239, 239, 0.3);
  border-top: solid;
  border-color: rgb(1, 31, 51);
  text-align: center;
  font-weight: 400;
  font-size: smaller;
}

/* Art One */
.collection-mobile .art-img {
  flex: 1 1 50vh;
  width: 90%;
  margin: 0 5% 0 5%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.art-description-mobile {
  font-weight: normal;
  font-size: small;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-top: 5px;
}
</style>