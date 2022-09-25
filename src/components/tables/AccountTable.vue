<template>
  <el-col>
    <el-auto-resizer>
      <el-table
          ref="multipleTableRef"
          :data="accountTableData"
          class="content"
          size="medium"
      >
        <el-table-column type="selection" />
        <el-table-column property="name" label="Name"/>
        <el-table-column property="provider" label="Provider"/>
        <el-table-column label="Operation">
          <template #default="scope">
            <el-button type="primary" @click="showAccountDetail(scope.$index)">
              View <el-icon><Search /></el-icon>
            </el-button>
            <el-button type="danger" @click="deleteAccount(scope.$index)">
              Remove <el-icon><Delete /></el-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-auto-resizer>
    <el-dialog v-model="dialogDescriptionVisible" title="Account Info">
      <el-descriptions :title=accountTableData[selectedAccountIndex].name column=1>
        <el-descriptions-item label="Access Key ID">{{accountTableData[selectedAccountIndex].accessKeyId}}</el-descriptions-item>
        <el-descriptions-item label="Secret Access Key">{{accountTableData[selectedAccountIndex].secretAccessKey}}</el-descriptions-item>
        <el-descriptions-item label="Default Region Name">
          {{accountTableData[selectedAccountIndex].defaultRegionName}}
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
export default {
  name: "AccountTable",
  data() {
    return {
      accountTableData: [{
        name: "xxtong's AWS account",
        provider: 'AWS',
        accessKeyId: 'DYBDS6WC4HKNC3UPYVPY',
        secretAccessKey: '3ivne/6738ndslokGex2Omwco+jacJj9uMQGSG',
        defaultRegionName: 'us-east-1'
      }, {
        name: "xxtong's AliCloud account",
        provider: 'AliCloud',
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
      dialogDescriptionVisible: false
    }
  },
  methods: {
    // TODO: Get accountTableData from database
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
    }
  }
}
</script>

<style scoped>
.el-button {
  font-family: Poppins;
}
.el-icon {
  margin-left: 3px;
}
</style>