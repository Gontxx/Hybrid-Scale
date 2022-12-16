<template>
  <el-dialog :title="taskType + ' Task Config'">
    <el-form
        :model="config"
        v-loading="loading"
        element-loading-text="Uploading..."
        v-if="stage <= 2"
    >
      <el-form-item label="Data">
        <el-select
            v-model="config.dataSourceType"
            placeholder="please select your data source"
            style="width: 300px"
        >
          <el-option label="Static File" value="file" />
          <el-option label="Database" value="database" />
        </el-select>
      </el-form-item>

      <el-form-item label="Code">
        <el-upload
            class="upload-demo"
            action=""
            accept=".h5"
            :auto-upload="false"
            :limit=limits
        >
          <el-button color="#0d305e">Click to upload</el-button>
          <template #tip>
            <div class="el-upload__tip">
              upload the {{ this.taskType.toLowerCase() }} model
            </div>
          </template>
        </el-upload>
      </el-form-item>

      <el-form-item label="Budget">
        <el-slider v-model="config.budget_limit" show-input/>
      </el-form-item>

      <el-form-item label="Time Limit">
        <el-slider v-model="config.time_limit" show-input/>
      </el-form-item>

      <el-form-item label="Service Location">
        <el-select
            v-model="config.serviceLocation"
            placeholder="please select your preferred deployment location"
            style="width: 500px"
            @change="getLocationInstance"
        >
          <el-option label="Beijing" value="beijing" />
          <el-option label="Shanghai" value="shanghai" />
        </el-select>
      </el-form-item>

    </el-form>
    <el-row v-if="stage==2"
            v-loading="loading"
            element-loading-text="Estimating...">
      <cluster-info-table :instance_list="availableInstanceList"></cluster-info-table>
    </el-row>
    <el-row v-if="stage==3">
      <el-form-item label="Test Input Image File">
        <el-upload
            class="upload-demo"
            ref="upload"
            action=""
            accept=".jpg,.zip, .png"
            :auto-upload="false"
            :limit=limits
            :http-request="httpRequest"
            v-loading="loading"
        >
          <el-button color="#0d305e">Click to upload</el-button>
          <template #tip>
            <div class="el-upload__tip">
              upload the image or dataset to implement {{ this.taskType.toLowerCase() }}
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-row>
    <el-row v-if="stage==3"
            v-loading="loading"
            element-loading-text="Deploying...">
      <el-col :sm="8" :lg="8">
        <el-result
            icon="success"
            :title="options.at(0).instance_type"
            :sub-title="options.at(0).name"
        >
          <template #extra>
            <p class="text" v-html="getDetail(options.at(0))">
            </p>
            <el-button color="#0d305e" @click="deploy(0)">
              Deploy
            </el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="8" :lg="8">
        <el-result
            icon="warning"
            :title="options.at(1).instance_type"
            :sub-title="options.at(1).name"
        >
          <template #extra>
            <p class="text" v-html="getDetail(options.at(1))">
            </p>
            <el-button color="#0d305e" @click="deploy(1)">
              Deploy
            </el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="8" :lg="8">
        <el-result
            icon="error"
            :title="options.at(2).instance_type"
            :sub-title="options.at(2).name"
        >
          <template #extra>
            <p class="text" v-html="getDetail(options.at(2))">
            </p>
            <el-button color="#0d305e" disabled>
              Deploy
            </el-button>
          </template>
        </el-result>
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer" v-if="stage<=2">
        <el-button>Cancel</el-button>
        <el-button color="#0d305e" @click="uploadAndDeploy">
          Run Estimation
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import axios from "axios";
import {ElMessage} from "element-plus";
import ClusterInfoTable from "@/components/tables/ClusterInfoTable";


export default {
name: "TaskDeployDialog",
  components: {ClusterInfoTable},
  data() {
    return {
      config: {
        dataSourceType: '',
        serviceLocation: '',
        budget_limit: '',
        time_limit: '',
      },
      loading: false,
      getEstimationUrl: 'http://127.0.0.1:5000/get_estimation',
      getLocationInstanceUrl: 'http://127.0.0.1:5000/list_instance',
      execUrl: 'http://127.0.0.1:5000/execute_task',
      limits: 1,
      dataFromDB: false,
      availableInstanceList: [],
      stage: 1,
      instance_index: 0,
      options: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
    }
  },
  methods: {
    uploadAndDeploy() {
      this.loading = true
      let formData = new FormData()
      formData.append('data_source_type', this.config.dataSourceType)
      formData.append('provider', this.config.provider)
      formData.append('qos_limit', this.config.qos_limit)
      axios.post(
          this.getEstimationUrl, formData, {
            headers: {'content-type': 'multipart/form-data',
              'Access-Control-Allow-Origin': '*'}
          }
      ).then(
          res => {
            console.log(res)
            ElMessage.success(res.data.msg)
            this.options = res.data.payload
            this.loading = false
            this.stage = 3
          }
      ).catch(
          err => {
            console.log(err)
            ElMessage.error(err.response.data.msg)
            this.loading = false
          }
      )
    },
    setDataSource(dataSourceType) {
      console.log("setDataSource")
      if (dataSourceType == 'database') {
        this.dataFromDB = true
      }
    },
    handleExceed(files, uploadFiles) {
      ElMessage.warning(
          `The limit is ${this.limits}, you selected ${files.length} files this time, add up to ${
              files.length + uploadFiles.length
          } totally`
      )
    },
    getLocationInstance(location) {
      console.log("get changed!")
      let aws_access_key_id, aws_secret_access_key, region_name
      if (location == 'beijing') {
        aws_access_key_id = 'AKIAR6WC4HKNAVH7QP4K'
        aws_secret_access_key = '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'
        region_name = 'us-east-1'
      } else if (location == 'shanghai') {
        aws_access_key_id = 'AKIAR6WC4HKNDMFVVRFY'
        aws_secret_access_key = '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'
        region_name = 'us-west-1'
      }
      let postData = {
        "provider": 'aws',
        "aws_access_key_id": aws_access_key_id,
        "aws_secret_access_key": aws_secret_access_key,
        "region_name": region_name
      }
      console.log(postData)
      axios.post(this.getLocationInstanceUrl, postData, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }).then(
          res => {
            console.log(res)
            this.availableInstanceList = res.data.payload
            this.stage = 2
          }
      ).catch(
          err => {
            console.log(err)
            ElMessage.error(err)
          }
      )
    },
    getDetail(option) {
      let cnt_node = option.cnt_node
      let estimated_qos = option.estimated_qos
      return `node count: ${cnt_node}<br>estimated cost: ${estimated_qos}<br>`
    },
    deploy(index) {
      this.loading = true
      this.instance_index = index
      this.$refs.upload.submit()
    },
    httpRequest(params) {
      this.loading = true
      let formData = new FormData()
      formData.append('file', params.file)
      formData.append('cluster_name', this.options.at(this.instance_index).name)
      formData.append('task_type', this.taskType.toLowerCase())
      console.log(formData)
      axios.post(this.execUrl, formData, {
        headers: {'content-type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'}
      }).then(
          res => {
            this.loading = false
            console.log(res)
            ElMessage.success(res.data.msg)
            this.$router.push({
                  name: 'Services'
                }
            );
          }
      ).catch(
          err => {
            console.log(err)
            ElMessage.error(err)
            this.loading = false
          }
      )
    },
  },
  props: {
    taskType: {
      type: String,
      required: true
    }
  }

}
</script>

<style scoped>
</style>