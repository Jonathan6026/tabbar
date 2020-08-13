<template>
  <div id="app">
     <router-view></router-view>
     <tab-bar>
       <tab-bar-item path="/home">
        <span  slot="item-icon" class="icon iconfont iconfontStyle">&#xe623;</span>
        <span  slot="item-icon-active" class="icon iconfont iconfontStyle">&#xe7f9;</span>
        <div  slot="item-text">首页</div>
       </tab-bar-item >
       <tab-bar-item path="/category">
         <span slot="item-icon" class="icon iconfont iconfontStyle">&#xe623;</span>
         <span  slot="item-icon-active" class="icon iconfont iconfontStyle">&#xe7f9;</span>
         <div slot="item-text">分类</div>
       </tab-bar-item >
       <tab-bar-item path="/cart">
         <span slot="item-icon" class="icon iconfont iconfontStyle">&#xe623;</span>
         <span  slot="item-icon-active" class="icon iconfont iconfontStyle">&#xe7f9;</span>
         <div slot="item-text">购物车</div>
       </tab-bar-item>
       <tab-bar-item path="/profile">
         <span slot="item-icon" class="icon iconfont iconfontStyle">&#xe623;</span>
         <span  slot="item-icon-active" class="icon iconfont iconfontStyle">&#xe7f9;</span>
         <div slot="item-text">我的</div>
       </tab-bar-item>
     </tab-bar>

  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue'
import TabBarItem from './components/tabbar/TabBarItem.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import './assets/css/base.css'

</style>
