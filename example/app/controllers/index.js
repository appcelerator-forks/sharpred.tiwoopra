var Woopra = require("com.stepupapps.tiwoopra");
var woopra = Woopra.create("performapp.stepupapps.com", {ssl: false});
woopra.track('exampleApp', {
    eventProperty: 'startup'
});
$.index.open();