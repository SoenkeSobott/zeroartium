<template>
  <div v-if="!this.$device.mobile">
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