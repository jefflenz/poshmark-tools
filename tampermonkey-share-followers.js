// ==UserScript==
// @name         Poshmark Share - Followers
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Make sharing easier
// @author       Jeff
// @match        https://poshmark.com/closet/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://raw.githubusercontent.com/jefflenz/poshmark-tools/master/tampermonkey-share-followers.js
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    jQuery.noConflict();

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle(
        '.share-wrapper-container {background-color: green; width: 250px; height: 60px;} '
        + '.share-modal, .simple-modal {width: 100%; height: 100%; right: 0; margin: 0; max-height: 2000px} '
        + '.internal-share-container {min-height:1000px} '
        + '.modal__header {display: none} '
        + '.item__details, .tile__covershot, .tile__creator {display: none !important} '

        + '.share-wrapper-container{position: absolute; top: 0; left: 0; width: 100%; min-height: 800px; } '
        + '.social-action-bar__like, .jc--sb {display: none !important} '
        + '.social-action-bar__share {display: inline-block; background-color: green; width: 250px; height: 60px} '
        + ' '
        + '[data-et-name="share_poshmark"]{display: inline-block} '
        + '[data-et-name="share_poshmark_poshparty"]{display: none} '
    );

    jQuery('[data-et-name="share"]').click(function (e) {
        console.log(jQuery(this).parent().parent().parent().parent().hide());
    });
})();
