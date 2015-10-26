var http = require("http");
http.get(protocol + ':' + API_URL + endpoint + '?' + params.join('&'), function(res) {
    if ( typeof cb === 'function') {
        cb(null, res.statusCode);
    }
}).on('error', function(e) {
    if ( typeof cb === 'function') {
        cb(e, null);
    }
});
