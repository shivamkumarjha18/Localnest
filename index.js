import express from "express"
import dotenv from "dotenv"
import connectdb from "./config/db.js"
import authRouter from "./Routes/auth.route.js"
import cookieParser from "cookie-parser"
dotenv.config()
let port=process.env.PORT||6000
let app=express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.listen(port,()=>{
    connectdb()
console.log("server started on port",port)
})