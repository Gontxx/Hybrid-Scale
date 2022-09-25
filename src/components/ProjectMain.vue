<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
      <el-breadcrumb-item>Home</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="content">
      <ProjectListTable></ProjectListTable>
    </el-col>
  </el-main>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import ProjectListTable from "@/components/tables/ProjectListTable";
export default {
name: "ProjectMain",
  components: {ProjectListTable},
  data(){
    return {
      separator: ArrowRight
    }
  }
}
</script>

<style scoped>
.content {
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>