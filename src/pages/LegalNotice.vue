<template>
  <div class="container-terms">
    <div v-if="!this.$device.mobile" class="terms-desktop">
      <legal-notice-content></legal-notice-content>
      <app-footer></app-footer>
    </div>
    <div v-else class="terms-mobile">
      <legal-notice-content></legal-notice-content>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terms",
};
</script>

<style>
/*---- General Styles ----*/
.container-terms {
  height: 100vh;
  width: 100vw;
  overflow: scroll;
}

.name-link {
  margin-top: 0;
  margin-bottom: 1vh;
}

.title-terms {
  margin: 0;
}

/*---- Desktop Styles ----*/
.terms-desktop {
  margin-left: 2%;
  margin-right: 2%;
}

/*---- Mobile Styles ----*/
.terms-mobile {
  margin-left: 2%;
  margin-right: 2%;
}

.terms-mobile h1 {
  font-size: 12vw;
  font-weight: normal;
}

.terms-mobile h2 {
  font-size: 10vw;
  font-weight: normal;
}

.terms-mobile h3 {
  font-size: 6vw;
  font-weight: normal;
}

.terms-mobile h5 {
  font-size: 5vw;
}
</style>