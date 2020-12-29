<template>
  <div class="Title">
      <div class="title1">
        <div class="title1-1 title1-1ziti">
          <div class="title1-1-1">
            <el-button type="text" @click="enterloading"  class="btn title1-1ziti change">登录</el-button>
            <el-button type="text" @click="enterzhuce" class="btn title1-1ziti change">注册</el-button>
            <el-button type="text" @click="enterbuycar"  class="btn title1-1ziti change">购物车</el-button>
            <el-button type="text"  class="btn title1-1ziti change">我的订单</el-button>
            <el-button type="text"  class="btn title1-1ziti change">个人中心</el-button>
            规则&公告
          </div>
          <div class="title1-1-2">Hi,欢迎来到洋码头！&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;我是买手</div>
        </div>
      </div>
      <div class="title2">
        <div class="title2-1">
          <div class="title2-1-1">
            <img src="../assets/yangmatoulogo.png" alt="">
          </div>
          <div class="title2-1-2 ui action input">
                <input type="text" class="" id="input" placeholder="搜索...">
                <el-button type="danger" icon="el-icon-search"></el-button>
          </div>
          <div class="title2-1-3">
            <img src="../assets/erweima.png" alt="">
          </div>
        </div>
        <div class="title2-2 center">
            <el-button type="text"  class="btn title2-2ziti change">首页</el-button>
            <el-button type="text"  class="btn title2-2ziti change">今日限时抢</el-button>
            <el-button type="text"  class="btn title2-2ziti change">洋货集</el-button>
            <div class="dropdown">
              <router-link class="ziti" to="/Allclass">
                <span class="title2-2ziti change dropbtn">
                    分类
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
              </router-link>
                <Menu class="dropdown-content"></Menu>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  // name: 'title',
  components: {
    Menu
  },
  data () {
    return {}
  },
  methods: {
    handleCommand (command) {
      this.$message('click on item' + command)
    },
    enterloading () {
      this.$router.push('./Loading')
    },
    enterzhuce () {
      this.$router.push('./Zhuce')
    },
    enterbuycar () {
      this.$router.push('./Buycar')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title1{
    height: 30px;
    background-color: #f8f8f8;
  }
  .title1-1{
    width: 1200px;
    height: 30px;
    margin: 0 auto;
  }
  .title1-1ziti{
    font-size: 14px;
    font-family: "微软雅黑";
    color: #646464;
    line-height: 30px;
  }
  .btn{
    background-color: transparent;/* 背景色透明 */
    border: 0px;
    }
  .title1-1-1{
    width: 370px;
    height: 30px;
    position: relative;
    left: 830px;
    top:-10px;
  }
  .title1-1-2{
    width: 370px;
    height: 30px;
    position: relative;
    left: 5px;
    top: -30px;
  }
  .title2{
    width: 1200px;
    height: 216px;
    /* background-color: rgb(203, 207, 207); */
    margin: 0 auto;
  }
  .title2-1-1{
    position: relative;
    top:40px;
  }
  .title2-1-2{
      position: relative;
      left: 375px;
  }
  #input{
    width: 390px;
    border: 1px solid red;
  }
  .title2-1-3{
    position: relative;
    left:1030px;
    top: -105px
  }
  .title2-2{
    width: 1200px;
    height: 48px;
    /* background-color:aqua; */
    position: relative;
    top: -94px;
  }
  .title2-2ziti{
    font-size: 20px;
    font-family: "微软雅黑";
    font-weight: 700;
    color: #383838;
    line-height: 30px;
    padding: 0 20px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .change{
    transition:0s;
  }
  .change:hover{
    color: #cc3333;
  }
  .dropbtn {
    padding: 16px;
    border: none;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}
</style>
