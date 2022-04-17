<template>
  <div class="shadow-box">
    <div class="container">
      <div class="left-box">
        <div class="header-box">
          <h2 id="title">{{ $t("message.artCollection") }}</h2>
          <collection-title-text></collection-title-text>
        </div>
        <div class="content">
          <art-collection-text></art-collection-text>
          <div id="contact-button" @click="goToPage(4)">
            <h5>&#x25E6; {{ $t("message.contact") }}</h5>
          </div>
          <a id="collection-mobile-button" href="/collection-mobile">
              <h5>&#x25E6; {{ $t("message.viewCollection") }}</h5>
          </a>
        </div>
        <app-footer></app-footer>
      </div>
      <div class="art-collection-image" title="Art Collection">
        <collection-slider></collection-slider>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Collection",
    methods: {
      goToPage(pageNumber) {
        this.$emit('clicked', pageNumber)
      }
    }
  };
</script>


<style lang="scss" scoped>
@import "../../styles-responsive.scss";

@media only screen and (max-width: 500px) {
  .art-collection-image {
    width: 0%;
    visibility: hidden;
  }
}

.art-collection-image {
    background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.5)), url("../../assets/img/DirtyHands.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 90vh;
}
</style>