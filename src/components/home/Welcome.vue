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
    <div class="welcome-image" title="Old Romanian Temple"></div>
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  flex: 1.3;
  height: 90vh;
}

#navigation-button {
  transition: all 0.2s ease-in-out;
}

#navigation-button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

#navigation-pointer:hover {
  cursor: pointer;
  transform: scale(1.1);
}

@media only screen and (max-width: 500px) {
  .welcome-image {
    width: 0%;
    visibility: hidden;
  }
}
</style>