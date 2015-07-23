function(req, res) {
   		Hotels.create( {title: req.param('title'), 
   			   			country: req.param('country'), 
   			   			description: req.param('description')})
   		.exec(function(err, hotel) {
   			if (err) {
   				return res.json(err, 400)
   			} else
    		 res.json(hotel);
});