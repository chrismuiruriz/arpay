var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

var phonegapApp = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        if (isIOS() || isAndroid()) {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },
    onDeviceReady: function () {
        navigator.splashscreen.hide();
        phonegapApp.initPluginDemo();
        phonegapApp.statusbar();

        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    },
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
    },
    initPluginDemo: function () {
        document.getElementById('app').setAttribute('style', 'display:block');
    },
    statusbar: function () {
    }
};

function isAndroid() {
    return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
    return navigator.userAgent.match(/(iPad|iPhone|iPod)/i) !== null;
}