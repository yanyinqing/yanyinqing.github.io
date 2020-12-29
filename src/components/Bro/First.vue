<template>
  <div id="view">
    <Title></Title>
    <Guanggao />
    <Body />
    <Foot />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Guanggao from '@/components/Guanggao.vue'
import Body from '@/components/Body.vue'
import Foot from '@/components/Foot.vue'
import axios from 'axios'

export default {
  name: 'First',
  components: {
    Title,
    Guanggao,
    Body,
    Foot
  },
  created () {
    this.init()
    this.init2()
  },
  methods: {
    init () {
      axios.get('static/goods.json').then((res) => {
        this.$store.commit('initdata', res.data.goods)
        console.log(this.$store.state.goods[0].title)
      })
    },
    init2 () {
      axios.get('static/users.json').then((res) => {
        this.$store.commit('initdata2', res.data.users)
        console.log(this.$store.state.users[0].usrername)
      })
    }
  }
}
</script>

<style>
    .Guanggao{
        height: 456px;
    }
    .center{
        text-align: center;
    }
    .bodyziti1{
    font-size: 20px;
    font-family: "微软雅黑";
    font-weight: 700;
    color: #383838;
    line-height: 30px;
  }
    .bodyziti2{
    font-size: 17px;
    font-family: "微软雅黑";
    color: #646464;
    line-height: 30px;
  }
  .iconstyle{
      font-size: 25px;
      color: #F13454;
    }
</style>
