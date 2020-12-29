<template>
  <div class="details">
      <div class="details1">
          <router-link to="/First">
              <span class="details1">
                  首页
                  <i class="el-icon-arrow-right"></i>
              </span>
          </router-link>
          <router-link  to="/Allclass">
              <span class="details1">
                  分类
                  <i class="el-icon-arrow-right"></i>
              </span>
          </router-link>
          <router-link :to="{path:'/Class',query:{name:Math.ceil(id/7)}}">
            <span class="details1">
                  {{getclass()}}
                  <i class="el-icon-arrow-right"></i>
            </span>
          </router-link>
            <span class="details1 red">
                  {{gettitlemini()}}
            </span>
      </div>
      <div class="details2">
        <div class="details2-1">
          <div class="details2-1-1">
            <img class="img1" :src="geturl(n)" alt="">
          </div>
          <div class="details2-1-2">
            <el-button @click="change(a)" type=""><img class="img2" :src="geturl(1)" alt=""></el-button>
            <el-button @click="change(b)" type=""><img class="img2" :src="geturl(2)" alt=""></el-button>
            <el-button @click="change(c)" type=""><img class="img2" :src="geturl(3)" alt=""></el-button>
            <el-button @click="change(d)" type=""><img class="img2" :src="geturl(4)" alt=""></el-button>
          </div>
        </div>
        <div class="details2-2">
          <div class="details2-2-1">
            {{gettitle(id)}}
          </div>
          <div class="details2-2-2">
            价格：{{getprice(id)}}
          </div>
          <div class="details2-2-3">
            配送方式：境外发货
          </div>
          <div class="details2-2-3">
            运费：买手承担
          </div>
          <div class="details2-2-4">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" >
            </el-input-number>
          </div>
          <div class="details2-2-5">
            <el-button type="danger" plain>
              <em class="el-icon-shopping-cart-2"></em>
              加入购物车
              </el-button>
          </div>
          <div class="details2-2-6">
            <el-button @click="enterbuycar" type="danger">
              <em class="el-icon-shopping-cart-full"></em>
              前往购物车
              </el-button>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import Allclass from './Allclass'

export default {
  components: {
    Allclass
  },
  data () {
    return {
      n: 1,
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      num: 1
    }
  },
  created () {
    this.id = this.$route.query.name
  },
  methods: {
    gettitlemini (id) {
      return this.$store.state.goods[this.id].titlemini
    },
    getclass (id) {
      return this.$store.state.goods[this.id].class
    },
    gettitle (id) {
      return this.$store.state.goods[this.id].title
    },
    getprice (id) {
      return '¥' + this.$store.state.goods[this.id].price
    },
    geturl (n) {
      if (n === 1) {
        return this.$store.state.goods[this.id].p1
      } else if (n === 2) {
        return this.$store.state.goods[this.id].p2
      } else if (n === 3) {
        return this.$store.state.goods[this.id].p3
      } else if (n === 4) {
        return this.$store.state.goods[this.id].p4
      }
    },
    change (m) {
      this.n = m
    },
    handleChange (value) {
      console.log(value)
    },
    enterbuycar () {
      this.$router.push('./Buycar')
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .details{
      width: 1000px;
      height: 600px;
      background-color:#f8f8f8;
      margin: 100px auto;
    }
    .details1{
    font-size: 16px;
    font-family: "微软雅黑";
    color: #383838;
    line-height: 30px;
    padding: 0 5px;
    }
    .details1:hover{
      color: #cc3333;
    }
    .details2-1{
      width: 500px;
      height: 570px;
      position: relative;
      left: 30px;
    }
    .details2-1-1{
      position: relative;
      left: 50px;
      top: 20px;
    }
    .details2-1-2{
      position: relative;
      left: 7px;
      top: 50px;
    }
    .img1{
      width: 400px;
      height: 400px;
    }
    .img2{
      width: 70px;
      height: 70px;
      position: relative;
    }
    .details2-2{
      width: 380px;
      height:500px;
      position: relative;
      left: 560px;
      top: -550px;
    }
    .details2-2-1{
      width: 380px;
      height: 80px;
      position: relative;
      top: 30px;
      font-size: 20px;
      font-family: "微软雅黑";
      font-weight: 700;
      color: #383838;
      line-height: 30px;
      padding: 0 5px;
    }
    .details2-2-2{
      width: 200px;
      height: 30px;
      position: relative;
      top: 100px;
      left: 20px;
      font-size: 20px;
      /* background-color: green; */
      font-family: "微软雅黑";
      font-weight: 700;
      color: #f13454;
      line-height: 30px;
      padding: 0 5px;
    }
    .details2-2-3{
      width: 200px;
      height: 30px;
      position: relative;
      top: 130px;
      left: 20px;
      font-size: 20px;
      /* background-color: green; */
      font-family: "微软雅黑";
      font-weight: 700;
      line-height: 30px;
      padding: 0 5px;
    }
    .details2-2-4{
      width: 180px;
      height: 40px;
      position: relative;
      top: 180px;
      left: 20px;
      font-size: 20px;
      /* background-color: yellow; */
    }
    .details2-2-5{
      width: 180px;
      height: 40px;
      position: relative;
      top: 210px;
      left: 20px;
      font-size: 20px;
      /* background-color: yellow; */
    }
    .details2-2-6{
      width: 180px;
      height: 40px;
      position: relative;
      top: 170px;
      left: 200px;
      font-size: 20px;
      /* background-color: yellow; */
    }
    .red{
      color: #cc3333;
    }
</style>
