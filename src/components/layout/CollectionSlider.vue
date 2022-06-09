<template>
  <div class="slider-container">
    <hooper
      v-if="showHooper"
      class="carousel"
      :infiniteScroll="true"
      :mouseDrag="false"
      :touchDrag="false"
      :wheelControl="false"
      :autoPlay="true"
      :playSpeed="4000"
      :transition="500"
    >
      <template v-for="image in $store.images">
        <slide
          v-if="displayArt(image.artistId)"
          class="slide"
          :key="image.path"
        >
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
      </template>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>

    <div v-else class="no-results-container">
      <label>{{ $t("collection.noResults") }}</label>
      <label @click="resetFilters" class="pill">
        <span class="pill-label">{{ $t("collection.resetFilters") }}</span>
      </label>
    </div>

    <div class="pills">
      <label class="pill">
        <input
          type="checkbox"
          name="feature"
          v-model="checkedDLB"
        />
        <span class="pill-label">D.L. Béni</span>
      </label>
      <label class="pill">
        <input
          type="checkbox"
          name="feature"
          v-model="checkedMB"
        />
        <span class="pill-label">Massimo Bene</span>
      </label>
      <label class="pill">
        <input
          type="checkbox"
          name="feature"
          v-model="checkedEH"
        />
        <span class="pill-label">Emily Harry</span>
      </label>
    </div>
  </div>
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
  data() {
    return {
      checkedDLB: true,
      checkedMB: true,
      checkedEH: true,
    };
  },
  computed: {
    showHooper() {
      return this.checkedDLB || this.checkedMB || this.checkedEH;
    },
  },
  methods: {
    displayArt(artistId) {
      if (this.checkedDLB && artistId === "DLB") {
        return true;
      } else if (this.checkedMB && artistId === "MB") {
        return true;
      } else if (this.checkedEH && artistId === "EH") {
        return true;
      }
      return false;
    },
    resetFilters() {
      this.checkedDLB = true;
      this.checkedMB = true;
      this.checkedEH = true;
    },
  },
};
</script>

<style>
/* Hooper Stuff must be css not scss */
/*-- See: https://github.com/baianat/hooper/issues/156 --*/
.hooper:focus {
  outline: none;
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
</style>

<style lang="scss" scoped>
.slider-container {
  width: 100%;
  height: 90%;
}

.carousel {
  width: 100%;
  height: 95%;
}

.no-results-container {
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 100%;
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

.pill {
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  margin: 10px;
}

.pills {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pill input[type="checkbox"] {
  display: none;
}
.pill input[type="checkbox"]:checked + .pill-label {
  background-color: rgb(1, 19, 31);
  border: 1px solid rgb(1, 19, 31);
  color: #fff;
  padding: 5px 10px;
}
.pill-label {
  border: 1px solid rgb(1, 19, 31);
  border-radius: 20px;
  color: rgb(1, 19, 31);
  display: block;
  padding: 5px 10px;
  text-decoration: none;
}

.results {
  display: inline-block;
  width: 10%;
  height: 10%;
  left: 10px;
  top: 10px;
  color: red;
}
</style>