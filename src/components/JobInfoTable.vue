<template>
  <el-row>
    <el-table
        ref="multipleTableRef"
        :data="tableData"
        class="content"
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
      <el-table-column property="cluster" label="Cluster" >
        <template #default="scope">
          <plain-router-link
              to="/clusters"
              :text=scope.row.cluster
          >
          </plain-router-link>
        </template>
      </el-table-column>
      <el-table-column label="Started">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column property="duration" label="Duration"></el-table-column>
    </el-table>
  </el-row>
</template>

<script>
import PlainRouterLink from "@/components/PlainRouterLink";
export default {
  name: "JobInfoTable",
  components: {PlainRouterLink},
  data() {
    return {
      tableData: [
        {
          name: 'knative_submit_job_0983',
          status: 'running',
          logs: 'logs',
          cluster: 'WM01',
          duration: '36s',
          date: '8/23/2021 12:22:02 PM',
        },
        {
          name: 'knative_submit_job_09834vvs',
          status: 'idle',
          logs: 'logs',
          cluster: 'WM01',
          duration: '36s',
          date: '8/23/2021 12:22:02 PM'
        },
        {
          name: 'knative_submit_job_09834vvs',
          status: 'failed',
          logs: 'logs',
          cluster: 'WM01',
          duration: '36s',
          date: '8/23/2021 12:22:02 PM'
        },
        {
          name: 'knative_submit_job_09834vvs',
          status: 'running',
          logs: 'logs',
          cluster: 'WM01',
          duration: '36s',
          date: '8/23/2021 12:22:02 PM'
        },
        {
          name: 'knative_submit_job_09834vvs',
          status: 'running',
          logs: 'logs',
          cluster: 'WM01',
          duration: '36s',
          date: '8/23/2021 12:22:02 PM'
        },
        {
          name: 'knative_submit_job_09834vvs',
          status: 'running',
          logs: 'logs',
          cluster: 'WM01',
          duration: '36s',
          date: '8/23/2021 12:22:02 PM'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>