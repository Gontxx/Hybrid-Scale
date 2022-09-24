<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/Jobs' }">Jobs</el-breadcrumb-item>
      <el-breadcrumb-item>{{ jobName }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="content">
      <el-descriptions title="About this job" column=2 size="large">
        <el-descriptions-item label="Status">
          <el-tag size="small">Active</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Cluster Environment">Demo environ</el-descriptions-item>
        <el-descriptions-item label="Cluster Compute Config">Scale demo</el-descriptions-item>
        <el-descriptions-item label="Resources">
          CPU(12 utilized/ 128 running)<br>
          Memory(12.4 GiB utilized/ 129.21 GiB running)<br>
          GPU(8 utilized/ 8 running)<br>
        </el-descriptions-item>
        <el-descriptions-item label="Cloud">JEIOFN839902</el-descriptions-item>
        <el-descriptions-item label="Runtime Environment">View</el-descriptions-item>
        <el-descriptions-item label="Cost">
          $135.93
        </el-descriptions-item>
      </el-descriptions>
      <el-row style="margin-top: 10px;">
        <el-button type="success" style="font-family: Poppins;">
          Dashboard
          <el-icon  style="margin-left: 3px"><DataAnalysis /></el-icon>
        </el-button>
        <el-button type="danger" style="font-family: Poppins;">
          Terminate
          <el-icon style="margin-left: 3px"><CircleCloseFilled /></el-icon>
        </el-button>
      </el-row>
      <sub-header content-name="Job runs"></sub-header>
      <info-table></info-table>
    </el-col>

  </el-main>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import InfoTable from "@/components/JobInfoTable"
import SubHeader from "@/components/SubHeader";

export default {
  name: "Job",
  components: {InfoTable, SubHeader},
  data(){
  return {
    jobName: 'tune-training-job',
    separator: ArrowRight,
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