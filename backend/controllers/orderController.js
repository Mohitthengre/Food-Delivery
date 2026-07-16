import orderModel from "../models/orderModel";
import userModel from "../models/userModel.js"
import stripe from "stripe"

//placing user order for frontned
const placeOrder=async (req,res)=>{
    ///adding logic for payemnt using stripe (Restricted in india)
}
export {placeorder}