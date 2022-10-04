<!--this template describes all deployed functions in a certain account-->
<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/Accounts' }">Accounts</el-breadcrumb-item>
      <el-breadcrumb-item>{{ accountName }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="content">
      <sub-header content-name="Deployed functions"></sub-header>
      <account-function-table :function-list="functionList" :function-name="functionName" :provider="provider"></account-function-table>
    </el-col>
  </el-main>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import AccountFunctionTable from "@/components/tables/AccountFunctionTable";
import SubHeader from "@/components/SubHeader";

export default {
  name: "AccountInfo",
  components: {AccountFunctionTable, SubHeader},
  data() {
    return {
      accountName: '',
      separator: ArrowRight,
      functionName: '',
      provider: ''
    }
  },
  created() {
    console.log(this.$route)
    this.accountName = this.$route.query.accountName
    this.provider = this.$route.query.provider
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