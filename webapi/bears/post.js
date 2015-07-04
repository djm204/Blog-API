
var route = {
    method: "POST",
    path: "/bears",
    handler: function (request, res) {
        res("POST");
    }
};

module.exports = route;