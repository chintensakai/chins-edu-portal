<template>
  <div id="app">
    <el-container>
      <Header></Header>
      <el-main><router-view /></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from "./views/Header.vue"
export default {
  name: "App",
  components: {
    Header
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}




</style>
