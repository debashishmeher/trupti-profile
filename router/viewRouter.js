const express=require("express")
const Router=express.Router()
const viewController=require("../controller/viewController")

Router.get("/",viewController.home)

module.exports=Router