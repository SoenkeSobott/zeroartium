<template>
  <div class="footer">
    <div class="legal">
      <b-button class="language-switch"
        @click="changeLanguage()"
        >{{ $t(this.$i18n.locale.toUpperCase()) }}</b-button
      >
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
  data() {
    return {
      currentLang: this.$i18n.locale,
    };
  },
  methods: {
    changeLanguage() {
      if (this.currentLang == "de") {
        this.currentLang = "en";
        this.$i18n.locale = "en";
      } else {
        this.currentLang = "de";
        this.$i18n.locale = "de";
      }
    },
  },
};
</script>