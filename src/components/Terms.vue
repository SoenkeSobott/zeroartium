<template>
  <div>
    <Header />
    <section id="terms-and-conditions">
      <h2 v-if="!this.$device.mobile" class="mb-4">Terms and conditions</h2>
      <h3 v-else class="mb-4">Terms and conditions</h3>

      <h4>Angaben gem&auml;&szlig; &sect; 5 TMG</h4>
      <p>
        Soenke Sobott<br />
        Art Agency<br />
        Fuerstenbergstrasse 82<br />
        78467 Konstanz
      </p>

      <h4>Kontakt</h4>
      <p>
        Telefon: 0172757474<br />
        E-Mail: contact@zeroartium.com
      </p>

      <h4>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h4>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Terms",
  props: {
    msg: String,
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
