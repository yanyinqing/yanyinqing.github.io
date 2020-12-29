<template>
  <div class="Single" id="">
    <router-link :to="{path:'/Details',query:{name:id}}">
      <div class="single1">
          <div class="single_img">
            <img class="img" :src="geturl(id)" />
          </div>
          <div class="text">
              <span>
                {{gettitle(id)}}
              </span>
          </div>
          <div class="price">
              {{getprice(id)}}
          </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  props: ['id'],
  methods: {
    geturl (id) {
      return this.$store.state.goods[this.id].p1
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
    .img{
        width: 212px;
        height: 212px;
        position: relative;
        left: 13px;
        top: 13px;
    }
    .text{
      width: 212px;
      height: 50px;
      position: relative;
      left: 13px;
      top: 25px;
      font-size: 14px;
      font-family: "微软雅黑";
      color: #383838;
    }
    .price{
      width: 170px;
      height: 27px;
      position: relative;
      left: 13px;
      top: 30px;
      font-size: 18px;
      font-family: "微软雅黑";
      color: #cc3333;
      font-weight: 700;
    }
</style>
