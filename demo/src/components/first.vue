<template>
  <div>
    <header class="header-top">
      <span class="address">
        北京
        <img class="down" src="../assets/images/down.png" />
      </span>
      <router-link to="/search">
        <span class="search">
          <img class="search-img" src="../assets/images/search.png" />
          请输入商家名，品类或者商圈
        </span>
      </router-link>
      <span class="posi"><img src="../assets/images/posi.png" /></span>
    </header>
    <ul class="banner" >
      <li v-for="item in arr" class="banner-li" :key="item._id">
    		<img :src="require('../assets/'+item.url)" class="banner-img"/>
    		<span>{{item.name}}</span>
    	</li>
      <ul>
        <li class="idot active"></li>
        <li class="idot"></li>
      </ul>
    </ul>
    <div class="business">
      <h2 class="cnxh">猜你喜欢</h2>
      <dl v-for="(item) in list" class="detail" :key="item._id">
    		<router-link :to="{path:'/detail/'+item.name}" >
    			<dt class="avatar"><img :src="require('../assets/'+item.img)"/></dt>
    			<dd class="name">{{item.name}}</dd>
    			<dd class="state">{{item.state}}</dd>
    			<dd>
    				<span class="price">{{item.price}}</span>
    				<span class="oldPaice">门市价:{{item.oldPrice}}</span>
    				<span class="num">已售{{item.num}}</span>
            <!-- <img :src="require('../assets/images/banner(1).png')" /> -->
    			</dd>
    		</router-link>
    	</dl>
      <div class="zz"></div>
    </div>
  </div>

</template>

<script>
  import axios from "axios"
  export default {
    name: 'first',
    data() {
      return {
        arr: [],
        list: [],
      }
    },
    mounted() {
      axios.get("http://localhost:8000/getBanner").then((res) => {
        // console.log(res)
        this.arr = res.data
      })

      //获取商家
      axios.get("http://localhost:8000/getShow").then((res) => {
        // console.log(res)
        this.list = res.data
      })
    },
    filters:{
      imgsrc(val){
        var src = '../assets/'+val
        return src
      }
    },
  }

</script>

<style>
</style>
