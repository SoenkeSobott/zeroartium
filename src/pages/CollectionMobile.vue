<template>
  <div class="application">
    <div class="back-button">
      <a href="/">
        <h4 class="back-button-title">&#5130; {{ $t("message.back") }}</h4>
      </a>
    </div>
    <div class="base" v-for="(image, index) in $store.images" :key="image.path">
      <div class="shadow-box">
        <div class="header-box">
          <h2 id="title">{{ $t("message.artCollection") }}</h2>
          <collection-title-text></collection-title-text>
        </div>
        <div class="content">
          <img class="art-image" :src="image.path" :alt="image.title" />
          <div class="description-box">
            {{ image.title }}
            <div class="art-details">
              {{ image.details }}
              <span
                class="description-button"
                v-on:click="showDescription(index)"
              >
                <span v-if="selectedItem == index">&#x2715;</span>
                <span v-else>&#9432;</span>
              </span>
            </div>
            <div v-if="selectedItem == index" class="description">
              {{ $t(image.description) }}
            </div>
          </div>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
    <div class="base">
      <div class="shadow-box">
        <div class="header-box">
          <h2 id="title">{{ $t("message.end") }}</h2>
          <h4 id="subtitle">{{ $t("message.wantMore") }}</h4>
        </div>
        <div class="content">
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
  created() {
    window.addEventListener("resize", this.handleChangeOfScreenSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleChangeOfScreenSize);
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
    handleChangeOfScreenSize(e) {
      if (e.currentTarget.innerWidth > 500) {
        window.location = "/";
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.art-image {
  height: auto;
  width: 100%;
}

.description-button {
  margin-left: 5px;
}

.description {
  font-weight: lighter;
  font-size: normal;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-top: 5%;
}

.art-details {
  font-weight: 400;
  font-size: medium;
  margin-top: 2%;
}
</style>