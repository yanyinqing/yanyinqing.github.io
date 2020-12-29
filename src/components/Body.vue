<template>
  <div class="Body">
    <Lunbo />
    <Quanqiu />
    <Hot />
    <Like />
  </div>
</template>

<script>
import Lunbo from './Lunbo'
import Quanqiu from './Quanqiu'
import Hot from './Hot'
import Like from './Like'

export default {
//   name: "body",
  data () {
    return {}
  },
  components: {
    Lunbo,
    Quanqiu,
    Hot,
    Like
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
