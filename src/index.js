require('dotenv').config({path:"../src/.env"})
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const movieRoutes = require('./routes/movieRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use("/api/users",authRoutes)
app.use("/api/movies",movieRoutes) 
app.use("/api/movies",reviewRoutes)   


mongoose
    .connect(process.env.DB_URI)
    .then(()=>console.log("connected to db"))
    .catch((e)=>console.error(e))

app.listen(PORT,()=>{
    console.log("listening")
})




// by Madhusudhan