import Vue from 'vue'
import Router from 'vue-router'
import axios from "axios"
import Index from '@/components/Index'
import Discover from "@/components/discover"
import Order from "@/components/order"
import Mine from "@/components/mine"
import Search from "@/components/search"
import Detail from "@/components/detail"
import Submit from "@/components/submit"
import Login from "@/components/login"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path:"/discover",
      name:"Discover",
      component:Discover
    },
    {
      path:"/order",
      name:"Order",
      component:Order
    },
    {
      path:"/mine",
      name:"Mine",
      meta:{
        isLogin:true
      },
      component:Mine
    },
    {
      path:"*",
      redirect:"/index"
    },
    {
      path:"/search",
      name:"Search",
      component:Search
    },
    {
      path:"/detail/:item",
      name:"Detail",
      component:Detail
    },
    {
      path:"/submit/:item",
      name:"Submit",
      meta:{
        isLogin:true
      },
      component:Submit
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    }
  ],

})
