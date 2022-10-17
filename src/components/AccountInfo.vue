<!--this template describes all deployed functions in a certain account-->
<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/Accounts' }">Accounts</el-breadcrumb-item>
      <el-breadcrumb-item>{{ accountName }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="main-content">
      <sub-header content-name="Deployed functions"></sub-header>
      <account-function-table :provider="provider" @showLogs="showLogs" ></account-function-table>
      <sub-header content-name="Logs"></sub-header>
      <terminal :account-name="accountName" :provider="provider" :logs="logs"></terminal>
    </el-col>
  </el-main>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import AccountFunctionTable from "@/components/tables/AccountFunctionTable";
import SubHeader from "@/components/SubHeader";
import Terminal from '@/components/Terminal'

export default {
  name: "AccountInfo",
  components: {AccountFunctionTable, SubHeader, Terminal},
  data() {
    return {
      accountName: '',
      separator: ArrowRight,
      functionName: '',
      provider: '',
      logs: []
    }
  },
  created() {
    console.log(this.$route)
    this.accountName = this.$route.query.accountName
    this.provider = this.$route.query.provider
  },
  methods: {
    showLogs(log) {
      this.logs.push(log)
    }
  }
}
</script>

<style scoped>

</style>