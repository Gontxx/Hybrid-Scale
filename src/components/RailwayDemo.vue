<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item :to="{ path: '/railway-demo' }">Railway Demo</el-breadcrumb-item>
      <el-breadcrumb-item>Available Task Type</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="main-content">
      <SubHeader content-name="Available Task Type"></SubHeader>
      <el-row :gutter="30">
        <el-col :span="8" :offset="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
                :src="driver_pic"
                class="image"
            />
            <div style="padding: 14px">
              <span>Driver Pose Estimation</span>
              <div class="bottom">
                <el-button color="#0d305e" @click="classificationDialogDialogVisible = true">Get Started</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <img
                :src="ocr_pic"
                class="image"
            />
            <div style="padding: 14px">
              <span>Optical Character Recognition</span>
              <div class="bottom">
                <el-button color="#0d305e" @click="ocrTaskDialogVisible = true">Get Started</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
    <RailwayDemoTaskDeployDialog v-model="classificationDialogDialogVisible" task-type="Classification"></RailwayDemoTaskDeployDialog>
    <RailwayDemoTaskDeployDialog v-model="ocrTaskDialogVisible" task-type="OCR"></RailwayDemoTaskDeployDialog>

  </el-main>
</template>

<script>
import SubHeader from "@/components/SubHeader";
import RailwayDemoTaskDeployDialog from "@/components/dialogs/RailwayDemoTaskDeployDialog";

export default {
  name: "RailwayDemo",
  components: {SubHeader, RailwayDemoTaskDeployDialog},
  data(){
    return{
      ocr_pic: require('@/assets/ocr.jpg'),
      driver_pic: require('@/assets/driver.jpg'),
      classificationDialogDialogVisible: false,
      ocrTaskDialogVisible: false
    }
  }
}
</script>

<style scoped>
.bottom {
  margin-top: 13px;
  line-height: 12px;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 100%;
  display: block;
}
</style>