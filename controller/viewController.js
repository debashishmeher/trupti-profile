const catchAsync=require("../utility/catchAsync")

exports.home=catchAsync(async(req,res,next)=>{
    res.status(200).render("home")
})