const Movie = require('../models/Movie')

const addMovie = async(data)=>{
    try {
        const movie = await Movie.create(data);
        return movie;
      } catch (error) {
        throw error;
      }
    
}
const getall = async(id)=>{
    try{
        const data = await Movie.find({userId:id})
        return data

    }catch(e){
        throw e
    }
}
const getById =async(id,userId)=>{
    try{
        const movie = Movie.find({userId:userId,_id:id})
        
        return movie

    }catch(e){
        throw e
    }

}
const deleteMovieByID = async(userId,id)=>{
    try{
       
        const found = Movie.findOneAndDelete({_id:id,userId:userId})
        return found

    }catch(e){
        throw e
    }
}

const updateMovieContent = async (userId,id,updatedContent)=>{
    try{
        const movie =await Movie.findByIdAndUpdate(
            {userId:userId,_id:id},
            {$set:updatedContent},
            {new:true}
        )
        console.log(movie)
        return movie

    }
    catch(e){
        throw e

    }
}
module.exports = {addMovie,getall,getById,deleteMovieByID,updateMovieContent}