import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: "Please fill all fields"});
        }

        const userData = await User.findOne({email});
        if(!userData) {
            return res.status(400).json({message: "User not found"});
        }
        
        const isValidCredential = await bcrypt.compare(password, data.password);
        if(!isValidCredential) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({id:userData._id}, process.env.JWT_SECRET);
        res.cookie("ACCESS_TOKEN", token ,{ 
            httpOnly:true
        });

        const {restUserData, password:hashedDBPassword}= {...userData};

        return res.status(200).json({"data":restUserData});

    }catch(err) {
        console.log(err);
        return res.status(500).json({message: "Internal server error"});
    }
}

export const register = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message: "Please fill all fields"});
        }
        const data = await User.findOne({email});
        if(data) {
            return res.status(400).json({message: "User already Exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = await User.create({...req.body, password: hashedPassword});
        return res.status(201).json({message: "User created successfully"});
    }catch(err) {
        console.log(err);
        return res.status(500).json({message: "Internal server error"});
    }
}
export const logout = async (req, res) => {
    res.clearCookie("ACCESS_TOKEN");
    return res.status(200).json({ message: "Logged out successfully" });
}
