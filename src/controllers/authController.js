const authServices = require('../services/authService')
const registerUser =async (req,res)=>{
    try{const data = req.body
    const user = await authServices.createUser(data)
    res.status(201).json({
        message: "User registered successfully",
        userId: user,
      });
    }catch(e){
        res.status(500).json({message:e.message})
    }
  

}
const loginUser =async (req,res)=>{
    try{

        const data = req.body
        const {token,userId} = await authServices.login(data)

        res.status(200).json({message:"user logged in succesfully",token,userId})
       

    }catch(e){
        res.status(500).json({message:e.message})
    }
}

module.exports = {registerUser,loginUser}