<template>
  <div class="submit">
  	<header class="detail-top submit-top">
  		<router-link to="/index">
  			<img class="jt" src="../assets/images/jt.png" />
  		</router-link>
  		<span >提交订单</span>
  	</header>
  	<div  v-for="(item,index) in submitList" :key=index class="goodsdetail">
  		<p>{{item.state}}</p>
  		<p><span>单价</span> <span>{{price}}元</span> </p>
  		<p>
  			<span>数量</span>
  			<span>
  				<button @click="reduce">-</button>
  				<input type="text" v-model="orderNum">
  				<button @click="add">+</button>
  			</span>
  		</p>
  		<p><span>总价</span><span>{{total}}元</span> </p>
  	</div>
  	<span class="tjdd" @click="tjdd">提交订单</span>
  </div>

</template>

<script>
  import axios from "axios"

  export default{
    name:"submit",
    data(){
    	return {
    		orders:"",
    		submitList:[],
    		orderNum:1,
    		price:"",
    		total:"",
    		obj : {}
    	}
    },
    mounted (){
    	// console.log(this.$route.params)
    	this.orders = this.$route.params.item
    	axios({
    		method:"get",
    			url:"http://localhost:8000/getDetail",
    			params:{name:this.orders}
    		}).then((res)=>{
    		// console.log(res)
    		this.submitList = res.data
    		this.obj = res.data[0]
    		this.price = res.data[0].price.slice(0,-1)
    		this.total = res.data[0].price.slice(0,-1)
    		// console.log(this.obj)
    	})
    },
    methods:{
    	add(){
    		this.orderNum++
    		this.total = this.orderNum * Number(this.price)
    		this.total =  Math.floor(this.total * 100) / 100
    		// console.log(this.total)
    	},
    	reduce(e){
    		// console.log(e.target)
    		this.orderNum--
    		if(this.orderNum <=1){
    			this.orderNum =1
    		}
    		this.total = Number(this.orderNum) * Number(this.price)
    		// console.log("11")
    		// console.log( Math.floor(this.total * 100) / 100 )
    		this.total =  Math.floor(this.total * 100) / 100
    		// console.log(this.total)
    	},
    	tjdd(){
    		let obj ={}
    		// console.log(this.submitList[0])
    		obj.name = this.submitList[0].name
    		obj.orderNum = this.orderNum
    		obj.total = this.total
    		obj.price = this.price
    		obj.state = this.submitList[0].state
    		obj.img = this.submitList[0].img
    		obj.checked=false
    		axios({
    			method:"get",
    			url:"http://localhost:8000/addGoods",
    			params:obj
    		}).then((res)=>{
    			// console.log(res)
    			if(res.data.success){
    				alert(res.data.success)
    			}
    		})
    	}

    }
  }

</script>

<style>
</style>
