const mongoose = require("mongoose");
const User = require('./User')
const Movie = require('./Movie')
const reviewSchema = new mongoose.Schema(
    {userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    review: {
        type: String,
        required: true
    }},

  { timestamps: true }
);

const Rating = mongoose.model("Review", reviewSchema);

module.exports= Rating