// ==UserScript==
// @name         RefreshUptimeDashboard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Jordi
// @include      http*/sre.ml.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var currentTime = new Date().toISOString().slice(0, 10);
    var url = "http://sre.ml.com/#/reports-apps/slo/team/ml-pc-bpp-control/"+currentTime;

    setTimeout(function() {
        location.replace(url);
    }, 30000);
})();
