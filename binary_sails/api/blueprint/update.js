function(req, res) {
		Hotels.update({title: req.param('name')}, {description:req.param('description')}).exec(function(err, hotel) {
			res.send('Description updated')
})