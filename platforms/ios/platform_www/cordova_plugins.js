cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.OrientationLock/www/orientationLock.js",
        "id": "com.phonegap.plugins.OrientationLock.OrientationLock",
        "pluginId": "com.phonegap.plugins.OrientationLock",
        "clobbers": [
            "OrientationLock"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});