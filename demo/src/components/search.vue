<template>
  <div class="search">
  	<div class="header-top search-top">
  		<router-link to="/index">
  			<img class="jt" src="../assets/images/jt.png" />
  		</router-link>
  		<span>搜索</span>
  		<img class="xfz" src="../assets/images/right.png"   @click="toindex"/>
  	</div>
  	<div class="search-center">
  		<span>
  			<img src="../assets/images/search.png" />
  			<input class="search-input" v-model="search" type="search" @focus="focus" @focusout="focusout" value="" placeholder="请输入商家名,商圈" />
  		</span>
  		<button type="button">搜索</button>
  	</div>
  	<ul v-show="isShow" class="assort">
  		<li v-for="(item,index) in assort" :key=index>
  		<span>{{item}}</span>
  		</li>
  	</ul>
  	<ul class="busList" v-show="isTrue" >
  		<li v-for="(item,index) in getgoods" @click="addgoods" :key=index>
  			{{item}}
  		</li>
  	</ul>
  </div>
</template>

<script>
  export default{
    name:"search",
    data(){
    	return {
    		search:"",
    		isShow:true,
    		isTrue:false,
    		assort:["周边热门","自助餐","酒店","电影","火锅",
    			"烤肉","KTV","运动健身","游泳","西餐","美容美体","日韩料理"
    		],
    		businessList:["北京全聚德","北京掉香缘掉渣饼","北京华莱士炸鸡汉堡","北京好利来","北京紫光园"]
    	}
    },
    methods:{
    	focus(){
    		this.isShow=false
    		this.isTrue=true
    	},
    	focusout(){
    		if(this.search ==""){
    			this.isShow=true
    			this.isTrue=false
    		}
    	},
    	addgoods(e){
    		if(e.target.localName === 'li'){
    		   this.search = e.target.innerText
    		   this.isShow=true
    		   this.isTrue=false
    		}
    	},
      toindex(){
        this.$router.push("/index")
      },
    },
    computed:{
    	getgoods(){
    		if(this.search){
    			let newArr = this.businessList.filter((item)=>{
    				if(item.includes(this.search)){
    					return item
    				}
    			})
    			return newArr
    		}else{
    			return []
    		}
    	}
    },
    
  }

</script>

<style>
</style>
