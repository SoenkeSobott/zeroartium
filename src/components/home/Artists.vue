<template>
  <div class="shadow-box">
    <div class="container">
      <div class="left-box">
        <div class="header-box">
          <h2 id="title">{{ $t("message.artists") }}</h2>
          <h4 id="subtitle">{{ $t("message.artistsSubtitle") }}</h4>
        </div>
        <div class="content">
          <artists-text></artists-text>
          <div id="contact-button" @click="goToPage(4)">
            <h5>&#x25E6; {{ $t("message.contact") }}</h5>
          </div>
        </div>
        <app-footer></app-footer>
      </div>
      <div class="artists-image" title="Artists">
        <div class="artists-row">
          <div class="artist">
            <div class="artist-image">
              <div class="artist-image-one" title="Artist Image One"></div>
            </div>
            <div class="artists-description">D. L. Béni • Basel</div>
          </div>
          <div class="artist">
            <div class="artist-image">
              <div class="artist-image-two" title="Art Image Two"></div>
            </div>
            <div class="artists-description">
              Massimo Bene • Frankfurt
            </div>
          </div>
        </div>
        <div class="artists-row">
          <div class="artist">
            <div class="artist-image">
              <div class="artist-image-three" title="Art Image Three"></div>
            </div>
            <div class="artists-description">
              Gianni Vasi • Loerrach
            </div>
          </div>
          <div class="artist">
            <!--<div class="art-image">
                        <div class="artist-image-four"></div>
                      </div>
                      <div class="art-description"></div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Artists",
    methods: {
      goToPage(pageNumber) {
        this.$emit('clicked', pageNumber)
      }
    }
  };
</script>


<style scoped>
</style>