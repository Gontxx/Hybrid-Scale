<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
      <el-breadcrumb-item>DemoProject</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="main-content">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="Clusters" name="clusters">
          <project-clusters-info-table></project-clusters-info-table>
        </el-tab-pane>
        <el-tab-pane label="Jobs" name="jobs">
          <cluster-info-table></cluster-info-table>
        </el-tab-pane>
        <el-tab-pane label="Services" name="services">
          <job-info-table></job-info-table>
        </el-tab-pane>

      </el-tabs>

    </el-col>
  </el-main>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import ProjectClustersInfoTable from "@/components/tables/ProjectClustersInfoTable";
import ClusterInfoTable from "@/components/tables/ClusterInfoTable";
import JobInfoTable from "@/components/tables/JobInfoTable";
export default {
name: "Project",
  components: {ProjectClustersInfoTable, ClusterInfoTable, JobInfoTable},
  data(){
    return {
      separator: ArrowRight,
      activeName: 'clusters',

    }
  },
}
</script>

<style scoped>
</style>