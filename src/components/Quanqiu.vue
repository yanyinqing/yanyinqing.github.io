<template>
  <div class="Quanqiu">
    <div class="quanqiu1">
      <div class="quanqiu1-1">
        <span class="bodyziti1">
            <i class="el-icon-shopping-bag-1 iconstyle"></i>
            全球必买清单
        </span>
      </div>
      <div class="quanqiu1-2">
          <span class="bodyziti2">更多
            <i class="el-icon-arrow-right"></i>
          </span>
      </div>
    </div>
    <div class=quanqiu2>
      <div class="quanqiu2-1">
        <img src="../assets/kouhongdaohang.png" alt="">
      </div>
      <div class="quanqiu2-2">
        <router-link :to="{path:'/Details',query:{name:id=1}}">
          <div class="quanqiu2-2-1">
            <img class="quanqiutu" :src="geturl(id=1)">
            <div class="quanqiuziti1">{{gettitle(id=1)}}</div>
            <div class="quanqiuziti2">
              {{getprice(id=1)}}
              <div class="quanqiuziti3"> <img class="korea" src="../assets/Korea.png" alt="">韩国</div>
            </div>
          </div>
        </router-link>
        <router-link :to="{path:'/Details',query:{name:id=2}}">
          <div class="quanqiu2-2-2">
            <img class="quanqiutu" :src="geturl(id=2)">
            <div class="quanqiuziti1">{{gettitle(id=2)}}</div>
            <div class="quanqiuziti2">
              {{getprice(id=2)}}
              <div class="quanqiuziti3"> <img class="korea" src="../assets/Korea.png" alt="">韩国</div>
            </div>
          </div>
        </router-link>
        <router-link :to="{path:'/Details',query:{name:id=3}}">
          <div class="quanqiu2-2-3">
            <img class="quanqiutu" :src="geturl(id=3)" >
            <div class="quanqiuziti1">{{gettitle(id=3)}}</div>
            <div class="quanqiuziti2">
              {{getprice(id=3)}}
              <div class="quanqiuziti3"> <img class="korea" src="../assets/Korea.png" alt="">韩国</div>
            </div>
          </div>
        </router-link>
        <router-link :to="{path:'/Details',query:{name:id=4}}">
          <div class="quanqiu2-2-4">
          <img class="quanqiutu" :src="geturl(id=4)">
          <div class="quanqiuziti1">{{gettitle(id=4)}}</div>
          <div class="quanqiuziti2">
            {{getprice(id=4)}}
            <div class="quanqiuziti3"> <img class="korea" src="../assets/Korea.png" alt="">韩国</div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name:"quanqiu",
  methods: {
    geturl () {
      return 'static/goods/good' + this.id + '/1.jpg'
    },
    gettitle (id) {
      return this.$store.state.goods[this.id].title
    },
    getprice (id) {
      return '¥' + this.$store.state.goods[this.id].price
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Quanqiu{
    height: 360px;
  }
  .quanqiu1{
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    position: relative;
    top: 40px;
  }
  .quanqiu1-2{
    position: relative;
    left: 1148px;
    top: -30px;
  }
  .quanqiu2{
    width: 1200px;
    height: 290px;
    margin: 0 auto;
    position: relative;
    top: 40px;
  }
  .quanqiu2-1{
    width: 353px;
    height: 290px;
    position: relative;

  }
  .quanqiu2-2{
    width: 840px;
    height: 290px;
    position: relative;
    left: 360px;
    top: -290px;
  }
  .quanqiu2-2-1{
    width: 210px;
    height: 290px;
    border:1px solid gray;
  }
  .quanqiu2-2-2{
    width: 210px;
    height: 290px;
    position: relative;
    left: 210px;
    top: -290px;
    border:1px solid gray;
  }
  .quanqiu2-2-3{
    width: 210px;
    height: 290px;
    position: relative;
    left: 420px;
    top: -580px;
    border:1px solid gray;
  }
  .quanqiu2-2-4{
    width: 210px;
    height: 290px;
    position: relative;
    left: 630px;
    top: -870px;
    border:1px solid gray;
  }
  .quanqiutu{
    width: 170px;
    height: 170px;
    position: relative;
    left: 20px;
    top: 20px;
  }
  .quanqiuziti1{
    width: 170px;
    height: 42px;
    position: relative;
    top: 30px;
    left: 20px;
    font-size: 14px;
    font-family: "微软雅黑";
    color: #383838;
  }
  .quanqiuziti2{
    width: 170px;
    height: 27px;
    position: relative;
    top: 50px;
    left: 20px;
    font-size: 18px;
    font-family: "微软雅黑";
    color: #cc3333;
    font-weight: 700;
  }
  .quanqiuziti3{
    position: relative;
    left: 136px;
    top: -18px;
    font-size: 12px;
    font-family: "微软雅黑";
    color: #9b9b9b;
    font-weight: 700;
  }
  .korea{
    width: 12px;
    height: 12px;
  }
</style>
