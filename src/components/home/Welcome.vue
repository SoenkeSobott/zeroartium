<template>
  <div class="shadow-box">
    <div class="left-box">
      <div class="header-box">
        <a href="/">
          <h1 id="title">ZeroArtium</h1>
        </a>
        <h4 id="subtitle">Where art transcends.</h4>
      </div>
      <div class="content">
        <div id="navigation-button" @click="goToPage(1)">
          <h5>&#x25E6; {{ $t("message.artCollection") }}</h5>
        </div>
        <div id="navigation-button" @click="goToPage(2)">
          <h5>&#x25E6; Vision</h5>
        </div>
        <div id="navigation-button" @click="goToPage(3)">
          <h5>&#x25E6; {{ $t("message.artists") }}</h5>
        </div>
        <div id="navigation-button" @click="goToPage(4)">
          <h5>&#x25E6; {{ $t("message.contact") }}</h5>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
    <div class="right-image welcome-image" title="Dopo Lavoro">
      <video-background
        :src="require('@/assets/dopoLavoroWithoutTitle.mp4')"
        :playsWhen="canplaythrough"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    goToPage(pageNumber) {
      this.$emit("clicked", pageNumber);
    },
  },
};
</script>


<style lang="scss" scoped>
.welcome-image {
  background-image: url("../../assets/img/OldRomanianTemple.jpeg");
  flex: 1.3;
}

#navigation-button {
  transition: all 0.2s ease-in-out;
}

#navigation-button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

@media only screen and (max-width: 500px) {
  .welcome-image {
    width: 0%;
    visibility: hidden;
  }

  #navigation-button:hover {
    transform: none;
  }
}
</style>