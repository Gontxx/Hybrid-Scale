<!--This table describe all available cloud service accounts of the current WeCloud account.-->
<!--Currently we only support one account of each provider.-->
<!--You may click the View button to explore all deployed functions of each provider.-->
<template>
  <el-col>
    <el-auto-resizer>
      <el-table
          ref="multipleTableRef"
          :data="$store.state.CloudServiceAccountList"
          class="content"
      >
        <el-table-column type="selection" />
        <el-table-column property="name" label="Name"/>
        <el-table-column property="provider" label="Provider"/>
        <el-table-column property="amortizedCost" label="Amortized Cost"/>
        <el-table-column label="Operation" width="400">
          <template #default="scope">
            <el-button type="primary" @click="showDetail(scope.row.name, scope.row.provider)">
              View <el-icon><Search /></el-icon>
            </el-button>
            <el-button type="info" @click="showAccountDetail(scope.$index)">
              Settings <el-icon><Setting /></el-icon>
            </el-button>
            <el-button type="danger" @click="deleteAccount(scope.$index)">
              Remove <el-icon><Delete /></el-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-auto-resizer>
    <el-dialog v-model="dialogDescriptionVisible" title="Account Info">
      <el-descriptions :title=$store.state.CloudServiceAccountList[selectedAccountIndex].name column=1>
        <el-descriptions-item label="Access Key ID">{{$store.state.CloudServiceAccountList[selectedAccountIndex].accessKeyId}}</el-descriptions-item>
        <el-descriptions-item label="Secret Access Key">{{$store.state.CloudServiceAccountList[selectedAccountIndex].secretAccessKey}}</el-descriptions-item>
        <el-descriptions-item label="Default Region Name">
          {{$store.state.CloudServiceAccountList[selectedAccountIndex].defaultRegionName}}
        </el-descriptions-item>
      </el-descriptions>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogDescriptionVisible = false">Close</el-button>
      </span>
      </template>
    </el-dialog>
  </el-col>
</template>

<script>
import axios from "axios";

export default {
  name: "AccountTable",
  data() {
    return {
      accountTableDefaultData: [{
        name: "xxtong's AWS account",
        provider: 'aws',
        accessKeyId: 'DYBDS6WC4HKNC3UPYVPY',
        secretAccessKey: '3ivne/6738ndslokGex2Omwco+jacJj9uMQGSG',
        defaultRegionName: 'us-east-1'
      }, {
        name: "xxtong's Aliyun account",
        provider: 'aliyun',
        accessKeyId: 'DYBDS6WC4HKNC3UPYVPY',
        secretAccessKey: '3ivne/6738ndslokGex2Omwco+jacJj9uMQGSG',
        defaultRegionName: 'us-east-1'
      }, {
        name: "xxtong's KNative account",
        provider: 'KNative',
        accessKeyId: 'DYBDS6WC4HKNC3UPYVPY',
        secretAccessKey: '3ivne/6738ndslokGex2Omwco+jacJj9uMQGSG',
        defaultRegionName: 'us-east-1'
      }],
      selectedAccountIndex: 1,
      dialogDescriptionVisible: false,
      getAccountFunctionUrl: "http://127.0.0.1:5000/list/"
    }
  },
  methods: {
    // TODO: Delete account in database
    // TODO: Add new account
    showAccountDetail(index) {
      console.log('showAccountDetail' + index)
      this.selectedAccountIndex = index
      this.dialogDescriptionVisible = true
    },
    deleteAccount(index) {
      console.log('deleteAccount' + index)
      this.accountTableData.splice(index, 1)
    },
    showDetail(name, provider) {
      console.log('provider:' + provider)
      axios.get(
          this.getAccountFunctionUrl + provider
      ).then(
          res => {
            console.log(res)
            let funcList = []
            if (provider == 'aws') {
              funcList = JSON.parse(res.data.payload).Functions
            } else if(provider == 'aliyun') {
              res.data.payload.functions.forEach((func) => {
                funcList.push({
                  FunctionName: func['functionName'],
                  Runtime: func['runtime'],
                  Description: func['description'],
                  LastModified: func['lastModifiedTime'],
                  Version: 'unsupported',
                })
              })
            }
            this.$store.commit('initFunctionList', funcList)
            console.log(name)
            console.log(funcList)
            this.$router.push({
                  name: 'AccountInfo',
                  // TODO: we should refactor this
                  query: {
                    accountName: name,
                    provider: provider
                  }
                }
            );
          }
      )
    }
  }
}
</script>

<style scoped>
.el-icon {
  margin-left: 3px;
}
</style>