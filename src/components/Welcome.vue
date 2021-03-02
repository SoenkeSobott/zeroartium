<template>
  <div v-if="!this.$device.mobile" class="welcome-desktop">
    <section class="main-bg">
      <div class="hero">
        <div class="container">
          <div id="heading" class="col flex-column">
            <div class="row col-md-9 my-5">
              <h1 class="mr-5-5">Zero</h1>
              <h1 class="">Artium</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="quote" class="d-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="mb-4">
              Art should comfort the disturbed and disturb the comfortable.
            </h3>
            <p class="text-uppercase text-muted mt-4">&mdash; Banksy</p>
          </div>
        </div>
      </div>
    </section>
    <section id="classic-selection" class="d-relative classic-selection-bg">
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-8 text-center">
            <h2 class="mb-4">Classic Selection</h2>
            <p class="text-white">1020</p>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-md text-center mx-8 mx-md-0 mx-lg-3 mb-5 mb-md-auto">
            <div class="desktop-artOne"></div>
            <h3 class="mb-3">I</h3>
            <p class="text-white px-4">The Tavern Mirror by D.L. Béni</p>
          </div>
          <div class="col-md text-center mx-8 mx-md-0 mx-lg-3 mb-5 mb-md-auto">
            <div class="desktop-artTwo"></div>
            <h3 class="mb-3">II</h3>
            <p class="text-white px-4">Desert Rupture by D.L. Béni</p>
          </div>
        </div>
      </div>
    </section>

    <section id="vision" class="d-relative">
      <div class="container">
        <div class="row">
          <div class="col">
            <h3 class="">Vision</h3>
            <p>
              At ZeroArtium we present new Artists like Dani D that generate Art
              beyond the standards, shaped by their individual character and
              extravagant nature. Our Artists are free from any boundaries and
              push them to new horizons. Therefore their work is highly
              unpredictive, uncontrolled and reaches places far beyond the
              norm.<br />
              <br />More than Art. - ZeroArtium
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="artists" class="artists-bg d-relative">
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <carousel
              :per-page="1"
              :navigate-to="someLocalProperty"
              :mouse-drag="false"
              :autoplay="true"
              :loop="true"
              :navigationEnabled="true"
              :autoplayTimeout="5000"
              :paginationEnabled="false"
            >
              <slide>
                <h3 class="text-center mb-5">D.L. Béni</h3>
              </slide>
              <slide>
                <h3 class="text-center mb-5">M. Jacques</h3>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </section>
  </div>

  <dir v-else class="welcome-mobile">
    <div id="mobile" class="main-bg">
      <div id="heading">
        <div id="header-content">
          <h1 class="mb-0">Zero</h1>
          <h1>Artium</h1>
        </div>
      </div>
    </div>
    <div id="mobile" class="d-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="mb-4">
              Art should comfort the disturbed and disturb the comfortable.
            </h3>
            <p class="text-uppercase text-muted mt-4">&mdash; Banksy</p>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile" class="d-relative classic-selection-bg">
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-8 text-center">
            <h2 class="mb-4">Classic Selection</h2>
            <p class="text-white">1020</p>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-md text-center mx-8 mx-md-0 mx-lg-3 mb-5 mb-md-auto">
            <div class="mobile-artOne"></div>
            <h3 class="mb-3">I</h3>
            <p class="text-white px-4">The Tavern Mirror by D.L. Béni</p>
          </div>
          <div class="col-md text-center mx-8 mx-md-0 mx-lg-3 mb-5 mb-md-auto">
            <div class="mobile-artTwo"></div>
            <h3 class="mb-3">II</h3>
            <p class="text-white px-4">Desert Rupture by D.L. Béni</p>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile" class="d-relative">
      <div class="container">
        <div class="row">
          <div class="col">
            <h3 class="">Vision</h3>
            <p>
              At ZeroArtium we present new Artists like Dani D that generate Art
              beyond the standards, shaped by their individual character and
              extravagant nature. Our Artists are free from any boundaries and
              push them to new horizons. Therefore their work is highly
              unpredictive, uncontrolled and reaches places far beyond the
              norm.<br />
              <br />More than Art. - ZeroArtium
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="mobile" class="artists-bg d-relative">
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <carousel
              :per-page="1"
              :navigate-to="someLocalProperty"
              :mouse-drag="false"
              :autoplay="true"
              :loop="true"
              :navigationEnabled="true"
              :autoplayTimeout="5000"
              :paginationEnabled="false"
            >
              <slide>
                <h3 class="text-center mb-5">D.L. Béni</h3>
              </slide>
              <slide>
                <h3 class="text-center mb-5">M. Jacques</h3>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </dir>
</template>


<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>

<style>
#heading {
  height: 100%;
  margin-bottom: 0;
  position: relative;
}

#header-content {
  position: absolute;
  height: 150px;
  bottom: 0;
  left: 10px;
}

.welcome-desktop {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgb(1, 19, 31);
}

.welcome-mobile {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgb(1, 19, 31);
}

.main-bg {
  background-image: url("../assets/img/OldRomanianTemple.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
}

.classic-selection-bg {
  background-image: url(../assets/img/DirtyHands.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.artists-bg {
  background-image: url(../assets/img/artists.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

h1 {
  font-size: 80px !important;
}

h2 {
  font-size: 60px !important;
}

h3 {
  font-size: 40px !important;
}

.bg-overlay {
  height: 100%;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.7);
  position: absolute;
  top: 0;
}

section {
  padding: 140px 0;
}

#mobile {
  padding: 60px 0;
}

.desktop-artOne {
  width: 500px;
  height: 600px;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  margin-bottom: 20px;
  background-image: url(../assets/img/ArtOne.jpg);
}

.desktop-artTwo {
  width: 500px;
  height: 600px;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  margin-bottom: 20px;
  background-image: url(../assets/img/ArtTwo.jpg);
}

.mobile-artOne {
  width: 90vh;
  height: 600px;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  margin-bottom: 20px;
  background-image: url(../assets/img/ArtOne.jpg);
}

.mobile-artTwo {
  width: 90vh;
  height: 600px;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  margin-bottom: 20px;
  background-image: url(../assets/img/ArtTwo.jpg);
}
</style>
