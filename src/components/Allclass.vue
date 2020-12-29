<template>
  <div class="allclass">
      <div class="allclass1">
          <router-link to="/First">
              <span class="ziti">
                  首页
                  <i class="el-icon-arrow-right"></i>
              </span>
          </router-link>
            <span class="ziti red">
                  分类
            </span>
      </div>
      <div class="allclass2">
          <router-link class="ziti" :to="{path:'/Class',query:{name:1}}">化妆品</router-link>
          <router-link class="ziti" :to="{path:'/Class',query:{name:2}}">箱包</router-link>
          <router-link class="ziti" :to="{path:'/Class',query:{name:3}}">运动</router-link>
          <router-link class="ziti" :to="{path:'/Class',query:{name:4}}">家电</router-link>
          <router-link class="ziti" :to="{path:'/Class',query:{name:5}}">钟表</router-link>
          <router-link class="ziti" :to="{path:'/Class',query:{name:6}}">男士护肤</router-link>
          <router-link class="ziti" :to="{path:'/Class',query:{name:7}}">食品</router-link>
          <router-link class="ziti" :to="{path:'/Class',query:{name:8}}">母婴</router-link>
      </div>
    <div class="allclass3">
      <table class="allclass3" border="1">
        <tr v-for="tr in n" :key="tr" >
          <td v-for="td in 5" :key="td">
            <!-- {{tr}}-{{td}} -->
            <Single class="Single" :id="tr*5-1+td"/>
          </td>
        </tr>
      </table>
    </div>
    <div class="allclass4">
      <button @click='jiazai' class="fluid ui button">
        <font style="vertical-align: inherit;">
          <font v-if="this.n!=11" style="vertical-align: inherit;">
            点击加载更多
          </font>
          <font v-if="this.n==11" style="vertical-align: inherit;">
            没有更多了
          </font>
        </font>
      </button>
    </div>
  </div>
</template>

<script>
import Single from './Single'

export default {
  components: {
    Single
  },
  data () {
    return {
      n: 3
    }
  },
  methods: {
    jiazai: function () {
      if (this.n < 11) {
        this.n += 2
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .allclass1{
      width: 1200px;
      height: 50px;
      margin: 0 auto;
  }
  .allclass2{
      width: 1200px;
      height: 50px;
      margin: 0 auto;
      padding: 0 120px;
  }
  .allclass3{
    width: 1200px;
    position: relative;
    margin: 0 auto;
  }
  td{
    width: 240px;
    height: 320px;
    background: #f8f8f8;
  }
  .allclass4{
    width: 1200px;
    height: 50px;
    position: relative;
    top: 80px;
    margin: 0 auto;
  }
  .Single{
    height: 320px;
  }
  .ziti{
    font-size: 20px;
    font-family: "微软雅黑";
    font-weight: 700;
    color: #383838;
    transition:0s;
    line-height: 30px;
    padding: 0 30px;
  }
  .ziti:hover{
    color: #cc3333;
  }
    .red{
      color: #cc3333;
    }
</style>
