<template>
<div class="order">
			<h2>订单列表</h2>
			<input type="checkbox" v-model="allChecked" @click="allchange">
			<ul>
				<li v-for="(item,index) in  goodsList" :key=index>
					<input type="checkbox" :checked="checkedArr[index]" class="inputCheck" @change="change(index,$event)">
					<img  :src="require('../assets/'+item.img)" />
					<div class="orderDetail">
						<span>{{item.name}}</span>
						<span>{{item.state}}</span>
						<span>
							<button @click="reduceorder(index,$event)">-</button>
							<input type="text" :value="item.orderNum" />
							<button @click="addorder(index,$event)">+</button>
						</span>
						<span>单价：{{item.price}}</span>
						<span>总价：{{item.total}}</span>
					</div>
				</li>
			</ul>
			<span class="zj">总计:{{allTotal}}元</span>
			<div class="zz"></div>
		</div>

</template>

<script>
  import axios from "axios"
  export default{
    name:"order",
    data(){
    	return {
    		goodsList:[],
    		allTotal:0,
    		checkedArr:[],
    		allChecked:false
    	}
    },
    mounted(){
    	axios.get("http://localhost:8000/getGoods").then((res)=>{
    		// console.log(res)
    		this.goodsList = res.data
    		this.all()
    		for(let i=0; i<this.goodsList.length;i++){
    			this.checkedArr.push(false)
    		}
    	})
    },
    methods:{
    	//数量增加
    	addorder(i){
    		this.goodsList[i].orderNum++
    		this.goodsList[i].total = this.goodsList[i].orderNum * Number(this.goodsList[i].price)
    		this.goodsList[i].total =  Math.floor(this.goodsList[i].total * 100) / 100
    		// console.log(this.goodsList[i].total)
    		this.all()
    	},
    	//数量减少
    	reduceorder(i,e){
    		this.goodsList[i].orderNum--
    		if(this.goodsList[i].orderNum <=1){
    			this.goodsList[i].orderNum =1
    			this.goodsList.splice(i,1)
    			axios({
    				method:"get",
    				url:"http://localhost:8000/delgoods",
    				params:{name:this.goodsList[i].name}
    			})
    		}
    		this.goodsList[i].total = this.goodsList[i].orderNum * Number(this.goodsList[i].price)
    		this.goodsList[i].total =  Math.floor(this.goodsList[i].total * 100) / 100
    		// console.log(this.goodsList[i].total)
    		this.all()
    	},
    	//计算总价
    	all(){
    		this.allTotal = 0
    		this.checkedArr.map((item,index)=>{
    			if(item==true){
    				this.allTotal += Number(this.goodsList[index].total)
    				this.goodsList[index].total =  Math.floor(this.goodsList[index].total * 100) / 100
    			}
    		})
    	},
    	//改变input框状态
    	change(i,e){
    		if(this.checkedArr[i]==false){
    			this.checkedArr.splice(i,1,true)
    		} else  if(this.checkedArr[i] == true){
    			this.checkedArr.splice(i,1,false)
    		}
    		this.all()
    	
    		if(this.checkedArr.indexOf(false)!=-1){
    			this.allChecked = false
    		}else{
    			this.allChecked = true
    		}
    	},
    	//全选全不选
    	allchange(){
    		if(this.allChecked==false){
    			this.allChecked=true
    			this.checkedArr.forEach((ele,index)=>{
    				this.checkedArr.splice(index,1,true)
    			})
    		}else if(this.allChecked==true){
    			this.allChecked=false
    			this.checkedArr.forEach((ele,index)=>{
    				this.checkedArr.splice(index,1,false)
    			})
    		}
    		this.all()
    	}
    }
  }
</script>

<style>
</style>
