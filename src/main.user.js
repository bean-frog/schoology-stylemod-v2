// ==UserScript==
// @name         better schoology style mod
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pausd.schoology.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pausd.schoology.com
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js
// @require     https://code.jquery.com/ui/1.13.2/jquery-ui.js
// ==/UserScript==


(function() {
    'use strict';
    let windowstypeshi = document.createElement('div');
    windowstypeshi.style.height = '25px';
    windowstypeshi.style.width = "200px";
    windowstypeshi.style.backgroundColor = "#eeeeee";
    windowstypeshi.style.borderBottom = '1px solid black';
    let xbutton = document.createElement('button');
    xbutton.style.height = "25x";
    xbutton.style.width = "25px"
 let toggle = document.createElement('button');
 toggle.textContent = "hi";
    toggle.style.zIndex = '1000';
    toggle.style.height = '20px';
    toggle.style.position = "fixed";
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.style.width = '200px';
    colorInput.style.height = '30px';
    const menu = document.createElement('div');
    menu.style.width = '200px';
    menu.style.height = '200px';
    menu.style.backgroundColor = 'white';
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.left = '0';
    menu.style.zIndex = '999';
    menu.style.marginTop='50px';
    menu.style.border = '1px solid black'
    menu.appendChild(colorInput);
    document.body.insertAdjacentElement('beforebegin',toggle);
    document.body.insertAdjacentElement('beforebegin',menu);
    menu.insertAdjacentElement('afterbegin', windowstypeshi);
    colorInput.addEventListener('change', function() {
        const navigationBar = document.querySelector('.site-navigation');
        if (navigationBar) {
            navigationBar.style.backgroundColor = colorInput.value;
       }});
     $(toggle).click(function(){
  $(menu).toggle();
        });
   $( function() {
    $(menu).draggable();
  } );
})();
