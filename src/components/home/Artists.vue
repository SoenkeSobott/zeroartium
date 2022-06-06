<template>
  <div class="shadow-box">
    <div class="left-box">
      <div class="header-box">
        <h2 id="title">{{ $t("message.artists") }}</h2>
        <h4 id="subtitle">{{ $t("message.artistsSubtitle") }}</h4>
      </div>
      <div class="content">
        <artists-text></artists-text>
        <a id="artists-mobile-button" href="/artists-mobile">
          <h5>&#x25E6; {{ $t("message.viewArtists") }}</h5>
        </a>
        <div id="contact-button" @click="goToPage(4)">
          <h5>&#x25E6; {{ $t("message.contact") }}</h5>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
    <div class="right-image artists-image" title="Artists Background">
      <div class="artists-box">
        <div
          class="artist"
          v-for="artist in $store.artists"
          :key="artist.title"
        >
          <div class="image-container">
            <img class="artist-image" :src="artist.path" :alt="artist.title" />
          </div>
          <div class="artists-description">{{ artist.title }}</div>
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
      this.$emit("clicked", pageNumber);
    },
  },
};
</script>


<style lang="scss" scoped>
.artists-box {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}

.artists-image {
  background-image: url("../../assets/img/ArtistsBackground.jpg");
  flex-flow: column;
  width: 60%;
}

.artist {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 80%;
}

.artist-image {
  height: auto;
  width: 80%;
}

#artists-mobile-button {
  visibility: hidden;
}

.artists-description {
    width: 80%;
    height: 20%;
    border-top: solid;
    border-color: rgb(1, 31, 51);
    margin: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(245, 239, 239, 0.3);
}

@media only screen and (max-width: 500px) {
  #artists-mobile-button {
    visibility: visible;
  }

  .artists-image {
    width: 0%;
    visibility: hidden;
    display: none;
  }
}
</style>