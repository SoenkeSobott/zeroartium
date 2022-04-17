<template>
  <div class="shadow-box">
    <div class="container">
      <div class="left-box-vision">
        <div class="header-box">
          <h2 id="title">Vision</h2>
          <h4 id="subtitle">{{ $t("message.visionSubtitle") }}</h4>
        </div>
        <div class="content-vision">
          <vision-text></vision-text>
        </div>
        <app-footer></app-footer>
      </div>
      <div class="vision-image" title="Vision"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Vision",
    methods: {
      goToPage(pageNumber) {
        this.$emit('clicked', pageNumber)
      }
    }
  };
</script>


<style scoped>
</style>