<template>
  <hooper
    class="carousel"
    :infiniteScroll="true"
    :mouseDrag="false"
    :touchDrag="false"
    :wheelControl="false"
    :autoPlay="true"
    :playSpeed="4000"
    :transition="500"
  >
    <slide class="slide" v-for="image in $store.images" :key="image.path">
      <div class="art-container">
        <div
          class="art-img"
          :style="{ backgroundImage: `url(${image.path})` }"
        ></div>
        <div class="art-title">
          {{ image.title }}
          <div class="art-details">{{ image.details }}</div>
          <div class="art-description">{{ $t(image.description) }}</div>
        </div>
      </div>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
};
</script>

<style>
/*-- See: https://github.com/baianat/hooper/issues/156 --*/
.hooper:focus {
  outline: none;
}

.carousel {
  width: 100%;
  height: 90%;
}

.hooper-indicator {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border-color: black;
  background: transparent;
  border-style: solid;
  border-width: 0.1px;
}
.hooper-indicator.is-active {
  background-color: rgb(1, 19, 31);
}

.hooper-indicator:hover {
  background-color: rgb(1, 19, 31);
}

.slide {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.art-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.art-img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.art-title {
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5%;
  padding: 5%;
  background-color: rgba(245, 239, 239, 0.3);

  font-weight: 600;
  font-size: larger;

  border-top: solid;
  border-color: rgb(1, 31, 51);
}

.art-description {
  font-weight: normal;
  font-size: small;
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