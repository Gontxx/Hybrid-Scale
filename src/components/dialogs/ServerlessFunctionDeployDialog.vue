<template>
  <el-dialog title="Serverless Function Project Config">
    <el-form :model="config" v-loading="loading" element-loading-text="Uploading...">
      <el-form-item label="Function File">
        <el-upload
            class="upload-demo"
            ref="upload"
            drag
            action=""
            accept=".py,.zip"
            :auto-upload="false"
            :limit=limits
            :on-change="setServiceConfig"
            :http-request="httpRequest"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              upload the python or zip file which contains your function
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="Provider">
        <el-select v-model="config.provider" placeholder="please select your provider" :disabled="configSetByZip">
          <el-option label="AWS" value="aws" />
          <el-option label="Aliyun" value="aliyun" />
        </el-select>
      </el-form-item>
      <el-form-item label="Service Name">
        <el-input
            placeholder="please input your service name"
            v-model="config.serviceName"
            :disabled="configSetByZip"
        />
      </el-form-item>
      <el-form-item label="Service Function">
        <el-input
            placeholder="please input your function name"
            v-model="config.functionName"
            :disabled="configSetByZip"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false;">Cancel</el-button>
        <el-button color="#0d305e" @click="uploadAndDeploy"
        >Deploy</el-button
        >
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
        provider: '',
        serviceName: '',
        functionName: ''
      },
      loading: false,
      uploadUrl: 'http://127.0.0.1:5000/upload',
      limits: 1,
      configSetByZip: false,
    }
  },
  methods: {
    uploadAndDeploy() {
      this.loading = true
      this.$refs.upload.submit()
    },
    httpRequest(params) {
      var formData = new FormData()
      formData.append('file', params.file)
      if (this.configSetByZip == false) {
        formData.append('service_name', this.config.serviceName)
        formData.append('provider', this.config.provider)
        formData.append('function_name', this.config.functionName)
      }
      axios.post(
          this.uploadUrl, formData, {
            headers: {'content-type': 'multipart/form-data'}
          }
      ).then(
          res => {
            console.log(res)
            ElMessage.success(res.data.msg)
            this.loading = false
          }
      ).catch(
          err => {
            console.log(err)
            ElMessage.error(err.response.data.msg)
            this.loading = false
          }
      )
    },
    setServiceConfig(uploadFile) {
      console.log(uploadFile)
      if (uploadFile.raw.type == 'application/zip') {
        this.configSetByZip = true
      } else {
        this.configSetByZip = false
        this.config.serviceName = uploadFile.name.split('.')[0]
        console.log('[setServiceConfig]: ' + this.config.serviceName)
      }
    },
    handleExceed(files, uploadFiles) {
      ElMessage.warning(
          `The limit is ${this.limits}, you selected ${files.length} files this time, add up to ${
              files.length + uploadFiles.length
          } totally`
      )
    }
  },
}
</script>

<style scoped>

</style>