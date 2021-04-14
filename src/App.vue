<template>
  <div>
    <div v-if="!this.$device.mobile" class="application-desktop">
      <div
        v-if="!this.$device.mobile"
        class="navigation-indicator"
        v-bind:style="{ transform: computedVisibility }"
      >
        <div id="navigation-pointer" @click="goToPage(0)">
          <h3 v-html="navPointOne"></h3>
        </div>
        <div id="navigation-pointer" @click="goToPage(1)">
          <h3 v-html="navPointTwo"></h3>
        </div>
        <div id="navigation-pointer" @click="goToPage(2)">
          <h3 v-html="navPointThree"></h3>
        </div>
        <div id="navigation-pointer" @click="goToPage(3)">
          <h3 v-html="navPointFour"></h3>
        </div>
        <div id="navigation-pointer" @click="goToPage(4)">
          <h3 v-html="navPointFive"></h3>
        </div>
      </div>
      <hooper
        class="hooper"
        @slide="updateCarousel"
        :vertical="true"
        ref="carousel"
      >
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="left-box">
                  <div class="header-box">
                    <h1 id="title">ZeroArtium</h1>
                    <h2 id="subtitle">Where art transcends.</h2>
                  </div>
                  <div class="content">
                    <div id="navigation-button" @click="goToPage(1)">
                      <h3>&#x25E6; Art Collection</h3>
                    </div>
                    <div id="navigation-button" @click="goToPage(2)">
                      <h3>&#x25E6; Vision</h3>
                    </div>
                    <div id="navigation-button" @click="goToPage(3)">
                      <h3>&#x25E6; Artists</h3>
                    </div>
                    <div id="navigation-button" @click="goToPage(4)">
                      <h3>&#x25E6; Contact</h3>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
                <div class="start-image"></div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="left-box">
                  <div class="header-box">
                    <h4 id="title">Art Collection</h4>
                    <h2 id="subtitle">ZeroArtium&#174; Spring Collection.</h2>
                  </div>
                  <div class="content">
                    <p>
                      All pieces are handpicked from our in-house collection and
                      will be available until the presentation of the Summer
                      Collection at the end of June.
                    </p>
                    <div id="sales-button" @click="goToPage(4)">
                      <h3>&#x25E6; Contact Sales</h3>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
                <div class="art-collection-image">
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="art-image-one"></div>
                      </div>
                      <div class="art-description">Art One</div>
                    </div>
                    <div class="art-two">
                      <div class="art-image">
                        <div class="art-image-two"></div>
                      </div>
                      <div class="art-description">Art Two (Sold)</div>
                    </div>
                  </div>
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="art-image-three"></div>
                      </div>
                      <div class="art-description">Art three</div>
                    </div>
                    <div class="art-two">
                      <div class="art-image">
                        <div class="art-image-four"></div>
                      </div>
                      <div class="art-description">Art Four</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="left-box-vision">
                  <div class="header-box">
                    <h4 id="title">Vision</h4>
                    <h2 id="subtitle">What drives us.</h2>
                  </div>
                  <div class="content-vision">
                    <p>
                      At ZeroArtium® we bring together a wide range of artists
                      who create extravagant and unpredictable art. Each of our
                      artists is a mastermind in his own right, who convinces
                      through his individual character and extravagant style. By
                      combining these diverse art forms and styles, we are able
                      to deliver such a unique experience to our clients.<br />
                      <br />Where art transcends. - ZeroArtium®
                    </p>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
                <div class="vision-image"></div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="left-box">
                  <div class="header-box">
                    <h4 id="title">Artists</h4>
                    <h2 id="subtitle">The Masterminds behind the Creations.</h2>
                  </div>
                  <div class="content">
                    <p>
                      To the right, our artists introduce themselves and briefly
                      describe their work. Please be aware that not all of our
                      artists perform in public, but we are happy to organise
                      appointments on request.
                    </p>
                    <div id="sales-button" @click="goToPage(4)">
                      <h3>&#x25E6; Contact</h3>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
                <div class="artists-image"></div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="left-box">
                  <div class="header-box">
                    <h4 id="title">Contact</h4>
                    <h2 id="subtitle">Keep in touch.</h2>
                  </div>
                  <div class="content">
                    <p>
                      Feel free to contact us via the channels below and our
                      team will take care of your request in no time.
                    </p>
                    <div class="contact-email">
                      <img class="social-desktop" src="./assets/img/mail.png" />
                      <h3>info@zeroArtium.com</h3>
                    </div>
                    <div class="contact-link" @click="openInstagram()">
                      <img
                        class="social-desktop"
                        src="./assets/img/instagram-logo.png"
                      />
                      <h3>zeroArtium</h3>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
                <div class="contacts-image"></div>
              </div>
            </div>
          </div>
        </slide>
      </hooper>
    </div>
    <div v-else class="application-mobile">
      <!--<div id="navigation-indicator-mobile" @click="goToPage(0)">
        <h3 v-html="navPointOne"></h3>
      </div>-->
      <hooper
        class="hooper"
        @slide="updateCarousel"
        :vertical="true"
        ref="carousel"
      >
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="box-mobile">
                  <div class="header-box">
                    <h1 id="title">ZeroArtium</h1>
                    <h2 id="subtitle">Where art transcends.</h2>
                  </div>
                  <div class="content">
                    <div id="navigation-button" @click="goToPage(1)">
                      <h3>&#x25E6; Art Collection</h3>
                    </div>
                    <div id="navigation-button" @click="goToPage(2)">
                      <h3>&#x25E6; Vision</h3>
                    </div>
                    <div id="navigation-button" @click="goToPage(3)">
                      <h3>&#x25E6; Artists</h3>
                    </div>
                    <div id="navigation-button" @click="goToPage(4)">
                      <h3>&#x25E6; Contact</h3>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="left-box">
                  <div class="header-box">
                    <h4 id="title">Art Collection</h4>
                    <h2 id="subtitle">ZeroArtium&#174; Spring Collection.</h2>
                  </div>
                  <div class="content">
                    <p>
                      All pieces are handpicked from our in-house collection and
                      will be available until the presentation of the Summer
                      Collection at the end of June.
                    </p>
                    <div id="sales-button" @click="goToPage(4)">
                      <h3>&#x25E6; Contact Sales</h3>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
                <div class="art-collection-image">
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="art-image-one"></div>
                      </div>
                      <div class="art-description">Art One</div>
                    </div>
                    <div class="art-two">
                      <div class="art-image">
                        <div class="art-image-two"></div>
                      </div>
                      <div class="art-description">Art Two (Sold)</div>
                    </div>
                  </div>
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="art-image-three"></div>
                      </div>
                      <div class="art-description">Art three</div>
                    </div>
                    <div class="art-two">
                      <div class="art-image">
                        <div class="art-image-four"></div>
                      </div>
                      <div class="art-description">Art Four</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="left-box-vision">
                  <div class="header-box">
                    <h4 id="title">Vision</h4>
                    <h2 id="subtitle">What drives us.</h2>
                  </div>
                  <div class="content-vision">
                    <p>
                      At ZeroArtium® we bring together a wide range of artists
                      who create extravagant and unpredictable art. Each of our
                      artists is a mastermind in his own right, who convinces
                      through his individual character and extravagant style. By
                      combining these diverse art forms and styles, we are able
                      to deliver such a unique experience to our clients.<br />
                      <br />Where art transcends. - ZeroArtium®
                    </p>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
                <div class="vision-image"></div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="left-box">
                  <div class="header-box">
                    <h4 id="title">Artists</h4>
                    <h2 id="subtitle">The Masterminds behind the Creations.</h2>
                  </div>
                  <div class="content">
                    <p>
                      To the right, our artists introduce themselves and briefly
                      describe their work. Please be aware that not all of our
                      artists perform in public, but we are happy to organise
                      appointments on request.
                    </p>
                    <div id="sales-button" @click="goToPage(4)">
                      <h3>&#x25E6; Contact</h3>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
                <div class="artists-image"></div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="left-box">
                  <div class="header-box">
                    <h4 id="title">Contact</h4>
                    <h2 id="subtitle">Keep in touch.</h2>
                  </div>
                  <div class="content">
                    <p>
                      Feel free to contact us via the channels below and our
                      team will take care of your request in no time.
                    </p>
                    <div class="contact-email">
                      <img class="social-desktop" src="./assets/img/mail.png" />
                      <h3>info@zeroArtium.com</h3>
                    </div>
                    <div class="contact-link" @click="openInstagram()">
                      <img
                        class="social-desktop"
                        src="./assets/img/instagram-logo.png"
                      />
                      <h3>zeroArtium</h3>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="legal">
                      <a href="privacy">Privacy statement</a>
                      &vert;
                      <a href="terms">Terms and conditions</a>
                    </div>
                  </div>
                </div>
                <div class="contacts-image"></div>
              </div>
            </div>
          </div>
        </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "App",
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
      },
      currentPage: 0,
      visibility: "translate(-3em,0)",
      navPointOne: "&#x25EF;",
      navPointTwo: "&#x25EF;",
      navPointThree: "&#x25EF;",
      navPointFour: "&#x25EF;",
      navPointFive: "&#x25EF;",
    };
  },
  watch: {
    currentPage() {
      if (this.currentPage > 0) {
        this.changeVisibility("translate(0em,0)");
      } else {
        this.changeVisibility("translate(-3em,0)");
      }

      if (this.currentPage === 0) {
        this.navPointOne = "&#x25C9;";
        this.navPointTwo = "&#x25EF;";
        this.navPointThree = "&#x25EF;";
        this.navPointFour = "&#x25EF;";
        this.navPointFive = "&#x25EF;";
      }

      if (this.currentPage === 1) {
        this.navPointOne = "&#x25EF;";
        this.navPointTwo = "&#x25C9;";
        this.navPointThree = "&#x25EF;";
        this.navPointFour = "&#x25EF;";
        this.navPointFive = "&#x25EF;";
      }

      if (this.currentPage === 2) {
        this.navPointOne = "&#x25EF;";
        this.navPointTwo = "&#x25EF;";
        this.navPointThree = "&#x25C9;";
        this.navPointFour = "&#x25EF;";
        this.navPointFive = "&#x25EF;";
      }

      if (this.currentPage === 3) {
        this.navPointOne = "&#x25EF;";
        this.navPointTwo = "&#x25EF;";
        this.navPointThree = "&#x25EF;";
        this.navPointFour = "&#x25C9;";
        this.navPointFive = "&#x25EF;";
      }

      if (this.currentPage === 4) {
        this.navPointOne = "&#x25EF;";
        this.navPointTwo = "&#x25EF;";
        this.navPointThree = "&#x25EF;";
        this.navPointFour = "&#x25EF;";
        this.navPointFive = "&#x25C9;";
      }
    },
  },
  computed: {
    computedVisibility: function () {
      return this.visibility;
    },
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
      this.$refs.carousel.slideTo(pageNumber);
    },
    updateCarousel(payload) {
      this.currentPage = payload.currentSlide;
    },
    changeVisibility: function (value) {
      this.visibility = value;
    },
    openInstagram: function () {
      window.open("https://www.instagram.com/zeroartium/", "_blank");
    },
  },
  components: {
    Hooper,
    Slide,
  },
};
</script>


<style>
@import url("./styles.css");
@import url("./styles-mobile.css");
</style>