function(req, res) {
   		Hotels.find({country: req.param('name')}).exec(function(err, hotels){
    		 res.json(hotels);
});