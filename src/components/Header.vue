<template>
  <div v-if="!this.$device.mobile" class="header">
    <a id="name" href="/">
      <div class="row col-md-9">
        <h1 class="mr-5-5">Zero</h1>
        <h1 class="">Artium.</h1>
      </div>
    </a>
  </div>
  <div v-else class="header-mobile">
    <a id="name" href="/">
      <div class="row col-md-9">
        <h3 class="mr-5-5">Zero</h3>
        <h3 class="">Artium.</h3>
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
