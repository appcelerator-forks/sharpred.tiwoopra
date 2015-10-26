exports.create = function(key, options){
    var Woopra = require("./libs/woopra");
    var woopra = new Woopra(key, options);
    return woopra;
};
