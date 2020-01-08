<template>
  <div class="login">
    <div>
      <p>
        用户名：<input type="text" v-model="username"/><br/><br/>
      </p>
      <p>
       密&nbsp;&nbsp;  码：<input type="text" v-model="password"/><br/><br/>
      </p>

       <span @click="login">登录</span>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import qs from "qs"
import md5  from "js-md5"
import route from "vue-router"
export default {
  name:"mine",
  data(){
    return {
        username:"",
        password:""
      }
   },
//    mounted(){
//      axios({
//        method:"get",
//        url:"http://localhost:8000/getLogin",
//
//      }).then((res)=>{
//        console.log(res)
//      })
//    },
   methods:{
       login(){
          axios({
            method:"post",
            url:"http://localhost:8000/getLogin",
            data:qs.stringify({
                name:this.username,
                password:md5(this.password)
            })
          }).then((res)=>{
              console.log(res)
              if(res.data.state === 0){
                  alert(res.data.reason)
              }else if(res.data.state === 1){
                  sessionStorage.setItem("uid",res.data.uid)
                  sessionStorage.setItem("token",res.data.token)
                  // this.$router.push("/mine");
                  this.$router.go(-1)
              }
          })
       }
   }
}
</script>

<style>


</style>
