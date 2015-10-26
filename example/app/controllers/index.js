var Woopra = require("com.stepupapps.tiwoopra");
//domain must be valid on your woopra account
var woopra = Woopra.create("test.example.com", {ssl: false});
woopra.identify({
        email: "developer@example.com",
        name: "A Developer",
        company: "Example Inc."
});
woopra.track('exampleApp', {
    eventProperty: 'startup'
});
$.index.open();