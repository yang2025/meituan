const express = require("express")
const router = express.Router()
const mongodb = require("mongodb")
const mongo = require("./dblianjie")
const jet = require("./jsonwebtoken")
const ObjectId = mongodb.ObjectId
// var ObjectId = mongodb.ObjectId;
//获取商家列表
router.get("/getShow",(req,res)=>{
	mongo("find","detail",{},(result)=>{
		res.send(result)
	})
})


//获取轮播
router.get("/getBanner",(req,res)=>{
	mongo("find","banner",{},(result)=>{
		res.send(result)
	})
})

//获取商家详情
router.get("/getDetail",(req,res)=>{
	console.log(req.query.name)
	mongo("find","detail",{name:req.query.name},(result)=>{
		res.send(result)
	})
})


//添加订单商品
router.get("/addGoods",(req,res)=>{
	console.log(req.query)
	mongo("find","addgoods",{name:req.query.name},(result)=>{
		console.log(result)
		if(result.length==0){
			mongo("insert","addgoods",req.query,(result)=>{
					res.send(result)
			})
		}else{
			res.send({
				success:"订单中已有此商品"
			})
		}
	})
})

//获取订单商品
router.get("/getGoods",(req,res)=>{
	mongo("find","addgoods",{},(result)=>{
		res.send(result)
	})
})

//删除订单商品
router.get("/delgoods",(req,res)=>{
	mongo("del","addgoods",{name:req.query.name},(result)=>{
		res.send(result)
	})
})

//用户登录
// router.post("/login",(req,res)=>{
// 	console.log(req.body)
// 	let info = {
// 		name:req.body.name,
// 		password:req.body.password
// 	}
// 	mongo("insert","userlist",info,(result)=>{
// 		res.send(result)
// 		console.log(result)
// 	})
// 	
// })

//获取用户列表
// router.get("/getLogin",(req,res)=>{
// 	mongo("find","userlist",{},(result)=>{
// 		console.log(result)
// 	})
// })
router.post("/getLogin", (req, res) => {
  console.log(req.body.name)
  let info = {
    name: req.body.name,
    password: req.body.password
  }
  mongo("find", "userlist", info, (result) => {
    console.log(result)
    if (result.length == 0) {
      res.send({
        state: 0,
        reason: "数据库暂无数据"
      })
    } else {
      let id = result[0]._id.toString();
      let token = jet.sign({id}, "7d")
      res.send({
        state: 1,
        uid: id,
        token: token
      })
    }
  })
})


//获取用户信息

router.post("/getUser",(req,res)=>{
	console.log(req.body)
	mongo("find","userlist",{_id:ObjectId(req.body.uid)},(result)=>{
		console.log(result)
		res.send(result[0].name)
	})
})


module.exports=router 