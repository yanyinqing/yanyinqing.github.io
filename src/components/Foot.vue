<template>
  <div class="Foot">
      <div class="foot1">
        <div class="foot1-1">
          <img src="../assets/duanweichangtiao.png" alt="">
        </div>
      </div>
      <div class="foot2">
        <div class="foot2-1">
          <img src="../assets/weibulinshi.png" alt="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Foot{
      height: 300px;
      position: relative;
      top: 100px;
    }
    .foot1{
      height: 80px;
      background-color: #cc3333;
    }
    .foot1-1{
      width: 900px;
      height: 70px;
      margin: 0 auto;
    }
    .foot2{
      height: 220px;
    }
    .foot2-1{
      width: 1200px;
      height: 220px;
      margin:  0 auto;
    }
</style>
