import 'dotenv/config'

import express from "express";
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import cartRouter from './routes/cartRouter.js';




//app config
const app=express()
const port=4000

//middleware
app.use(express.json());
app.use(cors())

//db connection
connectDb();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/image",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.get("/",(req,res)=>{
    res.send("API Working hi")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})