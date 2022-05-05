<template>
  <div class="shadow-box">
    <div class="left-box">
      <div class="header-box">
        <h2 id="title">{{ $t("message.contact") }}</h2>
        <h4 id="subtitle">{{ $t("message.contactSubtitle") }}</h4>
      </div>
      <div class="content">
        <p>
          {{ $t("message.contactDescription") }}
        </p>
        <div class="contact-email">
          <img
            class="social-desktop"
            src="../../assets/img/SocialIcons/mail.png"
          />
          <h5>contact@zeroartium.com</h5>
        </div>
        <div class="contact-link" @click="openInstagram()">
          <img
            class="social-desktop"
            src="../../assets/img/SocialIcons/instagram-logo.png"
          />
          <h5>ZeroArtium</h5>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
    <div class="right-image contacts-image" title="Contact"></div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    goToPage(pageNumber) {
      this.$emit("clicked", pageNumber);
    },
    openInstagram() {
      window.open("https://www.instagram.com/zeroartium/", "_blank");
    },
  },
};
</script>


<style lang="scss" scoped>
.contacts-image {
  background-image: url("../../assets/img/ArtGallery.jpg");
  width: 60%;
}

@media only screen and (max-width: 500px) {
  .contacts-image {
    width: 0%;
    visibility: hidden;
    display: none;
  }
}
</style>