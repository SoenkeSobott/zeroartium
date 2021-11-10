<template>
  <!-- Slider with images below and main is with image left and text right and footer as now below -->

  <hooper
    class="cara"
    :infiniteScroll="true"
    :mouseDrag="false"
    :touchDrag="false"
    :wheelControl="false"
  >
    <slide class="slide">
      <div class="art-container">
        <div class="art-img-container">
          <img
            class="art-img"
            src="../../assets/img/2021Fall/FrenchWall.jpg"
            alt="French Wall"
          />
        </div>
        <div class="art-description">French Wall • Massimo Bene</div>
      </div>
    </slide>
    <slide class="slide">
      <div class="art-container">
        <div class="art-img-container">
          <img
            class="art-img"
            src="../../assets/img/2021Fall/OmidHoffnung.jpg"
            alt="Omid"
          />
        </div>
        <div class="art-description">Omid (SOLD) • Massimo Bene</div>
      </div>
    </slide>
    <slide class="slide">
      <div class="art-container">
        <div class="art-img-container">
          <img
            class="art-img"
            src="../../assets/img/2021Spring/ArtTwo.jpeg"
            alt="Omid"
          />
        </div>
        <div class="art-description">Raven • D.L. Béni</div>
      </div>
    </slide>
    <slide class="slide"
      ><div class="art-container">
        <div class="art-img-container">
          <img
            class="art-img"
            src="../../assets/img/2021Spring/ArtOne.jpeg"
            alt="Omid"
          />
        </div>
        <div class="art-description">The Taverns Mirror • D.L. Béni</div>
      </div></slide
    >
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
};
</script>

<style>
.cara {
  width: 100%;
  height: 90%;
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
  align-items: center;
  justify-content: center;
  width: 80%;
}

.art-img-container {
  width: 100%;
  height: 90%;
  background: chartreuse;
  display: flex;
  align-items: center;
  justify-content: center;
}

.art-img {
  width: 100%;
  height: 100%;
}

.art-description {
  width: 100%;
  height: 10%;
  border-top: solid;
  border-color: rgb(1, 31, 51);
  margin: 5%;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(245, 239, 239, 0.3);
}
</style>