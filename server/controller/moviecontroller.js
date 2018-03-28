var mongoose = require("mongoose");
var movieSchema = require('../models/movieSchema');


var usersoperation = {
  addMovie: function(req,res){
      let movie = req.body;
      let movieNew = new movieSchema({
             Title : movie.Title,
              Poster : movie.Poster,
              imdbID:movie.imdbID,
              favourite:true
      });
      movieNew.save().then((doc) => {
        res.send("Added to favourite");
      },(err) => {
        console.log(err);
        res.send("Already in favourites");
      });
  },

fetchFav: function(req,res){
  movieSchema.find().then((err,data)=>{
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
    }
  })
},

removeMovie: function(req,res){
   movieSchema.findOne({imdbID:req.body.imdbID}).remove(
    function(err,data){
          if(err){
            console.log(err);
          }
          else{
            res.send("Removed from favourites");
         }
    }
  )
}

};

module.exports = usersoperation;
