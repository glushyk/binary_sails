/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  'get /countries':'CountriesController.getAllCountries',
  'get /hotels':'HotelsController.getAllHotels',
  'get /countries/:name/hotels':'HotelsController.getHotelsInCountry',
  'get /hotels/:name':'HotelsController.getHotelDescription',
  'post /country' : 'CountriesController.addCountry',
  'post /:country/hotel' : 'HotelsController.addHotel',
  'delete /hotels/:name' : 'HotelsController.deleteHotel',
  'put /hotels/:name' : 'HotelsController.updateDescription',

  'get /bad' : 'CountriesController.bad',
  'get /verybad' : 'CountriesController.customView'


  //BLUEPRINT

  //'get /countries': {blueprint: 'countries'},
  //'get /hotels': {blueprint: 'hotels'},
  //'get /countries/:name/hotels': {blueprint: 'hotelsbycountries'},
  //'get /hotels/:name': {blueprint: 'description'},
  //'post /country' : {blueprint: 'newcountry'},
  //'post /:country/hotel' : {blueprint: 'newhotel'},
  //'delete /hotels/:name' : {blueprint: 'deletehotel'},
  //'put /hotels/:name' :  {blueprint: 'update'},


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
