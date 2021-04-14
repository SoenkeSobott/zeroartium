<template>
  <div v-if="!this.$device.mobile" class="header">
    <a id="name" href="/">
      <div>
        <h1>Zero</h1>
        <h1>Artium.</h1>
      </div>
    </a>
  </div>
  <div v-else class="header-mobile">
    <a id="name" href="/">
      <div style="height: 100px; width: 1000px">
        <h1>Zero</h1>
        <h1>Artium.</h1>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    msg: String,
  },
};
</script>

<style>
.header {
  position: absolute;
  height: 100px;
  width: 100%;
  margin-left: 20px;
  border-bottom: grey;
  border-bottom-style: solid;
}

.header-mobile {
  height: 50px;
  width: 100%;
  margin-left: 20px;
  border-bottom: grey;
  border-bottom-style: solid;
}
</style>