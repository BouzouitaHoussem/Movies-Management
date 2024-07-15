const movieRouter = require("express").Router();
const movieController = require("../Controller/index");


movieRouter.get('/getAll',movieController.getAllMovies)
movieRouter.post('/add',movieController.addMovie)
movieRouter.delete('/delete/:id',movieController.deleteMovie)
movieRouter.put('/Modify/:id',movieController.ModifyMovie)

module.exports=movieRouter