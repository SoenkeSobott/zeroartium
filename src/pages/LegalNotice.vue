<template>
  <div class="container-terms">
    <div v-if="!this.$device.mobile" class="terms-desktop">
      <a href="/">
        <h1 class="name-link">ZeroArtium</h1>
      </a>
      <h2 class="title-terms">Impressum</h2>

      <h4>Angaben gem&auml;&szlig; &sect; 5 TMG</h4>
      <legal-notice-text></legal-notice-text>

      <h4>Datenschutzbeauftragter im Sinne der DS-GVO</h4>
      <dsgvo-text></dsgvo-text>

      <h4>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h4>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <!-- Used librarys and co -->
      <h4>Verwendete Erzeugnisse von Drittanbietern</h4>
      <third-party-content></third-party-content>
      <br/>
    </div>

    <div v-else class="terms-mobile">
      <a href="/">
        <h1 class="name-link">ZeroArtium</h1>
      </a>
      <h2 class="title-terms">Impressum</h2>

      <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
      <legal-notice-text></legal-notice-text>

      <h3>Datenschutzbeauftragter im Sinne der DS-GVO</h3>
      <dsgvo-text></dsgvo-text>

      <h3>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h3>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <!-- Used librarys and co -->
      <h3>Verwendete Erzeugnisse von Drittanbietern</h3>
      <third-party-content></third-party-content>
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