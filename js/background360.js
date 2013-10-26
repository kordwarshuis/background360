/*
 * background360
 * Copyright (c) 2013 Kor Dwarshuis (dwarshuis.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */
var background360 = (function () {
    var backgroundImageDimensions = {
        width: 0,
        height: 0
    };
//    var viewportWidth = verge.viewportW();
    var viewportHeight = verge.viewportH();
    var rotateX = function (deg1) {
        document.querySelector("body").style.backgroundPositionX = deg1 * backgroundImageDimensions.width / 360 - 643 + "px";
    };
    var rotateY = function (deg2) {
        document.querySelector("body").style.backgroundPositionY = -backgroundImageDimensions.height + viewportHeight -
                deg2 * (backgroundImageDimensions.height / 340) + "px";
    };

    document.querySelector("body").style.backgroundRepeat = "repeat-x";

    function init() {
        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", function (e) {
                rotateX(e.alpha);
                rotateY(e.gamma);
            }, false);
        }
    }

    return {
        setBackgroundImage: function (backgroundImage) {
            document.querySelector("body").style.backgroundImage = backgroundImage;
        },
        setBackgroundImageDimensions: function (theDimensions) {
            backgroundImageDimensions.width = theDimensions.width;
            backgroundImageDimensions.height = theDimensions.height;
        },
        init: init
    };
}());

// configuration
background360.setBackgroundImageDimensions({width: 2000, height: 966}); // the width and height of the background image
background360.setBackgroundImage('url("img/360-background.jpg")'); // the background image
// start
background360.init();