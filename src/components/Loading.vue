<template>
  <div class="Loading">
    <div class="loading1">
      <span>洋码头用户登录</span>
    </div>
    <div class="loading2">
      <div >
        用户名:<el-input id="loginName"  placeholder="请输入用户名" class="loading2-1" v-model="loginForm.username"></el-input>
      </div>
      <br>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码:
        <el-input placeholder="请输入密码" id="loginPsd" v-model="loginForm.password" class="loading2-2"   show-password></el-input>
      </div>
    </div>
    <div class="loading3">
      <el-button type="primary" @click="login" plain>登录</el-button>
      <el-button type="success" @click="enterzhuce" plain>注册</el-button>
      <el-button type="info" @click="quxiao" plain>取消</el-button>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    quxiao () {
      this.$router.push('./First')
    },
    enterzhuce () {
      this.$router.push('./Zhuce')
    },
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空')
      } else {
        this.axios({
          method: 'post',
          url: '/user/login',
          data: _this.loginForm
        }).then(res => {
          console.log(res.data)
          _this.userToken = 'Bearer ' + res.data.data.body.token
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken })
          _this.$router.push('/home')
          alert('登陆成功')
        }).catch(error => {
          alert('账号或密码错误')
          console.log(error)
        })
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Loading{
    width: 500px;
    height: 300px;
    border: #cc3333;
    background-color: #f8f8f8;
    margin: 0 auto;
    position: relative;
    top: 200px;
  }
  .loading1{
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: #cc3333;
    position: relative;
    top: 20px;
  }
  .loading2{
    position: relative;
    top: 80px;
    left: 70px;
  }
  .loading2-1{
    width: 300px;
  }
  .loading2-2{
    width: 300px;
  }
  .loading3{
    position: relative;
    top: 130px;
    left: 135px;
  }

</style>
