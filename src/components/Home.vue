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
          <el-button color="#0d305e" @click="dialogFormVisible = true">
            Create a Demo Project
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
    <el-dialog v-model="dialogFormVisible" title="Service Config">
      <el-form v-loading="loading" :model="config">
        <el-form-item label="Function File">
          <el-upload
              class="upload-demo"
              ref="upload"
              drag
              action=""
              accept=".py"
              :auto-upload="false"
              :limit=limits
              :on-change="setServiceName"
              :http-request="httpRequest"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                upload the python file which contains your function
              </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="Provider">
          <el-select v-model="config.provider" placeholder="please select your provider">
            <el-option label="AWS" value="aws" />
            <el-option label="Aliyun" value="aliyun" />
          </el-select>
        </el-form-item>
        <el-form-item label="Service Name">
          <el-input
              placeholder="please input your service name"
              v-model="config.serviceName"
          />
        </el-form-item>
        <el-form-item label="Service Function">
          <el-input
              placeholder="please input your function name"
              v-model="config.functionName"
          />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false; loading = false">Cancel</el-button>
        <el-button color="#0d305e" @click="uploadAndDeploy"
        >Deploy</el-button
        >
      </span>
      </template>
    </el-dialog>
  </el-main>
</template>

<script>
import {ElMessage} from "element-plus"
import axios from 'axios'
export default {
  name: "Home",
  data(){
    return{
      loading: false,
      hello_world_pic:"https://img1.sycdn.imooc.com/5e8d447c0001fc0f05000266.jpg",
      dialogFormVisible: false,
      config: {
        provider: '',
        serviceName: '',
        functionName: ''
      },
      uploadUrl: 'http://127.0.0.1:5000/upload',
      limits: 1,
      pic:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F75%2F16%2F5bf8a084d5fe9_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664804616&t=85df95f9196c99b6df28a831b3a683e9"
    }
  },
  methods: {
    uploadAndDeploy() {
      this.loading = true
      this.$refs.upload.submit()
      this.loading = false
    },
    httpRequest(params) {
      console.log(params.file)
      var formData = new FormData()
      formData.append('file', params.file)
      formData.append('service_name', this.config.serviceName)
      formData.append('provider', this.config.provider)
      formData.append('function_name', this.config.functionName)
      axios.post(
          this.uploadUrl, formData, {
            headers: {'content-type': 'multipart/form-data'}
          }
      ).then(
        res => {
          console.log(res)
          ElMessage.success(res.data)
        }
      ).catch(
          err => {
            console.log(err)
            ElMessage.error(err)
          }
      )
    },
    setServiceName(uploadFile) {
      //.py
      this.config.serviceName = uploadFile.name.split('.')[0]
      console.log('[setServiceName]: ' + this.config.serviceName)
    },
    handleExceed(files, uploadFiles) {
      ElMessage.warning(
          `The limit is ${this.limits}, you selected ${files.length} files this time, add up to ${
              files.length + uploadFiles.length
          } totally`
      )
    }
  }
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
</style>