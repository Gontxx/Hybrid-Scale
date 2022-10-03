<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/Accounts' }">Accounts</el-breadcrumb-item>
      <el-breadcrumb-item>{{ functionName }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="content">
      <sub-header content-name="Deployed functions"></sub-header>
      <account-function-table :function-list="functionList" :function-name="functionName"></account-function-table>
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
      functionList: [],
      functionName: '',
    }
  },
  created() {
    console.log(this.$route)
    this.functionList = JSON.parse(this.$route.query.functionList)
    this.functionName = this.$route.query.functionName
  }
}
</script>

<style scoped>

</style>