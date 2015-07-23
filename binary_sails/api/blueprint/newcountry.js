function(req, res) {
   		Countries.create({title: req.param('title')})
   		.exec(function(err, country) {
   			if (err) {
   				return res.json(err, 400)
   			} else
    		 res.json(country);
});