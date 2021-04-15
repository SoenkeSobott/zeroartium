<template>
  <div class="collection-mobile">
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
              <h2 id="title">Art Collection</h2>
              <h4 id="subtitle">ZeroArtium&#174; Spring Collection.</h4>
            </div>
            <div class="content-mobile">
              <div class="art-box">
                <div class="art-row">
                  <div class="art-image-one"></div>
                  <div class="art-description">Art One</div>
                </div>
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
    <div class="background">
      <div class="shadow-box">
        <div class="container">
          <div class="box-mobile">
            <div class="header-box">
              <h2 id="title">Art Collection</h2>
              <h4 id="subtitle">ZeroArtium&#174; Spring Collection.</h4>
            </div>
            <div class="content-mobile">
              <div class="art-box">
                <div class="art-row">
                  <div class="art-image-two"></div>
                  <div class="art-description">Art Two</div>
                </div>
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
    <div class="background">
      <div class="shadow-box">
        <div class="container">
          <div class="box-mobile">
            <div class="header-box">
              <h2 id="title">Art Collection</h2>
              <h4 id="subtitle">ZeroArtium&#174; Spring Collection.</h4>
            </div>
            <div class="content-mobile">
              <div class="art-box">
                <div class="art-row">
                  <div class="art-image-three"></div>
                  <div class="art-description">Art Three</div>
                </div>
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
    <div class="background">
      <div class="shadow-box">
        <div class="container">
          <div class="box-mobile">
            <div class="header-box">
              <h2 id="title">Art Collection</h2>
              <h4 id="subtitle">ZeroArtium&#174; Spring Collection.</h4>
            </div>
            <div class="content-mobile">
              <div class="art-box">
                <div class="art-row">
                  <div class="art-image-four"></div>
                  <div class="art-description">Art Four</div>
                </div>
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
    <div class="background">
      <div class="shadow-box">
        <div class="container">
          <div class="box-mobile">
            <div class="header-box">
              <h2 id="title">End</h2>
              <h4 id="subtitle">Need more?</h4>
            </div>
            <div class="content-vision">
              <p>
                Stay tuned for the ZeroArtium&#174; Summer Collection, which
                will be released to the public in early June.
                <br />
                <br />
                You can also find more artwork on our Instagram page or contact
                our team directly via the given email address.
              </p>
              <div class="contact-email">
                <img class="social-desktop" src="../assets/img/mail.png" />
                <h5>info@zeroArtium.com</h5>
              </div>
              <div class="contact-link" @click="openInstagram()">
                <img
                  class="social-desktop"
                  src="../assets/img/instagram-logo.png"
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
@import url("../styles-collection-mobile.css");
</style>