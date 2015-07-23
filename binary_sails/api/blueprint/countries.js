function(req, res) {
   		Countries.find().exec(function(err, countries){
    		 res.json(countries);
});