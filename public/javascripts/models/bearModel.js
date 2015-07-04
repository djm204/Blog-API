function Bear(data) {
	this.name = ko.observable(data.name);
	this.type = ko.observable(data.type);
}

function BearViewModel() {
	//data
	var self = this;
	self.bears = ko.observableArray([]);
	self.newBearName = ko.observable();
	self.newBearType = ko.observable();
	
	//operations
	self.addBear = function () {
		self.bears.push(new Bear({
			name: this.newBearName(),
			type: this.newBearType()
		}));
		self.newBearName("");
		self.newBearType("");
	};

	self.removeBear = function (bear) {
		self.bears.remove(bear);
	};

	self.create = function () {
		var newBear = self.toModel();
		$.post("/bears", newBear)
			.done(function () {
			self.addBear(newBear);
		})
			.fail(console.log);
	}

	self.toModel = function () {
		return {
			name: self.newBearName(),
			type: self.newBearType()
		}
	}

	self.get = function () {
		$.getJSON("/bears", function(allData){
			var mappedBears = $.map(allData, 
				function(bear){ 
					return new Bear(bear)
					});
			self.bears(mappedBears);
		});
		setTimeout(function () {
			var sampleBear = new Bear({ name: "henry", type: "fluffy" });
			var otherSample = new Bear({ name: "henry", type: "cuddly" });
			self.bears.push(sampleBear);
			self.bears.push(otherSample);
		}, 2000);
	}
	
	// pseudo constructor
	self.get();
};



