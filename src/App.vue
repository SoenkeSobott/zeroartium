<template>
  <div>
    <vue-cookie-accept-decline
      :ref="'myPanel1'"
      :elementId="'myPanel1'"
      :debug="false"
      :position="'bottom-right'"
      :type="'floating'"
      :disableDecline="false"
      :transitionName="'slideFromBottom'"
      :showPostponeButton="false"
      @status="cookieStatus"
      @clicked-accept="cookieClickedAccept"
      @clicked-decline="cookieClickedDecline"
    >
      <!-- Optional -->
      <div slot="postponeContent">&times;</div>

      <!-- Optional -->
      <div slot="message">
        We use cookies to ensure you get the best experience on our website.
        <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
      </div>

      <!-- Optional -->
      <div slot="declineContent">OPT OUT</div>

      <!-- Optional -->
      <div slot="acceptContent">GOT IT!</div>
    </vue-cookie-accept-decline>
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
                  <app-footer></app-footer>
                </div>
                <div class="start-image" title="Old Romanian Temple"></div>
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
                    <collection-title-text></collection-title-text>
                  </div>
                  <div class="content">
                    <art-collection-text></art-collection-text>
                    <div id="sales-button" @click="goToPage(4)">
                      <h5>&#x25E6; Contact</h5>
                    </div>
                  </div>
                  <app-footer></app-footer>
                </div>
                <div class="art-collection-image"  title="Art Collection">
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="art-image-one" title="Art Image One"></div>
                      </div>
                      <div class="art-description">
                        French Wall • M.B.
                      </div>
                    </div>
                    <div class="art-two">
                      <div class="art-image">
                        <div class="art-image-two" title="Art Image Two"></div>
                      </div>
                      <div class="art-description">Spirit Lake • M.B.</div>
                    </div>
                  </div>
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="art-image-three" title="Art Image Three"></div>
                      </div>
                      <div class="art-description">Raven • D.L. Béni</div>
                    </div>
                    <div class="art-two">
                      <div class="art-image">
                        <div class="art-image-four" title="Art Image Four"></div>
                      </div>
                      <div class="art-description">
                        The Taverns Mirror • D.L. Béni
                      </div>
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
                    <vision-text></vision-text>
                  </div>
                  <app-footer></app-footer>
                </div>
                <div class="vision-image" title="Vision"></div>
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
                    <artists-text></artists-text>
                    <div id="sales-button" @click="goToPage(4)">
                      <h5>&#x25E6; Contact</h5>
                    </div>
                  </div>
                  <app-footer></app-footer>
                </div>
                <div class="artists-image" title="Artists">
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="artist-image-one" title="Artist Image One"></div>
                      </div>
                      <div class="art-description">D. L. Béni &vert; Basel</div>
                    </div>
                    <div class="art-two">
                      <div class="art-image">
                        <div class="artist-image-two" title="Art Image Two"></div>
                      </div>
                      <div class="art-description">M. B. &vert; Frankfurt</div>
                    </div>
                  </div>
                  <div class="art-box">
                    <div class="art-one">
                      <div class="art-image">
                        <div class="artist-image-three" title="Art Image Three"></div>
                      </div>
                      <div class="art-description">
                        Gianni Vasi &vert; Loerrach
                      </div>
                    </div>
                    <div class="art-two">
                      <!--<div class="art-image">
                        <div class="artist-image-four"></div>
                      </div>
                      <div class="art-description"></div>-->
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
                      <img
                        class="social-desktop"
                        src="./assets/img/SocialIcons/mail.png"
                      />
                      <h5>contact@zeroArtium.com</h5>
                    </div>
                    <div class="contact-link" @click="openInstagram()">
                      <img
                        class="social-desktop"
                        src="./assets/img/SocialIcons/instagram-logo.png"
                      />
                      <h5>zeroArtium</h5>
                    </div>
                  </div>
                  <app-footer></app-footer>
                </div>
                <div class="contacts-image" title="Contact"></div>
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
              <app-footer></app-footer>
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
                <art-collection-text></art-collection-text>
                <div id="navigation-button">
                  <a href="/collection-mobile">
                    <h5>&#x25E6; View Collection</h5>
                  </a>
                </div>
                <a href="#contact">
                  <h5>&#x25E6; Contact</h5>
                </a>
              </div>
              <app-footer></app-footer>
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
                    <vision-text></vision-text>
              </div>
              <app-footer></app-footer>
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
                <artists-text></artists-text>
                <div id="navigation-button">
                  <a href="/artists-mobile">
                    <h5>&#x25E6; View Artists</h5>
                  </a>
                </div>
                <a href="#contact">
                  <h5>&#x25E6; Contact</h5>
                </a>
              </div>
              <app-footer></app-footer>
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
                  <img
                    class="social-desktop"
                    src="./assets/img/SocialIcons/mail.png"
                  />
                  <h5>contact@zeroArtium.com</h5>
                </div>
                <div class="contact-link" @click="openInstagram()">
                  <img
                    class="social-desktop"
                    src="./assets/img/SocialIcons/instagram-logo.png"
                  />
                  <h5>zeroArtium</h5>
                </div>
              </div>
              <app-footer></app-footer>
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
      visibility: "translate(-5em,0)",
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
        this.changeVisibility("translate(-5em,0)");
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

