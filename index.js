exports.create = function(key, options){
    var Woopra = require("woopra");
    var woopra = new Woopra(key, options);
    return woopra;
};
