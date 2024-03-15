const Review = require('../models/Review')

const addReviewAndRating = async(data)=>{
    try{
        const added = await Review.create(data)
        return added

    }catch(e){
        throw e
    }

}
const updateReview =async(data)=>{
    try{
        const {updatedContent,userId,movieId,reviewId} = data
        const updated =await Review.findByIdAndUpdate(
            {_id:reviewId,userId:userId,movieId:movieId},
            {$set:updatedContent},
            {new:true}
        )
        

        return updated

    }catch(e){
        
        throw e
    }

}
const getAllMovieReviews = async(movieId,userId)=>{
    try{
        const data = await Review.find({userId:userId,movieId:movieId})
        return data
    }catch(e){
        throw e
    }

}
const getAverageRating = async(movieId,userId)=>{
    try{
        const data = await Review.find({userId:userId,movieId:movieId})
        const ratings = data.map((element)=>{return element.rating})
        const sum = ratings.reduce((a, b) => a + b, 0); 
        const avg = ratings.length > 0 ? (sum / ratings.length).toFixed(1) : 0;
        return avg


    }catch(e){

    }

}

const deleteReview = async(userId,movieId,reviewId)=>{
    try{
        const deleted = await Review.findByIdAndDelete({_id:reviewId,movieId:movieId,userId:userId})
        return deleted
    }catch(e){
        throw e
    }
}
module.exports = {addReviewAndRating,updateReview,getAllMovieReviews,getAverageRating,deleteReview}