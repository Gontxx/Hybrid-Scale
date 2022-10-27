<template>
  <el-main>
    <el-header class="header">
      Welcome to WeCloud
    </el-header>
    <el-row class = "playground">
      <el-card>
        <el-header class="sub-header">
          <span> Run HelloWorld </span>
        </el-header>
        <el-row>
          <img
              :src="hello_world_pic"
              class="image"
          />
        </el-row>
        <el-row>
          <el-button color="#0d305e" @click="serverlessFunctionDialogVisible = true">
            Deploy a Serverless Function Demo Project
            <el-icon style="margin-left: 10px;"><Notebook /></el-icon>
          </el-button>
          <el-button color="#0d305e" @click="vmTaskDialogVisible = true">
            Deploy a VM-related Demo Task
            <el-icon style="margin-left: 10px;"><Notebook /></el-icon>
          </el-button>
        </el-row>
      </el-card>
    </el-row>
    <el-row :gutter="20" class="playground module">
      <el-col :span="6">
        <el-header class="module-header">
          <span> Data Loading </span>
        </el-header>
        <el-image
            :src="pic"
            class="image"
        />
      </el-col>
      <el-col :span="6">
        <el-header class="module-header">
          <span> Model Building </span>
        </el-header>
        <el-image
            :src="pic"
            class="image"
        />
      </el-col>
      <el-col :span="6">
        <el-header class="module-header">
          <span> Model Serving </span>
        </el-header>
        <el-image
            :src="pic"
            class="image"
        />
      </el-col>
      <el-col :span="6">
        <el-header class="module-header">
          <span> Integrating </span>
        </el-header>
        <el-image
            :src="pic"
            class="image"
        />
      </el-col>
    </el-row>
    <ServerlessFunctionDeployDialog v-model="serverlessFunctionDialogVisible"></ServerlessFunctionDeployDialog>
    <VMTaskDeployDialog v-model="vmTaskDialogVisible"></VMTaskDeployDialog>
  </el-main>
</template>

<script>
import ServerlessFunctionDeployDialog from "@/components/dialogs/ServerlessFunctionDeployDialog";
import VMTaskDeployDialog from "@/components/dialogs/VMTaskDeployDialog";
export default {
  name: "Home",
  components: {ServerlessFunctionDeployDialog, VMTaskDeployDialog},
  data(){
    return{
      hello_world_pic:"https://img1.sycdn.imooc.com/5e8d447c0001fc0f05000266.jpg",
      serverlessFunctionDialogVisible: false,
      vmTaskDialogVisible: false,
      pic: require('@/assets/icon.png')
    }
  },
}
</script>

<style scoped>
.header {
  font-size: 40px;
  font-weight: bold;
}
.sub-header {
  font-size: 20px;
  font-weight: bold;
  flex-direction: column;
  justify-content: center;
  display: flex;
}
.module-header {
  font-size: 15px;
  font-weight: bold;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  display: flex;
}
.playground {
  padding-top: 20px;
}
.el-row {
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
  display: flex;
}
.el-card {
  width: 90%;
}
.module {
  padding-left: 5%;
  padding-right: 5%;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple {
  background-color: darkgray;
}
.el-image {
  height: 200px;
}
</style>