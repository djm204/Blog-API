var db = require('../storage/db');
//var jquery = require('../node_modules/jquery/dist/jquery');
var ko = require('knockout');

function Bear(data){
	this.name = ko.observable(data.name);
	this.type = ko.observable(data.type);
}

function BearViewModel(){
	//data
	var self = this;
	self.bears = ko.observableArray([]);
	self.newBearName = ko.observable();
	self.newBearType = ko.observable();
	
	//operations
	self.addBear = function(){
		self.bears.push(new Bear({
			name: this.newBearName(),
			type: this.newBearType()
		}));
		self.newBearName("");
		self.newBearType("");
	};
	
	self.removeBear = function(bear) {
		self.bears.remove(bear);	
	};
};



