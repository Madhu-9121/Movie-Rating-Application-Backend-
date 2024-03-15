const movieServices = require('../services/movieServices')

const addMovie= async(req,res)=>{
    try {
        const { title, director, genre, releaseYear,description } = req.body;
        const userId = req.user.id;
    
        const movie = await movieServices.addMovie({
            title, director, genre, releaseYear,description,userId
        });
    
        console.log("movie created", movie);
    
        res.status(201).json(movie);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}

const getallMovies = async(req,res)=>{
    try{
        const userId = req.user.id
        const data = await movieServices.getall(userId)
        res.status(200).json(data)

    }catch(e){
        res.status(500).json({message:e.message})

    }
}

const getMovieById = async(req,res)=>{
    console.log("called id cntr")
    try{
        const { id } = req.params;
        const userId = req.user.id;
        const movie = await movieServices.getById(id,userId)
        res.status(200).json(movie)

    }catch(e){
        res.status(500).json({message:e.message})
    }

}
const deleteMovie =async(req,res)=>{
    try{
        const userId = req.user.id
        const{id}=req.params
        const success = await movieServices.deleteMovieByID(userId,id)
        if(!success){
            return res.status(404).json({message:"Movie Not Found"})
        }
        res.sendStatus(204)

    }catch(e){
        res.status(500).json({message:e.message})

    }


}

const updateMovie = async(req,res)=>{
    try{
        const userId = req.user.id
        const {id} = req.params
        const updatedData = req.body
        const updatedMovie = await movieServices.updateMovieContent(userId,id,updatedData)
        if(!updatedMovie){
            res.status(404).json({message:"movie not found"})
        }
        res.status(200).json(updatedMovie)

    }catch(e){
        res.status(500).json({message:e.message})

    }
}
module.exports= {addMovie,getallMovies,getMovieById,deleteMovie,updateMovie}