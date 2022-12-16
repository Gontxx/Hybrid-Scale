<template>
  <el-col>
    <el-table
        ref="multipleTableRef"
        :data="instance_list"
        class="content"
        size="medium"
    >
<!--      <el-table-column type="selection" />-->
      <el-table-column property="id" label="ID">
      </el-table-column>
      <el-table-column property="instance_type" label="Instance Type"/>
      <el-table-column label="Status" width="100">
        <template #default="scope">
          <el-tag size="small">{{scope.row.state.Name}}</el-tag>
        </template>
      </el-table-column>
<!--      <el-table-column property="logs" label="Logs" width="100">-->
<!--        <template #default="scope">-->
<!--          <el-link :underline=false>-->
<!--            {{scope.row.logs}}-->
<!--            <el-icon><Document /></el-icon>-->
<!--          </el-link>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column label="Started">-->
<!--        not supported yet-->
<!--&lt;!&ndash;        <template #default="scope">{{ scope.row.date }}</template>&ndash;&gt;-->
<!--      </el-table-column>-->
    </el-table>
  </el-col>
</template>

<script>
export default {
  name: "ClusterInfoTable",
  data() {
    return {
      tableData: Array(6).fill({
            id: 'tune-training-job',
            state: {
              Name: 'running'
            },
            logs: 'logs',
            instance_type: 't3.xlarge',
            date: '8/23/2021 12:22:02 PM',
          }
      )
    }
  },
  props: {
    instance_list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>