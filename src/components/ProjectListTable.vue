<template>
  <el-col>
    <el-table
        ref="multipleTableRef"
        :data="tableData"
        class="content"
        size="large"
    >
      <el-table-column type="selection" />
      <el-table-column property="name" label="Name">
        <template #default="scope">
          <plain-router-link
              to="/project-info"
              :text=scope.row.name
          >
          </plain-router-link>
        </template>
      </el-table-column>
      <el-table-column label="Status">
        <template #default="scope">
          <el-tag size="small">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Last Modified">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
import PlainRouterLink from "@/components/PlainRouterLink";
export default {
  name: "ClusterInfoTable",
  components: {PlainRouterLink},
  data() {
    return {
      tableData: Array(6).fill({
            name: 'DemoProject',
            status: 'running',
            logs: 'logs',
            cluster: 'WM01',
            actors: 12,
            date: '8/23/2021 12:22:02 PM',
          }
      )
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