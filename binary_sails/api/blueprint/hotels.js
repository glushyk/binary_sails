function(req, res) {
   		Hotels.find().exec(function(err, hotels){
    		 res.json(hotels);
 });