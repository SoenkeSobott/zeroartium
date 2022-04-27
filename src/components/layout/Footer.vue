<template>
  <div class="footer">
    <img class="footer-item language-icon" src="../../assets/img/SocialIcons/global.png" />
    <a class="footer-item language-switch" @click="changeLanguage()">{{
        $t(this.$i18n.locale.toUpperCase())
      }}</a>
    &vert;
    <a class="footer-item" href="privacy">{{ $t("message.privacyStatement") }}</a>
    &vert;
    <a class="footer-item" href="legal-notice">{{ $t("message.legalNotice") }}</a>
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
  font-weight: lighter;
  align-items: center;
  justify-content: center;
}

.footer-item {
  margin: 0 5px;
}

.footer a {
  text-decoration: none;
}

.footer .language-switch {
  font-weight: bold;
}

.mobile .footer a {
  font-size: 2vh;
}

.mobile .footer .language-switch {
  font-size: 2vh;
  font-weight: bold;
}

.language-icon {
  height: 2vh;
  width: 2vh;
}
</style>