<template>
  <!-- Slider with images below and main is with image left and text right and footer as now below -->

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
    <slide class="slide">
      <div class="art-container">
        <div class="art-img-container">
          <div class="art-img-one"></div>
        </div>
        <div class="art-description">
          French Wall • Massimo Bene
        </div>
      </div>
    </slide>
    <slide class="slide">
      <div class="art-container">
        <div class="art-img-container">
          <div class="art-img-two"></div>
        </div>
        <div class="art-description">Omid (SOLD) • Massimo Bene</div>
      </div>
    </slide>
    <slide class="slide">
      <div class="art-container">
        <div class="art-img-container">
          <div class="art-img-three"></div>
        </div>
        <div class="art-description">The Taverns Mirror • D.L. Béni</div>
      </div>
    </slide>
    <slide class="slide"
      ><div class="art-container">
        <div class="art-img-container">
          <div class="art-img-four"></div>
        </div>
        <div class="art-description">Raven • D.L. Béni</div>
      </div>
    </slide>
    <slide class="slide"
      ><div class="art-container">
        <div class="art-img-container">
          <div class="art-img-five"></div>
        </div>
        <div class="art-description">Spirit Lake • Massimo Bene</div>
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

.art-img-container {
  display: flex;
  transition: 1s;
  height: 90%;
  width: 90%;
}

.art-img-one {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/2021Fall/FrenchWall.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.art-img-two {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/2021Fall/OmidHoffnung.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.art-img-three {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/2021Spring/TavernsMirror.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.art-img-four {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/2021Spring/Raven.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.art-img-five {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/2021Fall/SpiritLake.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.art-description {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: solid;
  border-color: rgb(1, 31, 51);
  margin: 5%;
  padding: 5%;
  overflow: hidden;
  background-color: rgba(245, 239, 239, 0.3);
  transition: 0.5s;
  height: fit-content;
}
</style>