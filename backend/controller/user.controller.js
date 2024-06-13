import User from "../model/user.model.js";

export const signup=(req,res)=>{
 try {
    const {fullname, email, password}=req.body;
    const user= User.findOne({email})
    if (user){
        return res.status(400).json({message:"Email already exist"})
    }
 } catch (error) {
    
 }
} 