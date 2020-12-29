<template>
  <div class="class">
      <div class="class1">
          <router-link to="/First">
              <span class="class1">
                  首页
                  <i class="el-icon-arrow-right"></i>
              </span>
          </router-link>
          <router-link  to="/Allclass">
            <span class="class1">
                  分类
                  <i class="el-icon-arrow-right"></i>
              </span>
            </router-link>
            <span class="class1 red">
                  {{getclass()}}
            </span>
      </div>
      <div class="like2">
        <table class="like2" border="1">
            <tr v-for="tr in 1" :key="tr" >
                <td v-for="td in 5" :key="td">
                    <Single class="Single" :id="id*7-7+tr*5-5+td" ></Single>
                </td>
            </tr>
            <tr v-for="tr in 1" :key="tr" >
                <td v-for="td in 2" :key="td">
                    <Single class="Single" :id="id*7-7+tr*10-5+td" ></Single>
                </td>
            </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Single from './Single'
import Allclass from './Allclass'

export default {
  components: {
    Single,
    Allclass
  },
  data () {
    return {
    }
  },
  created () {
    this.id = this.$route.query.name
  },
  methods: {
    getclass (id) {
      return this.$store.state.goods[this.id * 7].class
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .class{
      width: 1200px;
      height: 750px;
      background-color:#f8f8f8;
      margin: 100px auto;
    }
    .class1{
    font-size: 20px;
    font-family: "微软雅黑";
    color: #383838;
    line-height: 30px;
    padding: 0 5px;
    font-weight: 700;
    transition:0s;
    }
    .class1:hover{
      color: #cc3333;
    }
    .like2{
    width: 1200px;
    position: relative;
    top: 30px;
   }
    td{
    width: 240px;
    height: 320px;
    background: #f8f8f8;
  }
    .Single{
    height: 320px;
  }
  .red{
      color: #cc3333;
    }
</style>
