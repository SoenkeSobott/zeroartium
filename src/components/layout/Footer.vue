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