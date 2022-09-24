<template>
  <el-main>
    <el-header>Get Started</el-header>
    <el-row>
      <h2>Work Email</h2>
      <el-input v-model="email" placeholder="Please input your work email" />
      <h2>Password</h2>
      <el-input
          v-model="password"
          type="password"
          placeholder="Please input your password"
          show-password
      />
      <h2><el-button color="#0d305e" :onclick="onClick">Next</el-button></h2>
    </el-row>
  </el-main>
</template>

<script>
export default {
name: "Login",
  data() {
  return {
    email: '',
    password: ''
  }
  },
  methods: {
    onClick() {
      this.$router.push({
            name: 'Home'
          }
      );
    }
  }
}
</script>

<style scoped>
.el-header {
  font-size: 40px;
  font-weight: bold;
  padding-left: 0;
}
.el-main {
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  text-align: left;
}
.el-row {
  max-width: 70%;
}
</style>