<template>
  <div id="app">
    <p>看不见！！</p>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "App"
})
export default class extends Vue {}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p{
  padding: 0;
  margin: 0;
}
</style>
