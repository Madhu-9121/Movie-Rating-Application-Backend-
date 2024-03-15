const jwt = require('jsonwebtoken')
const authenticateToken =(req,res,next)=>{
    const authhead = req.headers['authorization']
    const token = authhead && authhead.split(" ")[1]
    if(token==null) return res.sendStatus(401)// unauth
    jwt.verify(token,process.env.SECRET,(err,user)=>{
        if(err)return res.sendStatus(403) //forbidden
        req.user = user
        console.log("userin middleware,:", user)
        next()
    })
    
}
module.exports= authenticateToken