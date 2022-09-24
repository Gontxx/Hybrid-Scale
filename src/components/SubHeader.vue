<template>
  <el-header>
    {{ contentName }}
  </el-header>
</template>

<script>
export default {
name: "SubHeader",
  props:['contentName']
}
</script>

<style scoped>
.el-header {
  padding-left: 0;
  font-size: 16px;
  padding-top: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: left;
}
</style>