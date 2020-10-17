<template>
  <div v-if="!this.$device.mobile" class="footer">
    <div class="container-fluid b-black py-3">
      <div class="row">
        <p>Not Found</p>
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
#social-desktop {
  width: 2%;
}

#social-mobile {
  margin-left: 5px;
  margin-right: 5px;
  width: 10%;
}
.footer {
  background-color: gray;
}
</style>
