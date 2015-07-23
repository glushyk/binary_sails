/**
 * HotelsController
 *
 * @description :: Server-side logic for managing hotels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getAllHotels: function(req, res) {
   		Hotels.find().exec(function(err, hotels){
    		 res.json(hotels);
  		 });
	},

	getHotelsInCountry: function(req, res) {
   		Hotels.find({country: req.param('name')}).exec(function(err, hotels){
    		 res.json(hotels);
  		 });
	},

	getHotelDescription: function(req, res) {
   		Hotels.find({title: req.param('name')}).exec(function(err, hotels){
    		 res.json(hotels);

  		 });
	},

	addHotel: function(req, res) {
   		Hotels.create( {title: req.param('title'), 
   			   			country: req.param('country'), 
   			   			description: req.param('description')})
   		.exec(function(err, hotel) {
   			if (err) {
   				return res.json(err, 400)
   			} else
    		 res.json(hotel);
  		 });
	},

	deleteHotel: function(req, res) {
		Hotels.destroy({title: req.param('name')}).exec(function(err, hotel) {
			res.send('Hotel deleted')
		})
	},

	updateDescription: function(req, res) {
		Hotels.update({title: req.param('name')}, {description:req.param('description')}).exec(function(err, hotel) {
			res.send('Description updated')
		})
	},


	_config: {
 	  actions: false,
 	  shortcuts: false,
 	  rest: false
 	}
	
};

