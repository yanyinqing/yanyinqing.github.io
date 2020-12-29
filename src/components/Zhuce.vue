<template>
  <div class="zhuce">
    <div class="zhuce1">
      <span>洋码头用户注册</span>
    </div>
    <div class="zhuce2">
      <br>
      <div >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户名:<el-input placeholder="请输入用户名" id="loginName"  class="zhuce2-1" v-model="input2"></el-input>
      </div>
      <br>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码:<el-input id="loginPsd" placeholder="请输入密码" class="zhuce2-2"  v-model="input3" show-password></el-input>
      </div>
      <br>
      <div>
        确认密码:<el-input placeholder="请再次输入密码" class="zhuce2-2" id="loginPsd2"  v-model="input4" show-password></el-input>
      </div>
    </div>
    <div class="zhuce3">
      <el-button type="success" @click="register" plain>确认注册</el-button>
      <el-button type="primary" @click="backloading" plain>前往登录</el-button>
      <el-button type="info" @click="quxiao" plain>取消</el-button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  },
  methods: {
    quxiao () {
      this.$router.push('./First')
    },
    backloading () {
      this.$router.push('./Loading')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .zhuce{
    width: 500px;
    height: 400px;
    border: #cc3333;
    background-color: #f8f8f8;
    margin: 0 auto;
    position: relative;
    top: 200px;
  }
  .zhuce1{
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: #cc3333;
    position: relative;
    top: 20px;
  }
  .zhuce2{
    position: relative;
    top: 50px;
    left: 70px;
  }
  .zhuce2-1{
    width: 300px;
  }
  .zhuce2-2{
    width: 300px;
  }
  .zhuce3{
    position: relative;
    top: 80px;
    left: 110px;
  }

</style>
