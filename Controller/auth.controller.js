import genToken from "../config/token.js"
import User from "../Model/user.model.js"
import bcrypt from "bcryptjs"
 const signUp=async (req,res)=>{
    try{
    let {name,email,password}=req.body
    let existUser= await User.findOne({email})
    if(existUser){
        return res.status(400).json({message:"User is already exist"})
    }
    let hashPassword=await bcrypt.hash(password,10)
    let user=await User.create({name,email,password:hashPassword})
   let token=await genToken(user._id)
   res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENVIRONMENT="production",
  sameSite:"strict",
  maxAge:7*24*60*60*1000

})
return res.status(201).json(user)
}catch(error){
  console.error("Signup error:", error);
  return res.status(500).json({ message: error.message });
}
}
export default signUp;