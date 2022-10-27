<template>
  <el-main>
    <el-header>Get Started</el-header>
    <el-row>
      <h2>Username</h2>
      <el-input v-model="username" placeholder="Please input your username" />
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
import axios from "axios";
import {ElMessage} from "element-plus";

export default {
name: "Login",
  data() {
  return {
    username: '',
    password: '',
    loginUrl: 'http://127.0.0.1:5000/login',
    getCostUrl: 'http://127.0.0.1:5000/get_bill'
  }
  },
  methods: {
    onClick() {
      let postData = {
        "user": this.username,
        "password": this.password
      }
      axios.post(this.loginUrl, postData, {
        'Content-Type': 'application/json'
      }).then(
          res => {
            console.log(res)
            if (res.status != 200) {
              ElMessage.error(res.data.msg)
            } else {
              ElMessage.success('Succesfully login!')
              console.log(res.data.payload.account_keys)
              this.$store.commit('clearAccount')
              res.data.payload.account_keys.forEach((account) => {
                    let provider = account[1]
                    let access_key = account[2]
                    let secret_key = account[3]
                    let amortized_cost = 'unknown'
                    axios.post(this.getCostUrl, {"provider": provider}, {
                      'Content-Type': 'application/json'
                    }).then( res => {
                      console.log(res)
                      if (res.status == 200) {
                        let tmp = res.data["ResultsByTime"][0]["Total"]["AmortizedCost"]
                        amortized_cost = "$" + Number(tmp["Amount"]).toFixed(2)
                        console.log("set amortized_cost to: " + amortized_cost)
                      }
                      const accountDict = {
                        name: this.username + "'s " + provider + " account",
                        provider: provider,
                        accessKeyId: access_key,
                        secretAccessKey: secret_key,
                        defaultRegionName: 'unknown',
                        amortizedCost: amortized_cost
                      }
                      console.log(accountDict)
                      this.$store.commit('addAccount', accountDict)
                    })
                  }
              )
              this.$router.push({
                    name: 'Home'
                  }
              );
            }
          }
      ).catch(
          err => {
            console.log(err)
            ElMessage.error(err)
          }
      )
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