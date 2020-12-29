<template>
  <div class="Lunbo">
    <div class="lunbo1 center">
      <div class="lunbo1-1">
        <span class="bodyziti1">
          <em class="el-icon-time iconstyle"></em>
          今日限时抢
        </span>
      </div>
      <div class="lunbo1-2">
        <span class="bodyziti2"
          >更多
          <em class="el-icon-arrow-right"></em>
        </span>
      </div>
    </div>
    <div class="lunbo2">
      <el-carousel class="lunbo2-1" :interval="3000" type="card"  height="260px">
        <el-carousel-item v-for="item in 4" :key="item">
          <router-link :to="{path:'/Details',query:{name:id=42}}">
            <img src="../assets/lunbo1.jpeg" id="42" class="lunbotu" v-if="item == 1" >
          </router-link>
          <router-link :to="{path:'/Details',query:{name:id=6}}">
            <img src="../assets/lunbo2.jpeg" id="6" class="lunbotu" v-if="item == 2" >
          </router-link>
          <router-link :to="{path:'/Details',query:{name:id=7}}">
            <img src="../assets/lunbo3.jpeg" id="7" class="lunbotu" v-if="item == 3" >
          </router-link>
          <router-link :to="{path:'/Details',query:{name:id=56}}">
            <img src="../assets/lunbo4.jpeg" id="56" class="lunbotu" v-if="item == 4">
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  // name: "lunbo",
  data () {
    return {}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Lunbo {
  height:400px;
}
.lunbo1 {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
  position: relative;
  top: 40px;
}

.lunbo1-1 {
  position: relative;
  left: -530px;
}
.lunbo1-2 {
  position: relative;
  left: 575px;
  top: -30px;
}
.icon {
  font-size: 25px;
  color: #f13454;
}
.lunbo2 {
  width: 1120px;
  height: 350px;
  /* background-color: #F13454; */
  margin: 0 auto;
  position: relative;
  top: 40px;
}
.el-carousel__item h3{
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height:200px;
  margin: 0;
}
.el-carousel__item{
  background-color: red;
}
.el-carousel__item{
  background-color: blue;
}
.lunbotu{
  width: 560px;
  height: 260px;
}
</style>
