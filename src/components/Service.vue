<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/services' }">Services</el-breadcrumb-item>
      <el-breadcrumb-item>cat-detection-sevice</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="content">
      <el-descriptions title="About this service" column=2 size="large">
      <el-descriptions-item label="Status">
        <el-tag size="small">Running</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Cluster">
        <plain-router-link to="/clusters" text="WM01"></plain-router-link>
      </el-descriptions-item>
      <el-descriptions-item label="Service ID">JEIOFN839902</el-descriptions-item>
      <el-descriptions-item label="Runtime Environment">
        <el-link :underline=false>
          View
        </el-link>
      </el-descriptions-item>
      <el-descriptions-item label="Cluster Environment">cluster-enviv-di</el-descriptions-item>
      <el-descriptions-item label="Start Time">
        03/09/2022
      </el-descriptions-item>
      <el-descriptions-item label="Up Time">
        3days, 14hrs
      </el-descriptions-item>
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
      <service-info-table></service-info-table>
    </el-col>

  </el-main>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import ServiceInfoTable from '@/components/ServiceInfoTable'
import PlainRouterLink from "@/components/PlainRouterLink";
export default {
name: "Service",
  components: {ServiceInfoTable, PlainRouterLink},
  data(){
  return {
    separator: ArrowRight,
  }
  },
}
</script>

<style scoped>
.el-header {
  text-align: left;
  font-size: 15px;
  font-weight: bold;
}
.content {
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>