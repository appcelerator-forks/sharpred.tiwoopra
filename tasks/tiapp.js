module.exports = function(grunt) {
    grunt.registerTask('tiapp', 'modify newly created tiapp.xml properties', function() {
        var tiappPath = 'example/tiapp.xml',
            tiapp,
            packagePath = "" + process.cwd() + '/package.json',
            packageData,
            versions;
        tiapp = require('tiapp.xml').load(tiappPath);
        packageData = grunt.file.readJSON(packagePath);
        versions = packageData.version.split(".");
        tiapp.version = packageData.version;
        tiapp.android.versionName = packageData.version;
        tiapp.android.versionCode = parseInt(versions[2], 10);
        tiapp.name = packageData.description;
        tiapp.android.minSdkVersion = "16";
        tiapp.android.targetSdkVersion = "22";
        tiapp.android["package"] = packageData.exampleAppId;
        tiapp.name = "com.stepupapps.tiwoopra.example";
        grunt.config.set('app_version', packageData.version);
        //add the modules we need
        tiapp.setModule('com.stepupapps.tiwoopra', {
            version : packageData.version,
            platform : 'commonjs'
        });
        tiapp.setDeploymentTargets({
            android : true,
            blackberry : false,
            ipad : false,
            iphone : true,
            mobileweb : false,
            tizen : false
        });
        tiapp.sdkVersion = packageData.titaniumManifest.tisdk;
        tiapp.url = "http://www.stepupsoftware.co.uk";
        tiapp.write();
    });
};