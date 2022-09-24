<template>
  <el-row>
    <el-table
        ref="multipleTableRef"
        :data="tableData"
        class="content"
        @selection-change="handleSelectionChange"
        size="medium"
    >
      <el-table-column type="selection" />
      <el-table-column property="name" label="Name">
        <template #default="scope">
          <plain-router-link
              to="/clusters"
              :text=scope.row.name
          >
          </plain-router-link>
        </template>
      </el-table-column>
      <el-table-column label="Status" width="100">
        <template #default="scope">
          <el-tag size="small">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column property="activeResources" label="ActiveResources"/>
      <el-table-column property="cost" label="Cost" width="100"/>
      <el-table-column property="createdAt" label="Created At"/>
      <el-table-column property="createdBy" label="Created By" width="100"/>
      <el-table-column property="cloud" label="Cloud"/>
    </el-table>
  </el-row>
</template>

<script>
import PlainRouterLink from "@/components/PlainRouterLink";

export default {
  name: "ProjectClustersInfoTable",
  components: {PlainRouterLink},
  data() {
    return {
      tableData: Array(6).fill({
        name: 'cluster-1',
        status: 'running',
        logs: 'logs',
        activeResources: '100 GPUs, 1290 CPUs',
        duration: '36s',
        createdAt: '8/23/2021 12:22:02 PM',
        createdBy: 'xxtong',
        cloud: 'AWS',
        cost: '$199.02'
      })
    }
  }
}
</script>

<style scoped>

</style>