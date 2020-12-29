<template>
    <div class="menu dropdown-content">
      <table>
        <tr>
          <td><router-link class="ziti" :to="{path:'/Class',query:{name:1}}">化妆品</router-link></td>
          <td><router-link class="ziti" :to="{path:'/Class',query:{name:2}}">箱包</router-link></td>
          <td><router-link class="ziti" :to="{path:'/Class',query:{name:3}}">运动</router-link></td>
        </tr>
        <tr>
          <td><router-link class="ziti" :to="{path:'/Class',query:{name:4}}">家电</router-link></td>
          <td><router-link class="ziti" :to="{path:'/Class',query:{name:5}}">钟表</router-link></td>
          <td><router-link class="ziti" :to="{path:'/Class',query:{name:6}}">男士护肤</router-link></td>
        </tr>
        <tr>
          <td><router-link class="ziti" :to="{path:'/Class',query:{name:7}}">食品</router-link></td>
          <td><router-link class="ziti" :to="{path:'/Class',query:{name:8}}">母婴</router-link></td>
          <td>
            <span class="ziti">更多
              <i class="el-icon-arrow-right"></i>
            </span>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
//   name: "menu",
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dropdown-content {
      display: none;
      position: absolute;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }
  .dropdown:hover .dropdown-content {
      display: block;
  }
  .menu{
    width: 500px;
    height: 225px;
  }
  .ziti{
    font-size: 20px;
    font-family: "微软雅黑";
    font-weight: 700;
    color: #383838;
    transition:0s;
  }
  td{
    width: 200px;
    height: 75px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    transition:0s;
  }
  .ziti:hover{
    color: #cc3333;
  }
  .size2{
    width: 200px;
    height: 50px;
    background-color: red;
  }

</style>
