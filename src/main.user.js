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


/* CSS TO ADD THAT THIS DOESNT WORK WITHOUT

nav._1tpub._3mp5E._24W2g.util-justify-content-space-between-3euFK {
background-color: transparent;
}

header._1SIMq._3v0y7._349XD {
  background-color: transparent;
}

button._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.fjQuT.uQOmx {
  background-color: transparent;
}

a._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.util-line-height-six-3lFgd.util-text-decoration-none-1n0lI.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.sExtlink-processed {
    background-color: transparent;

}

a._2JX1Q._1LY8n._2SVA_._9GDcm.util-height-six-3PHnk.util-width-sixteen-JiX3r.sExtlink-processed {
  background-image: url(https://raw.githubusercontent.com/bean-frog/schoology-stylemod-v2/main/img/pahs.png);
  background-size: 145px;
  background-position-y: -10px;
}

a._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.util-line-height-six-3lFgd.util-text-decoration-none-1n0lI.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y {
  background-color: transparent;
}
*/

/* IMPORTANT THINGS IDK
.clearfix - opacity layer
#body - background stuff
*/
(function() {
    'use strict';
  $(document).ready(function() {
        $("nav._1tpub._3mp5E._24W2g.util-justify-content-space-between-3euFK").css("background-color", "transparent");
        $("header._1SIMq._3v0y7._349XD").css('background-color', 'transparent');
        $("button._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.fjQuT.uQOmx").css('background-color', "transparent");
        $("a._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.util-line-height-six-3lFgd.util-text-decoration-none-1n0lI.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.sExtlink-processed").css("background-color","transparent");
        $("a._2JX1Q._1LY8n._2SVA_._9GDcm.util-height-six-3PHnk.util-width-sixteen-JiX3r.sExtlink-processed").css("background-image","url(https://raw.githubusercontent.com/bean-frog/schoology-stylemod-v2/main/img/pahs.png)");
        $("a._2JX1Q._1LY8n._2SVA_._9GDcm.util-height-six-3PHnk.util-width-sixteen-JiX3r.sExtlink-processed").css("background-size","145px");
        $("a._2JX1Q._1LY8n._2SVA_._9GDcm.util-height-six-3PHnk.util-width-sixteen-JiX3r.sExtlink-processed").css("background-position-y","-10px");
        $("a._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.util-line-height-six-3lFgd.util-text-decoration-none-1n0lI.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y").css("background-color","transparent");
        console.log('hi');
    });
let fsize1 = "25px";
let fsize2 = "20px";
let fsize3 = "15px";
let fsize4 = "10px";
    let windowstypeshi = document.createElement('div');
    windowstypeshi.style.height = '25px';
    windowstypeshi.style.width = "500px";
    windowstypeshi.style.backgroundColor = "#eeeeee";
    windowstypeshi.style.borderBottom = '1px solid black';
    windowstypeshi.style.display = 'flex';
    windowstypeshi.style.justifyContent = 'flex-end';
    windowstypeshi.style.alignItems = "center";
    windowstypeshi.setAttribute('id', 'bar');
    let windowname = document.createElement("h3");
    windowname.textContent = "beanfrog-is-the-best.exe";
    windowname.style.fontFamily = "Helvetica";
    windowname.style.textAlign = "left";
    windowname.style.marginTop = "3px";
    windowname.style.marginLeft = "3px";
    windowname.style.marginRight = "auto";
    windowname.style.fontFamily = "'Open Sans', sans-serif";
    let xbutton = document.createElement('button');
    xbutton.style.height = "25px";
    xbutton.style.width = "30px";
    xbutton.innerHTML = "&times;";
    xbutton.style.fontSize = '20px';
    xbutton.style.backgroundColor = 'transparent';
    xbutton.style.border = "none";
    xbutton.style.position = "relative";
    xbutton.style.display = "inline-block";
    xbutton.addEventListener('mouseover', function() {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    });
    xbutton.addEventListener('mouseout', function() {
        this.style.backgroundColor = "transparent";
        this.style.color = "black";
    });

    xbutton.addEventListener('click', function() {
        menu.style.display = "none";
    });
    let goofyahhuselessbutton1 = document.createElement('button');
    goofyahhuselessbutton1.style.height = "25px";
    goofyahhuselessbutton1.style.width = "30px";
    goofyahhuselessbutton1.innerHTML = "&#x25A1;";
    goofyahhuselessbutton1.style.fontSize = '25px';
    goofyahhuselessbutton1.style.backgroundColor = 'transparent';
    goofyahhuselessbutton1.style.border = "none";
    goofyahhuselessbutton1.style.position = "relative";
    goofyahhuselessbutton1.style.display = "inline-block";
    goofyahhuselessbutton1.style.marginBottom = "4px"

    let goofyahhuselessbutton2 = document.createElement('button');
    goofyahhuselessbutton2.style.height = "25px";
    goofyahhuselessbutton2.style.width = "30px";
    goofyahhuselessbutton2.innerHTML = "&#x2012;";
    goofyahhuselessbutton2.style.fontSize = '25px';
    goofyahhuselessbutton2.style.backgroundColor = 'transparent';
    goofyahhuselessbutton2.style.border = "none";
    goofyahhuselessbutton2.style.position = "relative";
    goofyahhuselessbutton2.style.display = "inline-block";
    goofyahhuselessbutton2.style.marginTop = "2px"

    let toggle = document.createElement('button');
    toggle.textContent = "hi";
    toggle.style.zIndex = '1000';
    toggle.style.height = '20px';
    toggle.style.position = "fixed";
    const colorInput = document.createElement('input');
    let colorlabel = document.createElement('label');
    colorlabel.setAttribute('for', colorInput);
    colorlabel.textContent = "Header Color:  "
    colorlabel.style.fontSize = fsize3;
    colorInput.type = 'color';
    colorInput.style.width = '30px';
    colorInput.style.height = '20px';
    const colorInputBody = document.createElement('input');
    let colorlabelbody = document.createElement('label');
    colorlabelbody.setAttribute('for', colorInputBody);
    colorlabelbody.innerHTML = "<br>Background Color:  "
    colorlabelbody.style.fontSize = fsize3;
    colorInputBody.type = 'color';
    colorInputBody.style.width = '30px';
    colorInputBody.style.height = '20px';
    const menu = document.createElement('div');
    menu.style.width = '500px';
    menu.style.height = '300px';
    menu.style.backgroundColor = 'white';
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.left = '0';
    menu.style.zIndex = '999';
    menu.style.marginTop = '50px';
    menu.style.border = '1px solid black';
    menu.style.textAlign = "left";
    menu.style.fontFamily = "Helvetica";
const bgclear = document.createElement("button");
    bgclear.textContent = "Clear";
    bgclear.setAttribute('id', 'clearimage');
    bgclear.style.fontSize = fsize3;
    const bgfileinput = document.createElement('input');
    let bgfilelabel = document.createElement('label');
    bgfilelabel.setAttribute('for', bgfileinput);
    bgfilelabel.innerHTML = "<br>Custom Background:  "
    bgfilelabel.style.fontSize = fsize3;
    bgfilelabel.style.fontFamily = "Helvetica";
    bgfileinput.type = 'file';
    bgfileinput.setAttribute('accept', '.png, .jpg, .jpeg, .webp');
    bgfileinput.style.height = '30px';
    const contentopacityslider = document.createElement('input');
    contentopacityslider.setAttribute('type', 'range');
    contentopacityslider.setAttribute('min', '1');
    contentopacityslider.setAttribute('max', '100');
    contentopacityslider.setAttribute('value', '100');
    contentopacityslider.style.height = "10px"
    const opacitylabel = document.createElement("label");
    opacitylabel.setAttribute('for', contentopacityslider);
    opacitylabel.innerHTML = "<br>Content Opacity:  ";
    opacitylabel.style.fontSize = fsize3;

]
    menu.appendChild(colorInput);
    menu.appendChild(colorInputBody);
    menu.appendChild(bgfileinput);
    menu.appendChild(contentopacityslider);
    colorInput.insertAdjacentElement('beforebegin', colorlabel);
    colorInputBody.insertAdjacentElement('beforebegin', colorlabelbody);
    bgfileinput.insertAdjacentElement('beforebegin', bgfilelabel);
    bgfilelabel.insertAdjacentElement('afterend', bgclear);
    contentopacityslider.insertAdjacentElement('beforebegin', opacitylabel);
    document.body.insertAdjacentElement('beforebegin', toggle);
    document.body.insertAdjacentElement('beforebegin', menu);
    menu.insertAdjacentElement('afterbegin', windowstypeshi);
    windowstypeshi.insertAdjacentElement('beforeend', xbutton);
    windowstypeshi.insertAdjacentElement('afterbegin', windowname);
    xbutton.insertAdjacentElement('beforebegin', goofyahhuselessbutton1);
    goofyahhuselessbutton1.insertAdjacentElement('beforebegin', goofyahhuselessbutton2);
    colorInput.addEventListener('input', function() {
        const navigationBar = document.querySelector('.site-navigation');
        if (navigationBar) {
            navigationBar.style.backgroundColor = colorInput.value;
        }
    });
    $(toggle).click(function() {
        $(menu).toggle();
    });
    $(function() {
        $(menu).draggable();
    });
    var duration = 100;
    var menuContents = $(menu).children().not('#bar');
    var animationProperties1 = {
        height: '5px',
        width: '500px',
    };
    $(goofyahhuselessbutton2).click(function() {
        menuContents.hide();
        $(menu).animate(animationProperties1, duration);
    });
    var animationProperties2 = {
        height: '300px',
        width: '500px',
    };
    $(goofyahhuselessbutton1).click(function() {
        menuContents.show();
        $(menu).animate(animationProperties2, duration);
    });
    $(document).ready(function() {
        var fileInput = $(bgfileinput);
        var body = $('#body');
        fileInput.on('change', function() {
            var file = fileInput[0].files[0];
            var reader = new FileReader();
            reader.onload = function() {
                body.css('background-image', 'url(' + reader.result + ')');
                body.css('background-attachment', 'fixed');
                body.css('background-size', 'cover');
                body.css('background-repeat', 'no-repeat');
            };
            reader.readAsDataURL(file);
        });
    });
       $(document).ready(function() {
  // Get the color input element
  var deeznutscolor = $(colorInputBody);

  // Add an event listener to the color input element
  deeznutscolor.on('input', function() {
    // Get the value of the color input
    var colorValue = deeznutscolor.val();

    // Set the background color of the body to the color value
    $('#body').css('background-color', colorValue);
  });
});
$(document).ready(function() {
  $(contentopacityslider).on('input', function() {
    var rangeValue = $(this).val();
    $('.clearfix').css('opacity', rangeValue / 100);
  });
});

$(document).ready(function() {
    $('#clearimage').click(function() {
        $('#body').css('background-image', "");
    });
});


})();
