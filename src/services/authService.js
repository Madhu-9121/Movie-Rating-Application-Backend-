const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const createUser = async (data)=>{
    try{
        const exist = await User.findOne({email:data.email})
        if(exist){
            throw new Error("user already exists");
        }
        const user = new User(data)
        const salt = await bcrypt.genSalt(10)
        const hasspassword = await bcrypt.hash(data.password,salt)
       
        user.password = hasspassword
        await user.save()

        return user



    }catch(e){
        throw e
    }
}

const login= async(data)=>{
    try{
        const {email,password} = data

        const user = await User.findOne({email})
        if(!user){ 
            throw new Error("user not found") 
        }
        const ismatch = await user.comparePassword(password)
        if(!ismatch){
            throw new Error("invalid credentials")
        }
        const token = jwt.sign({id:user._id},process.env.SECRET)

        return {user,token}


    }catch(e){
        throw e
    }
}
module.exports= {createUser,login}