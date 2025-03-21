import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config();

const protectRoute = async (req,res, next) => {
  try {
    const token = req.cookies?.jwt;
  
    if (!token ) return res.status(401).json({ message : "Unauthorize - No token Provoided!"});
  
    const jwtSecret = process.env.JWT_SECRET;
  
    if(!jwtSecret){
      console.log("jwt_secret is missing .");
      return res.status(500).json({message : "Interanl Error"})
    };
  
    const decode = jwt.verify(token,jwtSecret);
  
    if (!decode || !decode.userId) {
      return res.status(401).json({ message : "Unauthorize - Invalid token "});
    };
  
    const user = await User.findById(decode.userId).select("-password");
    if(!user) return res.status(401).json({ message : "user not found."});
  
    req.user = user;
    
    next()
  } catch (error) {
    console.log("error in protectroute : " , error);
    return res.status(500).json({message : "Internal error!"})
  }
};

export default protectRoute