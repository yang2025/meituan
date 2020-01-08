<template>
  <div class="detail">
  	<header class="search-top detail-top">
  		<router-link to="/index">

  		<img class="jt" src="../assets/images/jt.png" />
  		</router-link>
  		<span class="tg">团购详情</span>
  		<div>
  			<span>
  				<img src="../assets/images/collect.png" />
  				<p>收藏</p>
  			</span>
  			<span @click="nige">
  				<img src="../assets/images/navigate.png" />
  				<p>导航</p>
  				<ul class="isnige" v-show="isnige">
  					<li>
  						<router-link to="/index">
  							<img src="../assets/images/index.png" />首页
  						</router-link>
  					</li>
  					<li>
  						<router-link to="/mine">
  							<img src="../assets/images/mine.png" />我的
  						</router-link>
  					</li>
  				</ul>
  			</span>
  		</div>
  	</header>
  	<dl v-for="item in showArr" class="detail-dl" :key=item._id>
  		<dt>
  			<img class="detail-img" :src="require('../assets/'+item.img)" />
  			<span class="detail-span">
  				<p class="detail-name">{{item.name}}</p>
  				<p class="detail-state">{{item.state}}</p>
  			</span>
  		</dt>
  		<dd>
  			<div>
  				<span class="detail-price">{{item.price}}</span>
  				<span class="detail-old">门市价：{{item.oldPrice}}</span>
  			</div>
  			<span class="ljqg">
  				<router-link :to="{path:'/submit/'+item.name}">
  					立即抢购
  				</router-link>
  			</span>
  		</dd>
  		<dd>
  			<span>
  				<img src="../assets/images/payfor.png" />
  				支持随时退款
  			</span>
  			<span>
  				<img src="../assets/images/success.png" />
  				支持过期自动退
  			</span>
  		</dd>
  		<dd>
  			<span>已售{{item.num}}</span>
  		</dd>
  	</dl>
  </div>


</template>

<script>
  import axios from "axios"
  export default{
    name:"detail",
    data(){
    	return {
    		term:"",
    		showArr:[],
    		isnige:false
    	}
    },

    mounted () {
    	// console.log(this.$route.params)
    	this.term=this.$route.params.item
    	axios({
    		method:"get",
    		url:"http://localhost:8000/getDetail",
    		params:{name:this.term}
    	}).then((res)=>{
    		// console.log(res)
    		this.showArr = res.data
    	})
    },
    methods:{
    	nige(){
    		if(this.isnige == true){
    			this.isnige =false
    		}else if(this.isnige == false){
    			this.isnige =true
    		}
    	}
    }
  }
</script>

<style>
</style>
