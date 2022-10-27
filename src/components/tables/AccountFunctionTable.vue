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
      showLogsUrl: 'http://127.0.0.1:5000/show_logs',
      logs: []
    }
  },
  props: {
    provider: {
      type: String,
      required: true
    }
  },
  methods: {
    postRequest(index, postUrl, type) {
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
              if (postData.provider == 'aws') {
                ElMessage.success('Success!')
              } else if (postData.provider == 'aliyun') {
                ElMessage.success('Success!')
              }
              if (type == 'invoke') {
                axios.post(this.showLogsUrl, postData, {
                  'Content-Type': 'application/json'
                }).then(
                    log_res => {
                      console.log(log_res)
                      if (postData.provider == 'aws') {
                        log_res.data.payload.at(-1).events.forEach((e) => {
                          console.log(e.message)
                          this.$emit('showLogs', e.message)
                        })
                      } else if (postData.provider == 'aliyun') {
                        this.$emit('showLogs', JSON.stringify(log_res.data.payload.at(0), null, "<br>"))
                      }
                    }
                )
              } else if (type == 'delete') {
                this.$store.commit('deleteFunction', index)
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
      this.postRequest(index, this.invokeUrl, 'invoke')
    },
    deleteFunction(index) {
      this.postRequest(index, this.deleteUrl, 'delete')
    }
  }
}
</script>

<style scoped>

</style>