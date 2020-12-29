<template>
  <div class="Like">
    <div class="like1">
        <span class="bodyziti1">
          <i class="heartbeat icon iconstyle"></i>
          猜你喜欢
        </span>
    </div>
    <div class="like2">
      <table class="like2" border="1">
        <tr v-for="tr in n" :key="tr" >
          <td v-for="td in 5" :key="td">
            <!-- {{tr}}-{{td}} -->
            <Single class="Single" :id="tr*5-1+td"/>
          </td>
        </tr>
      </table>
    </div>
    <div class="like3">
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
  // name: "like",
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
  .Like{
    width: 1200px;
    margin: 0 auto;
  }
  .like1{
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    position: relative;
    top: 40px;
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
  .like3{
    width: 1200px;
    height: 50px;
    position: relative;
    top: 80px;
  }
  .Single{
    height: 320px;
  }
</style>
