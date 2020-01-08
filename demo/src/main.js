// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/index.css"
import "./assets/model.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
router.beforeEach((to,from,next)=>{
      // console.log("娃哈哈")
      // console.log(to);
      // console.log(from);
      // next()
      if(to.meta.isLogin){
          if(false){  //判断该路由需要是否需要登录
              next()
          }else{
              if(sessionStorage.uid){
                next()
              }else{
                // alert("先去登陆吧")
                next("/login")
                next()
                // if(sessionStorage.uid){
                //   next("/index")
                // }
              }
          }
      }else{//一路到底
          // alert("爱谁谁")
          next()
      }
  })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
