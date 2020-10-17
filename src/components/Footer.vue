<template>
  <div v-if="!this.$device.mobile" class="footer">
    <div class="container-fluid b-black py-3">
      <div class="row">
        <div class="col-12 text-center">
          <a href="https://www.instagram.com/" target="_blank"
            ><img id="social-desktop" src="../assets/img/Instagram_1.png"
          /></a>

          <a href="https://linkedin.com/" target="_blank"
            ><img id="social-desktop" src="../assets/img/Linkedin_1.png"
          /></a>

          <a href="https://twitter.com/" target="_blank"
            ><img id="social-desktop" src="../assets/img/Twitter_1.png"
          /></a>
        </div>
        <div class="col-12 text-center mt-3 text-white">
          <p>
            created by
            <a id="company">ZeroArtium &copy;</a>
            &minus; A
            <a id="company">Redwood &copy;</a>
            company -
            <a class="text-white" href="privacy">Privacy statement</a>
            &vert;
            <a class="text-white" href="terms"
              >Terms and conditions</a
            >
          </p>
        </div>
      </div>
      <!-- row -->
    </div>
  </div>
  <div v-else class="footer">
    <div class="container-fluid b-black py-3">
      <div class="row">
        <div class="text-center">
          <a href="https://www.instagram.com/" target="_blank"
            ><img id="social-mobile" src="../assets/img/Instagram_1.png"
          /></a>

          <a href="https://linkedin.com/" target="_blank"
            ><img id="social-mobile" src="../assets/img/Linkedin_1.png"
          /></a>

          <a href="https://twitter.com/" target="_blank"
            ><img id="social-mobile" src="../assets/img/Twitter_1.png"
          /></a>
        </div>
        <div class="col-12 text-center mt-3 text-white">
          <p>
            created by
            <a id="company">ZeroArtium &copy;</a>
            &minus; A
            <a id="company">Redwood &copy;</a>
            company -
            <a class="text-white" href="privacy">Privacy statement</a>
            &vert;
            <a class="text-white" href="terms"
              >Terms and conditions</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<style>
.footer {
  background-color: gray;
}

#social-desktop {
  width: 2%;
}

#social-mobile {
  margin-left: 5px;
  margin-right: 5px;
  width: 10%;
}

#company {
  color: black;
}
</style>
