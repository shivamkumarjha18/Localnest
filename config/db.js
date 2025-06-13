import mongoose from "mongoose";
const connectdb=async ()=>{
    try{
await mongoose.connect(process.env.Mongo_Url)
  console.log("db connected")  }
    catch(error){
console.log("db error")
    }
}
export default connectdb;