var express = require('express');
var router = express.Router();
var usercontroller = require('../../controller/moviecontroller.js');

router.post('/addtoFav',usercontroller.addMovie);
router.get('/fetchFav',usercontroller.fetchFav);
router.post('/removeFav',usercontroller.removeMovie)
module.exports=router;
