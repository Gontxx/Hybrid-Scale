<template>
  <el-row>
    <el-table
        :data="functionList"
        class="content"
    >
      <el-table-column type="selection" />
      <el-table-column property="FunctionName" label="Name"/>
      <el-table-column property="Runtime" label="Run Time"/>
      <el-table-column property="Description" label="Description"/>
      <el-table-column property="LastModified" label="Last Modified"/>
      <el-table-column property="Version" label="Version"/>
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: "AccountFunctionTable",
  data() {
    return {
      tableData: []
    }
  },
  props: {
    functionList: {
      type: Array,
      required: true
    },
    functionName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>