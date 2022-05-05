<template>
  <div>
    <div>
      {{ $t("message.iconsCreatedWith") }}
      <a href="https://www.freepik.com" title="Freepik" target="_blank"
        >Freepik</a
      >
      von
      <a href="https://www.flaticon.com/de/" title="Flaticon" target="_blank"
        >www.flaticon.com</a
      >
    </div>
    <br />
    <div>
      Videos:
      <div class="contact-link" @click="openInstagram('_samuel.lay_')">
        <img
          class="social-desktop"
          src="../../assets/img/SocialIcons/instagram-logo.png"
        />
        <h5>Samuel Lay</h5>
      </div>
      {{ $t("message.images") }}:
      <br />
      <ul>
        <li>
          <!-- Epic figure woman -->
          <a href="https://unsplash.com/@sur_le_misanthrope" target="_blank">
            Pavel Nekoranec
            <a href="https://unsplash.com/photos/I__QKQLMIKs" target="_blank"
              >(Unsplash)</a
            ></a
          >
        </li>
        <li>
          <!-- Romanian temple -->
          <a href="https://unsplash.com/@czermak_photography" target="_blank">
            Christopher Czermak
            <a href="https://unsplash.com/photos/PamFFHL6fVY" target="_blank"
              >(Unsplash)</a
            ></a
          >
        </li>
        <li>
          <!-- Dirty Hands -->
          <a href="https://unsplash.com/@eseamau" target="_blank">
            Amauri Mejía
            <a href="https://unsplash.com/photos/IhXrWDckZOQ" target="_blank"
              >(Unsplash)</a
            ></a
          >
        </li>
        <li>
          <!-- Art Gallery Image-->
          <a href="https://unsplash.com/@adrienolichon" target="_blank">
            Adrien Olichon
            <a href="https://unsplash.com/photos/AcLG4W3dXUA" target="_blank"
              >(Unsplash)</a
            ></a
          >
        </li>
      </ul>
    </div>
    <div>
      {{ $t("message.libraries") }}:
      <br />
      <ul>
        <li>
          Cookie Banner:
          <a
            href="https://www.npmjs.com/package/vue-cookie-accept-decline"
            target="_blank"
          >
            vue-cookie-accept-decline</a
          >
        </li>
        <li>
          <a href="https://baianat.github.io/hooper/" target="_blank">
            Hooper Vue</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdPartyContent",
  methods: {
    openInstagram(instagramUsername) {
      window.open("https://www.instagram.com/" + instagramUsername, "_blank");
    },
  },
};
</script>