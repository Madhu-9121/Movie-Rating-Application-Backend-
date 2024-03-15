const Movie = require('../models/Movie')
const reviewServices = require('../services/reviewService')

const addReviewAndRating =async(req,res)=>{
    try{
        const {review,rating} = req.body
        const userId = req.user.id
        const movieId = req.params.id
        
   
        const added = await reviewServices.addReviewAndRating({
            review,rating,userId,movieId
        })
        res.status(201).json(added)

    }catch(e){
        return res.status(500).json({message:e.message})
    }

}
const updateReview =async (req,res)=>{
    try{
        const { movieId, reviewId } = req.params;
        const userId = req.user.id;
        const updatedContent = req.body; 
        const updated = await reviewServices.updateReview({userId,movieId,reviewId,updatedContent})
        if(!updated){
            res.status(404).json({message:"movie not found"})
        }
        res.status(200).json(updated)


    }catch(e){
        res.status(500).json({message:e.message})
    }
}

const getAllReviews=async(req,res)=>{
    try{
        const movieId = req.params.id
        const userId  = req.user.id
        const data = await reviewServices.getAllMovieReviews(movieId,userId)
        res.status(200).json(data)

    }catch(e){
        res.status(500).json({message:e.message})

    }
}

const getAverageRating = async(req,res)=>{
    try{
        const movieId = req.params.id
        const userId = req.user.id
        const average = await reviewServices.getAverageRating(movieId,userId)
        res.status(200).json({movie_average_rating :average})

    }catch(e){
        res.status(500).json({message:e.message})

    }
}
const deleteReview = async(req,res)=>{
    try{
        const userId = req.user.id
        const movieId = req.params.movieId
        const reviewId = req.params.reviewId
        const success = await reviewServices.deleteReview(userId,movieId,reviewId)
        if(!success){
            return res.status(404).json({message:"Review Not Found"})
        }
        res.sendStatus(204)


    }catch(e){
        res.status(500).json({message:e.message})
    }
}
module.exports = {addReviewAndRating,updateReview,getAllReviews,getAverageRating,deleteReview}