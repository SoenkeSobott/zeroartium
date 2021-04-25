<template>
  <div class="container-terms">
    <div v-if="!this.$device.mobile" class="terms-desktop">
      <a href="/">
        <h1 class="name-link">ZeroArtium.</h1>
      </a>
      <h2 class="title-terms">Terms and conditions</h2>

      <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
      <p>
        Soenke Sobott<br />
        Fuerstenbergstrasse 82<br />
        78467 Konstanz
      </p>

      <h3>Kontakt</h3>
      <p>
        Telefon: 01727456094<br />
        E-Mail: info@zeroartium.com
      </p>

      <h3>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h3>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <div>
        Icons erstellt von
        <a href="https://www.freepik.com" title="Freepik">Freepik</a>
        from
        <a href="https://www.flaticon.com/de/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>

      <div>
        Photos by:
        <br />
        <a
          href="https://unsplash.com/@adrienolichon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Adrien Olichon
        </a>
        on
        <a
          href="https://unsplash.com/s/photos/art-gallery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a
        >
        <br />
        <a
          href="https://unsplash.com/@martinsanchez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Martin Sanchez</a
        >
        on
        <a
          href="https://unsplash.com/@martinsanchez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a
        >
        <br />

        Cookie Banner by:
        <br />
        <a href="https://www.npmjs.com/package/vue-cookie-accept-decline">
          vue-cookie-accept-decline
        </a>
        <br />
      </div>
    </div>
    <div v-else class="terms-mobile">
      <a href="/">
        <h1 class="name-link">ZeroArtium.</h1>
      </a>
      <h2 class="title-terms">Terms and conditions</h2>

      <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
      <p>
        Soenke Sobott<br />
        Fuerstenbergstrasse 82<br />
        78467 Konstanz
      </p>

      <h3>Kontakt</h3>
      <p>
        Telefon: 01727456094<br />
        E-Mail: info@zeroartium.com
      </p>
      <h3>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h3>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <div>
        Icons erstellt von
        <a href="https://www.freepik.com" title="Freepik">Freepik</a>
        from
        <a href="https://www.flaticon.com/de/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>

      <div>
        Photos by:
        <br />
        <a
          href="https://unsplash.com/@adrienolichon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Adrien Olichon
        </a>
        on
        <a
          href="https://unsplash.com/s/photos/art-gallery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a
        >
        <br />
        <a
          href="https://unsplash.com/@martinsanchez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Martin Sanchez</a
        >
        on
        <a
          href="https://unsplash.com/@martinsanchez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a
        >
        <br />
        Cookie Banner by:
        <br />
        <a href="https://www.npmjs.com/package/vue-cookie-accept-decline">
          vue-cookie-accept-decline
        </a>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Terms",
};
</script>

<style>
/*---- General Styles ----*/
.container-terms {
  height: 100vh;
  width: 100vw;
  overflow: scroll;
}

.name-link {
  margin-top: 0;
  margin-bottom: 1vh;
}

.title-terms {
  margin: 0;
}

/*---- Desktop Styles ----*/
.terms-desktop {
  margin-left: 2%;
  margin-right: 2%;
}

/*---- Mobile Styles ----*/
.terms-mobile {
  margin-left: 2%;
  margin-right: 2%;
}

.terms-mobile h1 {
  font-size: 12vw;
  font-weight: normal;
}

.terms-mobile h2 {
  font-size: 10vw;
  font-weight: normal;
}

.terms-mobile h3 {
  font-size: 6vw;
  font-weight: normal;
}

.terms-mobile h5 {
  font-size: 5vw;
}
</style>