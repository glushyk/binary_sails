function(req, res) {
   		Hotels.find({title: req.param('name')}).exec(function(err, hotels){
    		 res.json(hotels);

});