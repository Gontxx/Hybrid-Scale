<template>
  <el-main>
    <el-header class="header">
      Welcome to XScale
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
          <el-button color="#0d305e" style="font-family: Poppins" @click="dialogFormVisible = true">
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
    <el-dialog v-model="dialogFormVisible" title="Project Config">
      <el-form :model="form">
        <el-form-item label="Resources">
          <el-input v-model="form.resources" autocomplete="off" />
        </el-form-item>
        <el-form-item label="NumNodes">
          <el-input v-model="form.num_nodes" autocomplete="off" />
        </el-form-item>
        <el-form-item label="WorkDir">
          <el-input v-model="form.workdir" autocomplete="off" />
        </el-form-item>
        <el-form-item label="SetUp">
          <el-input v-model="form.setup" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Run">
          <el-input v-model="form.run" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false" style="font-family: Poppins">Cancel</el-button>
        <el-button color="#0d305e" @click="ShowProjectDetail" style="font-family: Poppins"
        >Confirm</el-button
        >
      </span>
      </template>
    </el-dialog>
  </el-main>
</template>

<script>
export default {
name: "Home",
  data(){
  return{
    hello_world_pic:"https://img1.sycdn.imooc.com/5e8d447c0001fc0f05000266.jpg",
    dialogFormVisible: false,
    form: {
      resources: 'accelerators: V100:1',
      num_nodes: 1,
      workdir: '~/torch_examples',
      setup: 'pip install torch torchvision',
      run: 'cd mnist\n' +
          '  python main.py --epochs 1'
    },
    pic:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F75%2F16%2F5bf8a084d5fe9_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664804616&t=85df95f9196c99b6df28a831b3a683e9"
  }
  },
  methods: {
    ShowProjectDetail() {
      this.$router.push('project-info');
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