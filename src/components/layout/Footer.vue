<template>
  <div class="footer">
    <div class="legal">
      <b-button class="language-switch" @click="changeLanguage()">{{
        $t(this.$i18n.locale.toUpperCase())
      }}</b-button>
      &vert;
      <a href="privacy">{{ $t("message.privacyStatement") }}</a>
      &vert;
      <a href="legal-notice">{{ $t("message.legalNotice") }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  methods: {
    changeLanguage() {
      if (window.localStorage.getItem("appLanguage") == "de") {
        this.$i18n.locale = "en";
        window.localStorage.setItem("appLanguage", "en");
      } else {
        this.$i18n.locale = "de";
        window.localStorage.setItem("appLanguage", "de");
      }
    },
  },
};
</script>

<style scoped>
.footer {
    height: 10vh;
    margin: 1vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.legal {
    font-weight: lighter;
    align-items: center;
    justify-content: center;
}

.legal a {
    text-decoration: none;
}

.legal .language-switch {
    font-weight:bold;
}

.mobile .legal a {
    font-size: 2vh;
  }
  
.mobile .legal .language-switch {
  font-size: 2vh;
  font-weight: bold;
}


</style>