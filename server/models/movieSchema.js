var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
 let Schema = mongoose.Schema({
    Title: String,
    Poster: String,
    imdbID:{type:String,unique:true},
    favourite:Boolean
});
Schema.plugin(uniqueValidator);
let list = mongoose.model("movieSchema", Schema);
module.exports = list;
