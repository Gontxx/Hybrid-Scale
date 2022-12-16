<template>
  <el-col>
    <sub-header content-name="Deployments Info"></sub-header>
    <el-table
        ref="multipleTableRef"
        :data="tableData"
        class="content"
        @selection-change="handleSelectionChange"
        size="medium"
    >
      <el-table-column type="selection" />
      <el-table-column property="name" label="Name"/>
      <el-table-column label="Status" width="100">
        <template #default="scope">
          <el-tag size="small">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column property="logs" label="Logs" width="100">
        <template #default="scope">
          <el-link :underline=false>
            {{scope.row.logs}}
            <el-icon><Document /></el-icon>
          </el-link>
        </template>
      </el-table-column>
      <el-table-column property="cluster" label="Cluster" width="180">
        <template #default="scope">
          <plain-router-link to="/clusters" :text=scope.row.cluster>
          </plain-router-link>
        </template>
      </el-table-column>
      <el-table-column property="actors" label="Actors" width="100"/>
      <el-table-column label="Started">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
import SubHeader from "@/components/SubHeader";
import PlainRouterLink from "@/components/PlainRouterLink";
export default {
  name: "ServiceInfoTable",
  components: {SubHeader, PlainRouterLink},
  data() {
    return {
      tableData: [
        {
          name: 'tune-deployment',
          status: 'running',
          logs: 'logs',
          cluster: 'mycluster0',
          actors: 1,
          date: '6/12/2022 15:42:02 PM',
        },
        {
          name: 'tune-deployment',
          status: 'idle',
          logs: 'logs',
          cluster: 'mycluster0',
          actors: 1,
          date: '6/12/2022 12:22:02 PM'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>