const Movie = require('../database/sql/index')


exports.getAllMovies= function(req,res){
  
  Movie.getAll((error,result)=>{
    if(error){
        res.status(500).send(error)
    }
    else{
        res.status(200).send(result)
    }
  })

}
exports.addMovie = function(req,res){
    Movie.add(req.body,(err,result)=>{
        if(err){
          res.status(500).send(err)
        }
        else{
          res.json(result)
        }
      })
}
exports.deleteMovie=function(req,res){
    Movie.deleteone(req.params.id,(err,result)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.json(result)
        }
    })
}
exports.ModifyMovie=function(req,res){
    Movie.Modify(req.params.id,req.body,(err,result)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.json(result)
        }
    })
}