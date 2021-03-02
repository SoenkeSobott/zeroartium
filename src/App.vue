<template>
  <div id="app">
    <Welcome />
    <Footer />
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Welcome,
    Footer,
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
