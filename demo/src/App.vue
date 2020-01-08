<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img src="./assets/logo.png"> -->
    <div class="footer" >
    	<router-link to="index">
    		<img src="./assets/images/index.png" />
    		<span>首页</span>
    	</router-link>
    	<!-- <router-link to="discover">
    		<img src="./assets/images/discover.png" />
    		<span>发现</span>
    	</router-link>
    	<router-link to="order">
    		<img src="./assets/images/order.png" />
    		<span>订单</span>
    	</router-link>
    	<router-link to="mine">
    		<img src="./assets/images/mine.png" />
    		<span>我的</span>
    	</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
