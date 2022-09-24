<template>
  <div id="app">
    <el-container>
      <router-view name="left"></router-view>
      <router-view name="right"></router-view>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html,body,#app,.el-container {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0px;
  /*margin-top: 60px;*/
}
.el-aside {
  background-color: #0d305e;
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 400px;
}
</style>
