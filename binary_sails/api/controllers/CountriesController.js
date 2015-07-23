/**
 * CountriesController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getAllCountries: function(req, res) {
   		Countries.find().exec(function(err, countries){
    		 res.json(countries);
  		 });
	},

	addCountry: function(req, res) {
   		Countries.create({title: req.param('title')})
   		.exec(function(err, country) {
   			if (err) {
   				return res.json(err, 400)
   			} else
    		 res.json(country);
  		 });
	},

	bad: function(req, res) {
		res.badRequest('Sorry')
	},

	customView: function(req,res) {
		res.view('custom');
	},



 	_config: {
 	  actions: false,
 	  shortcuts: false,
 	  rest: false
 	}
};

