<template>
  <div class="container-privacy">
    <div v-if="!this.$device.mobile" class="privacy-desktop">
      <a href="/">
        <h1 class="name-link">ZeroArtium</h1>
      </a>
      <privacy-statement-text></privacy-statement-text>
      <app-footer></app-footer>
    </div>
    <div v-else class="privacy-mobile">
      <a href="/">
        <h1 class="name-link">ZeroArtium</h1>
      </a>
      <privacy-statement-text></privacy-statement-text>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Privacy",
};
</script>

<style>
/*---- General Styles ----*/
.container-privacy {
  height: 100vh;
  width: 100vw;
  overflow: scroll;
}

.name-link {
  margin-top: 0;
  margin-bottom: 1vh;
}

.title-privacy {
  margin: 0;
}

/*---- Desktop Styles ----*/
.privacy-desktop {
  margin-left: 2%;
  margin-right: 2%;
}

/*---- Mobile Styles ----*/
.privacy-mobile {
  margin-left: 2%;
  margin-right: 2%;
}

.privacy-mobile h1 {
  font-size: 12vw;
  font-weight: normal;
}

.privacy-mobile h2 {
  font-size: 10vw;
  font-weight: normal;
}

.privacy-mobile h3 {
  font-size: 6vw;
  font-weight: normal;
}

.privacy-mobile h5 {
  font-size: 5vw;
}
</style>
