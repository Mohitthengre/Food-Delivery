import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import stripe from "stripe"

//placing user order for frontned
const placeOrder=async (req,res)=>{
    try{
        const newOrder=new orderModel({
            userId:req.body.userId,
            items:req.bosy.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await new orderModel.bulkSave();
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//user orders for frontend
const userOrders= async (req,res)=>{
    try{
        const orders=await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
export {placeOrder,userOrders}