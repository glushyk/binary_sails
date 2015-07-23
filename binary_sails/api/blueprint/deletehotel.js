function(req, res) {
		Hotels.destroy({title: req.param('name')}).exec(function(err, hotel) {
			res.send('Hotel deleted')
		})