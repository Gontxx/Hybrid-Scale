<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/services' }">Services</el-breadcrumb-item>
      <el-breadcrumb-item>railway-classification-service</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="main-content">
      <el-descriptions title="About this service" column=2 size="large">
      <el-descriptions-item label="Status">
        <el-tag size="small">Running</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Cluster">
        <plain-router-link to="/clusters" text="mycluster0"></plain-router-link>
      </el-descriptions-item>
      <el-descriptions-item label="Service ID">JEIOFN839902</el-descriptions-item>
      <el-descriptions-item label="Runtime Environment">
        <el-link :underline=false>
          View
        </el-link>
      </el-descriptions-item>
      <el-descriptions-item label="Cluster Environment">AWS Ubuntu</el-descriptions-item>
      <el-descriptions-item label="Start Time">
        06/12/2022
      </el-descriptions-item>
      <el-descriptions-item label="Up Time">
        5min
      </el-descriptions-item>
      <el-descriptions-item label="Cost">
        $0.93
      </el-descriptions-item>
    </el-descriptions>
      <el-row style="margin-top: 10px;">
        <el-button type="success" >
          Dashboard
          <el-icon  style="margin-left: 3px"><DataAnalysis /></el-icon>
        </el-button>
        <el-button type="danger" >
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
import ServiceInfoTable from '@/components/tables/ServiceInfoTable'
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

</style>