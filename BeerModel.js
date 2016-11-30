var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beerSchema = new Schema({
	id: Number,
	name: {type:String},
	abv: {type:Number},
	style: {type:String},
	image_url: {type:String},
	rate: {type:Number}
});

var Beer = mongoose.model("Beer", beerSchema);
module.exports = Beer;//return