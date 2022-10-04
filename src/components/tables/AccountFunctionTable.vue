<!--Each row of this table describe a deployed function of the user's account-->
<!--You may invoke each function or delete it via buttons on the right-->
<template>
  <el-row>
    <el-table
        :data="$store.state.CurAccountFunctionList"
        class="content"
    >
      <el-table-column type="selection" />
      <el-table-column property="FunctionName" label="Name"/>
      <el-table-column property="Runtime" label="Run Time"/>
      <el-table-column property="Description" label="Description"/>
      <el-table-column property="LastModified" label="Last Modified"/>
      <el-table-column property="Version" label="Version"/>
      <el-table-column label="Operations" width="270">
        <template #default="scope">
          <el-button type="primary" @click="invokeFunction(scope.$index)">
            Invoke <el-icon><Open /></el-icon>
          </el-button>
          <el-button type="danger" @click="deleteFunction(scope.$index)">
            Remove <el-icon><Delete /></el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
import axios from 'axios'
import {ElMessage} from "element-plus"

export default {
  name: "AccountFunctionTable",
  data() {
    return {
      invokeUrl: 'http://127.0.0.1:5000/invoke',
      deleteUrl: 'http://127.0.0.1:5000/delete',
    }
  },
  props: {
    accountName: {
      type: String,
      required: true
    },
    provider: {
      type: String,
      required: true
    }
  },
  methods: {
    postRequest(index, postUrl, successCallback) {
      let postData = {
        "function_name": this.$store.state.CurAccountFunctionList[index].FunctionName,
        "provider": this.provider
      }
      console.log(postData)
      axios.post(postUrl, postData, {
        'Content-Type': 'application/json'
      }).then(
          res => {
            console.log(res)
            if (res.data.errorType != undefined) {
              ElMessage.error(res.data.errorType + ': ' + res.data.errorMessage)
            } else {
              let message = JSON.parse(res.data.body)['message']
              ElMessage.success(message)
              if (successCallback) {
                successCallback()
              }
            }
          }
      ).catch(
          err => {
            console.log(err)
            ElMessage.error(err)
          }
      )
    },
    invokeFunction(index) {
      this.postRequest(index, this.invokeUrl)
    },
    deleteFunction(index) {
      this.postRequest(index, this.deleteUrl, ()=>{
        this.$store.commit('deleteFunction', index)
      })
    }
  }
}
</script>

<style scoped>

</style>