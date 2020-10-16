<template>
  <div class="footer">
    <div class="container-fluid b-black py-3">
        <div class="row">
            <div class="col-12 text-center">
                <a href="https://www.instagram.com/" target="_blank"><img src='../assets/img/Instagram_1.png' style="width:2%"/></a>

                <a href="https://linkedin.com/" target="_blank"><img src='../assets/img/Linkedin_1.png' style="width:2%"/></a>

                <a href="https://twitter.com/" target="_blank"><img src='../assets/img/Twitter_1.png' style="width:2%"/></a>
            </div>
            <div class="col-12 text-center mt-3 text-white">
                <p>created by
                    <a class="text-white" href="/">ZeroArt &copy;</a>
                    &minus; A
                    <a class="text-white" href="#" target="_blank">Redwood Company &copy;</a>
                    -
                    <a class="text-white" href="privacy-statement">Privacy statement</a> &vert;
                    <a class="text-white" href="terms-and-conditions">Terms and conditions</a>
                </p>
            </div>
        </div>
        <!-- row -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style>
  .footer {
      background-color: gray;
  }
</style>
