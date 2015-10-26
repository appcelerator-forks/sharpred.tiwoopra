exports.get = function(url, cb) {
    var client = Ti.Network.createHTTPClient({
        onload: function(response) {
            cb(null, response);
        },
        onerror: function(error) {
            cb(error, null);
        }
    });
    client.open("GET", url);
    client.send();
};