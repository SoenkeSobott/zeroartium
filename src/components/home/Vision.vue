<template>
  <div class="shadow-box">
    <div class="left-box">
      <div class="header-box">
        <h2 id="title">Vision</h2>
        <h4 id="subtitle">{{ $t("message.visionSubtitle") }}</h4>
      </div>
      <div class="content">
        <vision-text></vision-text>
      </div>
      <app-footer></app-footer>
    </div>
    <div class="right-image vision-image" title="Vision"></div>
  </div>
</template>

<script>
export default {
  name: "Vision",
  methods: {
    goToPage(pageNumber) {
      this.$emit("clicked", pageNumber);
    },
  },
};
</script>


<style lang="scss" scoped>
.left-box {
  display: flex;
  flex-flow: column;
  flex: 1.3;
  height: auto;
}

.vision-image {
  background-image: url("../../assets/img/EpicFigureWoman.jpg");
  flex: 0.7;
}

@media only screen and (max-width: 500px) {
  .vision-image {
    width: 0%;
    visibility: hidden;
    display: none;
  }
}
</style>