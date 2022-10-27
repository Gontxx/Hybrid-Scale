<template>
  <el-dialog title="VM Task Config">
    <el-form :model="config"  v-loading="loading" :element-loading-text="stage">
      <el-form-item label="Task Yaml">
        <el-upload
            class="upload-demo"
            drag
            action=""
            accept=".yaml"
            :limit=limits
            :http-request="httpRequest"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              upload the yaml config of your task
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-row v-if="showOption" v-loading="loading" :element-loading-text="stage">
      <el-col :sm="8" :lg="8">
        <el-result
            icon="success"
            :title="options.at(0).at(0)"
            :sub-title="options.at(0).at(1)"
        >
          <template #extra>
            <p class="text" v-html="getDetail(options.at(0))">
            </p>
            <el-button color="#0d305e" @click="deploy">
              Deploy
            </el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="8" :lg="8">
        <el-result
            icon="warning"
            :title="options.at(1).at(0)"
            :sub-title="options.at(1).at(1)"
        >
          <template #extra>
            <p class="text" v-html="getDetail(options.at(1))">
            </p>
            <el-button color="#0d305e" @click="deploy">
              Deploy
            </el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="8" :lg="8">
        <el-result
            icon="error"
            title="KNative"
            sub-title="Not Supported Yet"
        >
        </el-result>
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="this.loading = false;">Cancel</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import axios from "axios";
import {ElMessage} from "element-plus";


export default {
name: "ServerlessFunctionForm",
  data() {
    return {
      config: {
        clusterName: 'hello',
      },
      loading: false,
      uploadUrl: 'http://127.0.0.1:5000/upload_job',
      launchUrl: 'http://127.0.0.1:5000/create_instance',
      limits: 1,
      configSetByZip: false,
      showOption: false,
      formData: null,
      options: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
      stage: ''
    }
  },
  methods: {
    deploy() {
      this.loading = true
      this.stage = 'Deploying...'
      axios.post(this.launchUrl, this.formData, {
        headers: {'content-type': 'multipart/form-data'}
      }).then(
          res => {
            this.loading = false
            console.log(res)
            ElMessage.success(res.data.msg)
          }
      )
    },
    httpRequest(params) {
      this.formData = new FormData()
      this.formData.append('file', params.file)
      this.formData.append('cluster_name', this.config.clusterName)
      this.stage = 'Uploading...'
      this.loading = true
      axios.post(
          this.uploadUrl, this.formData, {
            headers: {'content-type': 'multipart/form-data'}
          }
      ).then(
          res => {
            console.log(res)
            ElMessage.success(res.data.msg)
            this.options = res.data.payload
            this.loading = false
            this.showOption = true
          }
      ).catch(
          err => {
            console.log(err)
            ElMessage.error(err.response.data.msg)
            this.loading = false
          }
      )
    },
    handleExceed(files, uploadFiles) {
      ElMessage.warning(
          `The limit is ${this.limits}, you selected ${files.length} files this time, add up to ${
              files.length + uploadFiles.length
          } totally`
      )
    },
    getDetail(option) {
      let vcpus = option.at(2)
      let accelerators = option.at(3)
      let cost = option.at(4)
      return `vcpus: ${vcpus}<br>accelerators: ${accelerators}<br> cost: ${cost}<br>`
    }
  },
}
</script>
<style scoped>
::v-deep .el-result__extra {
  margin-top: 0;
}
</style>