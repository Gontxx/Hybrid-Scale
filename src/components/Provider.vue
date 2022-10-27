<template>
  <el-main>
    <el-breadcrumb :separator-icon="separator">
      <el-breadcrumb-item>Overview</el-breadcrumb-item>
      <el-breadcrumb-item>{{ provider }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class="main-content">
      <main-header :content-name="provider + appendix"></main-header>
      <sub-header content-name="Serverless Function API"></sub-header>
      <el-row>
        <ul>
          <li v-for="api in supportedServiceDict[provider].supportedServerlessAPI" :key="api">{{api}}</li>
        </ul>
      </el-row>
      <sub-header content-name="Serverless Function Events"></sub-header>
      <el-row>
        <ul>
          <li v-for="event in supportedServiceDict[provider].supportedServerlessEvents" :key="event">{{event}}</li>
        </ul>
      </el-row>
      <sub-header content-name="Virtual Machine"></sub-header>
      <el-row>
        <ul>
          <li v-for="vm in supportedServiceDict[provider].virtualMachine" :key="vm">{{vm}}</li>
        </ul>
      </el-row>
      <sub-header content-name="Storage"></sub-header>
      <el-row>
        <ul>
          <li v-for="storage in supportedServiceDict[provider].storage" :key="storage">{{storage}}</li>
        </ul>
      </el-row>
    </el-col>
  </el-main>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import SubHeader from "@/components/SubHeader";
import MainHeader from "@/components/MainHeader";

export default {
  name: "Provider",
  components: {SubHeader, MainHeader},
  data() {
    return {
      separator: ArrowRight,
      appendix: " Provider Overview",
      supportedServiceDict: {
        aws: {
          virtualMachine: ['EC2'],
          supportedServerlessAPI: [
            'Deploy', 'Deploy Function', 'Invoke', 'Login', 'Logs', 'Remove',
            'Plugin List', 'Plugin Search', 'Plugin Install', 'Plugin Uninstall',
            'Print'
          ],
          supportedServerlessEvents: [
            'HTTP', 'Timer', 'Queue Storage', 'Service Bus', 'Event Hubs',
            'Blob Storage', 'Other Bindings'
          ],
          storage: ['S3']
        },
        aliyun: {
          virtualMachine: ['ECS'],
          supportedServerlessAPI: [
            'Create', 'Install', 'Package', 'Deploy',
            'Info', 'Invoke', 'Login', 'Logs', 'Remove',
          ],
          supportedServerlessEvents: [
            'HTTP', 'OSS'
          ],
          storage: ['NAS', 'OSS']
        },
        knative: {
          virtualMachine: ['EC2'],
          supportedServerlessAPI: [
            'Create', 'Install', 'Deploy', 'Info', 'Invoke', 'Remove',
          ],
          supportedServerlessEvents: [
            'Custom', 'Kafka', 'Google Cloud Pubsub', 'AWS SQS', 'Cron'
          ],
          storage: ['S3']
        }
      }
    }
  },
  props: {
    provider: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
li {
  float: left;
  width: 200px;
  text-align: left;
}
</style>