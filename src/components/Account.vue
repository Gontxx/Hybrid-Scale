<!--This page describe all available cloud service accounts of the current WeCloud account.-->
<!--You may want to learn more detail investigating AccountTable.vue.-->
<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/Accounts' }">Accounts</el-breadcrumb-item>
      <el-breadcrumb-item>All</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="content">
      <sub-header content-name="My accounts"></sub-header>
      <account-table></account-table>
    </el-col>
  </el-main>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import AccountTable from "@/components/tables/AccountTable"
import SubHeader from "@/components/SubHeader";

export default {
  name: "Account",
  components: {AccountTable, SubHeader},
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