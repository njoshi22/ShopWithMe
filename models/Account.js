/***
 * Author: Valerio Gheri
 * Date: 13/03/2013
 * Account model
 */ 
var mongoose = require('mongoose');
var shoppingListSchema = require('./ShoppingList');

var accountSchema = mongoose.Schema({     
	username: {type: String, required: true, index: {unique: true}},
	password: {type: String, required: true},
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	creationDate: {type: Date, default: Date.now},
	lastLogin: {type: Date, default: null},
	isActive: {type: Boolean, default: true},
	// If confirmation email system is implemented,  
	// this can be set to false
	canLogin: {type: Boolean, default: true},  
	// Treated as a set
	shoppingLists: {type: [mongoose.Schema.ObjectId], default: []}
});
 
accountSchema.methods.getFullName = function() {
	return (this.firstName + ' ' + this.lastName);    
};

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;
