<template>
  <div class="artists-mobile">
    <div class="back-button">
      <a href="/">
        <h5 class="back-button-title">&#x25C0; Back</h5>
      </a>
    </div>
    <div class="background">
      <div class="shadow-box">
        <div class="container">
          <div class="box-mobile">
            <div class="header-box">
              <h2 id="title">Artists</h2>
              <h4 id="subtitle">The Masterminds behind the Creations.</h4>
            </div>
            <div class="content-mobile">
              <div class="artist-image-one"></div>
              <div class="art-description">D. L. Béni &vert; Basel</div>
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
    <div class="background">
      <div class="shadow-box">
        <div class="container">
          <div class="box-mobile">
            <div class="header-box">
              <h2 id="title">Artists</h2>
              <h4 id="subtitle">The Masterminds behind the Creations.</h4>
            </div>
            <div class="content-mobile">
              <div class="artist-image-two"></div>
              <div class="art-description">M. B. &vert; Frankfurt</div>
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
    <div class="background">
      <div class="shadow-box">
        <div class="container">
          <div class="box-mobile">
            <div class="header-box">
              <h2 id="title">Artists</h2>
              <h4 id="subtitle">The Masterminds behind the Creations.</h4>
            </div>
            <div class="content-mobile">
              <div class="artist-image-three"></div>
              <div class="art-description">M. Jacques &vert; Zürich</div>
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
    <div class="background">
      <div class="shadow-box">
        <div class="container">
          <div class="box-mobile">
            <div class="header-box">
              <h2 id="title">End</h2>
              <h4 id="subtitle">Want more?</h4>
            </div>
            <div class="content-vision">
              <p>
                If you would like to find out more about the artists we
                represent, please contact us through the various channels below
                and our team will be happy to assist you.
              </p>
              <div class="contact-email">
                <img
                  class="social-desktop"
                  src="../assets/img/SocialIcons/mail.png"
                />
                <h5>contact@zeroArtium.com</h5>
              </div>
              <div class="contact-link" @click="openInstagram()">
                <img
                  class="social-desktop"
                  src="../assets/img/SocialIcons/instagram-logo.png"
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
</template>

<script>
export default {
  name: "Artists",
  methods: {
    openInstagram: function () {
      window.open("https://www.instagram.com/zeroartium/", "_blank");
    },
  },
};
</script>


<style>
@import url("../styles.css");
@import url("../styles-artists-mobile.css");
</style>