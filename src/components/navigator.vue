<template>
  <el-aside>
    <el-menu
        active-text-color="#3779d2"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        @select="handleSelect"
    >

      <el-header style="text-align: left; margin-bottom: 20px">
        <span class="logo" style="color: white">WeCloud</span>
      </el-header>

      <el-menu-item index="home">
        <el-icon><HomeFilled /></el-icon>
        <span>Home</span>
      </el-menu-item>

      <el-sub-menu index="provider">
        <template #title>
          <el-icon><View /></el-icon>
          <span>Providers</span>
        </template>
          <el-menu-item index="aws-provider">AWS</el-menu-item>
          <el-menu-item index="aliyun-provider">Aliyun</el-menu-item>
          <el-menu-item index="knative-provider">KNative</el-menu-item>
      </el-sub-menu>


      <el-menu-item index="accounts">
        <el-icon><User /></el-icon>
        <span>Accounts</span>
      </el-menu-item>

      <el-menu-item index="railway-demo">
        <el-icon><VideoCameraFilled /></el-icon>
        <span>Railway Demo</span>
      </el-menu-item>

      <el-menu-item index="projects">
        <el-icon><FolderOpened /></el-icon>
        <span>Projects</span>
      </el-menu-item>

      <el-menu-item index="jobs">
        <el-icon><Briefcase /></el-icon>
        <span>Jobs</span>
      </el-menu-item>

      <el-menu-item index="services">
        <el-icon><Service /></el-icon>
        <span>Services</span>
      </el-menu-item>

      <el-menu-item index="clusters">
        <el-icon><Platform /></el-icon>
        <span>Clusters</span>
      </el-menu-item>

      <el-menu-item index="configurations">
        <el-icon><setting /></el-icon>
        <span>Configurations</span>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
export default {
name: "navigator",
  methods: {
    handleSelect(index) {
      this.$router.push(index)
    }
  }
}
</script>

<style scoped>
.el-menu {
  height: 100%;
  background-color: #0d305e;
  padding-top: 20%;
}
.el-menu-item {
  background-color:#0d305e;
}
.logo {
  font-size: 40px;
}
</style>