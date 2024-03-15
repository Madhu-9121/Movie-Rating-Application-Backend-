const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  userName:{
    required:true,
    type:String
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required: true
  }
},
{
  timestamps:true
})

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
const User = mongoose.model("User",userSchema)

module.exports = User