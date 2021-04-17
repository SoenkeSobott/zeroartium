<template>
  <div>
    <div v-if="!this.$device.mobile" class="application-desktop">
      <div
        v-if="!this.$device.mobile"
        class="navigation-indicator"
        v-bind:style="{ transform: computedVisibility }"
      >
        <div id="navigation-pointer" @click="goToPage(0)">
          <h5 v-html="navPointOne"></h5>
        </div>
        <div id="navigation-pointer" @click="goToPage(1)">
          <h5 v-html="navPointTwo"></h5>
        </div>
        <div id="navigation-pointer" @click="goToPage(2)">
          <h5 v-html="navPointThree"></h5>
        </div>
        <div id="navigation-pointer" @click="goToPage(3)">
          <h5 v-html="navPointFour"></h5>
        </div>
        <div id="navigation-pointer" @click="goToPage(4)">
          <h5 v-html="navPointFive"></h5>
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
                    <h4 id="subtitle">Where art transcends.</h4>
                  </div>
                  <div class="content">
                    <div id="navigation-button" @click="goToPage(1)">
                      <h5>&#x25E6; Art Collection</h5>
                    </div>
                    <div id="navigation-button" @click="goToPage(2)">
                      <h5>&#x25E6; Vision</h5>
                    </div>
                    <div id="navigation-button" @click="goToPage(3)">
                      <h5>&#x25E6; Artists</h5>
                    </div>
                    <div id="navigation-button" @click="goToPage(4)">
                      <h5>&#x25E6; Contact</h5>
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
                    <h2 id="title">Art Collection</h2>
                    <h4 id="subtitle">ZeroArtium&#174; Spring Collection.</h4>
                  </div>
                  <div class="content">
                    <p>
                      All pieces are handpicked from our in-house collection and
                      will be available until the presentation of the Summer
                      Collection at the end of June.
                    </p>
                    <div id="sales-button" @click="goToPage(4)">
                      <h5>&#x25E6; Contact Sales</h5>
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
                    <h2 id="title">Vision</h2>
                    <h4 id="subtitle">What drives us.</h4>
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
                    <h2 id="title">Artists</h2>
                    <h4 id="subtitle">The Masterminds behind the Creations.</h4>
                  </div>
                  <div class="content">
                    <p>
                      View our artists and learn more about their personalities
                      and work. Please be aware that not all of our artists
                      perform in public, but we are happy to organise
                      appointments on request.
                    </p>
                    <div id="sales-button" @click="goToPage(4)">
                      <h5>&#x25E6; Contact</h5>
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
                <div class="artists-image">
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="artist-image-one"></div>
                      </div>
                      <div class="art-description">D. L. Béni &vert; Basel</div>
                    </div>
                    <div class="art-two">
                      <div class="art-image">
                        <div class="artist-image-two"></div>
                      </div>
                      <div class="art-description">M. B. &vert; Frankfurt</div>
                    </div>
                  </div>
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="artist-image-three"></div>
                      </div>
                      <div class="art-description">
                        M. Jacques &vert; Zürich
                      </div>
                    </div>
                    <div class="art-two">
                      <div class="art-image">
                        <div class="artist-image-four"></div>
                      </div>
                      <div class="art-description"></div>
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
                    <h2 id="title">Contact</h2>
                    <h4 id="subtitle">Keep in touch.</h4>
                  </div>
                  <div class="content">
                    <p>
                      Feel free to contact us via the channels below and our
                      team will take care of your request in no time.
                    </p>
                    <div class="contact-email">
                      <img class="social-desktop" src="./assets/img/mail.png" />
                      <h5>info@zeroArtium.com</h5>
                    </div>
                    <div class="contact-link" @click="openInstagram()">
                      <img
                        class="social-desktop"
                        src="./assets/img/instagram-logo.png"
                      />
                      <h5>zeroArtium</h5>
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
      <div class="background">
        <div class="shadow-box">
          <div class="container">
            <div class="box-mobile">
              <div class="header-box">
                <h1 id="title">ZeroArtium</h1>
                <h4 id="subtitle">Where art transcends.</h4>
              </div>
              <div class="content-mobile">
                <a href="#collection">
                  <h5>&#x25E6; Art Collection</h5>
                </a>
                <a href="#vision">
                  <h5>&#x25E6; Vision</h5>
                </a>
                <a href="#artists">
                  <h5>&#x25E6; Artists</h5>
                </a>
                <a href="#contact">
                  <h5>&#x25E6; Contact</h5>
                </a>
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
      <div class="background" id="collection">
        <div class="shadow-box">
          <div class="container">
            <div class="box-mobile">
              <div class="header-box">
                <h2 id="title">Art Collection</h2>
                <h4 id="subtitle">ZeroArtium&#174; Spring Collection.</h4>
              </div>
              <div class="content-mobile">
                <p>
                  All pieces are handpicked from our in-house collection and
                  will be available until the presentation of the Summer
                  Collection at the end of June.
                </p>
                <div id="navigation-button">
                  <a href="/collection-mobile">
                    <h5>&#x25E6; View Collection</h5>
                  </a>
                </div>
                <div id="navigation-button" @click="goToPage(4)">
                  <h5>&#x25E6; Contact Sales</h5>
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
      <div class="background" id="vision">
        <div class="shadow-box">
          <div class="container">
            <div class="box-mobile">
              <div class="header-box">
                <h2 id="title">Vision</h2>
                <h4 id="subtitle">What drives us.</h4>
              </div>
              <div class="content-mobile">
                <p>
                  At ZeroArtium® we bring together a wide range of artists who
                  create extravagant and unpredictable art. Each of our artists
                  is a mastermind in his own right, who convinces through his
                  individual character and extravagant style. By combining these
                  diverse art forms and styles, we are able to deliver such a
                  unique experience to our clients.<br />
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
          </div>
        </div>
      </div>
      <div class="background" id="artists">
        <div class="shadow-box">
          <div class="container">
            <div class="box-mobile">
              <div class="header-box">
                <h2 id="title">Artists</h2>
                <h4 id="subtitle">The Masterminds behind the Creations.</h4>
              </div>
              <div class="content-mobile">
                <p>
                  To the right, our artists introduce themselves and briefly
                  describe their work. Please be aware that not all of our
                  artists perform in public, but we are happy to organise
                  appointments on request.
                </p>
                <div id="navigation-button">
                  <a href="/artists-mobile">
                    <h5>&#x25E6; View Artists</h5>
                  </a>
                </div>
                <div id="navigation-button" @click="goToPage(4)">
                  <h5>&#x25E6; Contact</h5>
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
      <div class="background" id="contact">
        <div class="shadow-box">
          <div class="container">
            <div class="box-mobile">
              <div class="header-box">
                <h2 id="title">Contact</h2>
                <h4 id="subtitle">Keep in touch.</h4>
              </div>
              <div class="content-mobile">
                <p>
                  Feel free to contact us via the channels below and our team
                  will take care of your request in no time.
                </p>
                <div class="contact-email">
                  <img class="social-desktop" src="./assets/img/mail.png" />
                  <h5>info@zeroArtium.com</h5>
                </div>
                <div class="contact-link" @click="openInstagram()">
                  <img
                    class="social-desktop"
                    src="./assets/img/instagram-logo.png"
                  />
                  <h5>zeroArtium</h5>
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