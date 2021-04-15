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
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="box-mobile">
                  <div class="header-box">
                    <h2 id="title">Art Collection</h2>
                    <h4 id="subtitle">ZeroArtium&#174; Spring Collection.</h4>
                  </div>
                  <div class="content-vision">
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
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="box-mobile">
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
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="box-mobile">
                  <div class="header-box">
                    <h2 id="title">Artists</h2>
                    <h4 id="subtitle">The Masterminds behind the Creations.</h4>
                  </div>
                  <div class="content-vision">
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
        </slide>
        <slide>
          <div class="background">
            <div class="shadow-box">
              <div class="container">
                <div class="box-mobile">
                  <div class="header-box">
                    <h2 id="title">Contact</h2>
                    <h4 id="subtitle">Keep in touch.</h4>
                  </div>
                  <div class="content-vision">
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
              </div>
            </div>
          </div>
        </slide>
      </hooper>