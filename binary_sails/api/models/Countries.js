/**
* Countries.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
  	title:{
  		type:'string',
  		unique:true,
      primaryKey:true
  	},

  	hotels:{
  		collection:'Hotels',
  		via:'country'
  	}
  }
};

