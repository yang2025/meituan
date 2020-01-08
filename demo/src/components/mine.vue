<template>
  <div class="mine">
      <header class="mine-top  search-top header-top">
          <img class="jt" src="../assets/images/jt.png" @click="back" />
          <span>我的美团</span>
          <img class="xfz" src="../assets/images/right.png" @click="toindex"/>
          <img class="search-img" src="../assets/images/search.png" @click="tosearch"/>
      </header>
      <div class="mine-name">
         <img src="../assets/images/header.png"/>
         <div class="namedetail">
           <p>{{name}}</p>
           <p>账户余额：0元</p>
         </div>
         <img class="yjt" src="../assets/images/yjt.png" />
      </div>
      <div class="mine-center">
        <span>
          全部订单
          <img  class="yjt" src="../assets/images/yjt.png" alt=""/>
        </span>
        <ul>
          <li>
            <img src="../assets/images/dfk.png" alt=""/>
            <span>代付款</span>
          </li>
           <li>
            <img src="../assets/images/dsy.png" alt=""/>
            <span>待使用</span>
          </li>
          <li>
            <img src="../assets/images/dpj.png" alt=""/>
            <span>待评价</span>
          </li>
          <li>
            <img src="../assets/images/tk.png" alt=""/>
            <span>退款/售后</span>
          </li>
        </ul>
      </div>
  </div>

</template>

<script>
  import axios from "axios"
  import qs from "qs"
  export default{
    name:"mine",
    data(){
      return {
        name:""

      }
    },
    created(){
        axios({
          method:"post",
          url:"http://localhost:8000/getUser",
          data:qs.stringify({
              uid:sessionStorage.getItem("uid")
          })
        }).then((res)=>{
          console.log(res)
          this.name = res.data
        })
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      toindex(){
        this.$router.push("/index")
      },
      tosearch(){
        this.$router.push("/search")
      }
    }
  }

</script>

<style>
</style>
