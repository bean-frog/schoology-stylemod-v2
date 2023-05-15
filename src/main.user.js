(function() {
    'use strict';
    $(document).ready(function() {
        // IMPORTANT CSS THAT SHIT BREAKS WITHOUT
        $("nav._1tpub._3mp5E._24W2g.util-justify-content-space-between-3euFK").css("background-color", "transparent");
        $("header._1SIMq._3v0y7._349XD").css('background-color', 'transparent');
        $("button._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.fjQuT.uQOmx").css('background-color', "transparent");
        $("a._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.util-line-height-six-3lFgd.util-text-decoration-none-1n0lI.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.sExtlink-processed").css("background-color", "transparent");
        $("a._2JX1Q._1LY8n._2SVA_._9GDcm.util-height-six-3PHnk.util-width-sixteen-JiX3r.sExtlink-processed").css("background-image", "url(https://raw.githubusercontent.com/bean-frog/schoology-stylemod-v2/main/img/pahs.png)");
        $("a._2JX1Q._1LY8n._2SVA_._9GDcm.util-height-six-3PHnk.util-width-sixteen-JiX3r.sExtlink-processed").css("background-size", "145px");
        $("a._2JX1Q._1LY8n._2SVA_._9GDcm.util-height-six-3PHnk.util-width-sixteen-JiX3r.sExtlink-processed").css("background-position-y", "-10px");
        $("a._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.util-line-height-six-3lFgd.util-text-decoration-none-1n0lI.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y").css("background-color", "transparent");
        $("#body").css("background-attachment", "fixed");
        $("#body").css("background-size", "cover");

        console.log('hi');
    });
    let customclasses = document.createElement('style');
    customclasses.innerHTML = `
    .menuItem {
    height: fit-content;
    width: fit-content;
    padding: 3px;
    background-color: #232323;
    border: 1px solid black
    }
    `
    $(document).ready(function() {
        document.head.appendChild(customclasses);
    });
    let gradesbutton = document.querySelectorAll('button._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.util-fill-current-color-2w3fJ.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.fjQuT.uQOmx');
    let grades = gradesbutton[0];
    const observer = new MutationObserver((mutationsList, observer) => {
        if (grades) {
            let openstyles = document.querySelector('#openstyles');
            if (!openstyles) {
                openstyles = document.createElement('button');
                openstyles.setAttribute('id', 'openstyles');
                openstyles.textContent = "test";
                grades.insertAdjacentElement('beforebegin', openstyles);
            }
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    if (grades) {
        let openstyles = document.querySelector('#openstyles');
        if (!openstyles) {
            openstyles = document.createElement('button');
            openstyles.setAttribute('id', 'openstyles');
            openstyles.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #ffffff;transform:translateY(7px) translateX(-5px) ;msFilter:;"><path  d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z" stroke-width="2"></path><path stroke-width="2" d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z" stroke-width="2"></path></svg>      `
            openstyles.style.backgroundColor = "transparent";
            openstyles.style.color = "#fff"
            openstyles.style.border = "none";
            grades.insertAdjacentElement('beforebegin', openstyles);
        }
    }
    //Epic gamer gaming moment
     let windowstypeshi2 = document.createElement('div');
    windowstypeshi2.style.height = '25px';
    windowstypeshi2.style.width = "100%";
    windowstypeshi2.style.backgroundColor = "#eeeeee";
    windowstypeshi2.style.borderBottom = '1px solid black';
    windowstypeshi2.style.display = 'flex';
    windowstypeshi2.style.justifyContent = 'flex-end';
    windowstypeshi2.style.alignItems = "center";
    windowstypeshi2.setAttribute('id', 'bar');
    let windowname2 = document.createElement("h3");
    windowname2.textContent = "slope.exe";
    windowname2.style.fontFamily = "Helvetica";
    windowname2.style.textAlign = "left";
    windowname2.style.marginTop = "3px";
    windowname2.style.marginLeft = "3px";
    windowname2.style.marginRight = "auto";
    windowname2.style.fontFamily = "'Open Sans', sans-serif";
    let xbutton2 = document.createElement('button');
    xbutton2.style.height = "25px";
    xbutton2.style.width = "30px";
    xbutton2.innerHTML = "&times;";
    xbutton2.style.fontSize = '20px';
    xbutton2.style.backgroundColor = 'transparent';
    xbutton2.style.border = "none";
    xbutton2.style.position = "relative";
    xbutton2.style.display = "inline-block";
    xbutton2.addEventListener('mouseover', function() {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    });
    xbutton2.addEventListener('mouseout', function() {
        this.style.backgroundColor = "transparent";
        this.style.color = "black";
    });
    xbutton2.addEventListener('click', function() {
        menu2.style.display = "none";
    });
    let goofyahhuselessbutton3 = document.createElement('button');
    goofyahhuselessbutton3.style.height = "25px";
    goofyahhuselessbutton3.style.width = "30px";
    goofyahhuselessbutton3.innerHTML = "&#x25A1;";
    goofyahhuselessbutton3.style.fontSize = '25px';
    goofyahhuselessbutton3.style.backgroundColor = 'transparent';
    goofyahhuselessbutton3.style.border = "none";
    goofyahhuselessbutton3.style.position = "relative";
    goofyahhuselessbutton3.style.display = "inline-block";
    goofyahhuselessbutton3.style.marginBottom = "4px"
    let goofyahhuselessbutton4 = document.createElement('button');
    goofyahhuselessbutton4.style.height = "25px";
    goofyahhuselessbutton4.style.width = "30px";
    goofyahhuselessbutton4.innerHTML = "&#x2012;";
    goofyahhuselessbutton4.style.fontSize = '25px';
    goofyahhuselessbutton4.style.backgroundColor = 'transparent';
    goofyahhuselessbutton4.style.border = "none";
    goofyahhuselessbutton4.style.position = "relative";
    goofyahhuselessbutton4.style.display = "inline-block";
    goofyahhuselessbutton4.style.marginTop = "2px";
    const menu2 = document.createElement('div');
    menu2.style.width = '500px';
    menu2.style.height = '300px';
    menu2.style.backgroundColor = 'white';
    menu2.style.position = 'fixed';
    menu2.style.top = '0';
    menu2.style.left = '0';
    menu2.style.zIndex = '999';
    menu2.style.marginTop = '50px';
    menu2.style.border = '1px solid black';
    menu2.style.textAlign = "left";
    menu2.style.fontFamily = "Helvetica";
    menu2.style.display = 'none';
    menu2.innerHTML = `<iframe style='height:100%; width:100%;' src="https://gkieran.github.io/basedgaming/embeds/slope"></iframe>`
    document.body.appendChild(menu2);
     menu2.insertAdjacentElement('afterbegin', windowstypeshi2);
    windowstypeshi2.insertAdjacentElement('beforeend', xbutton2);
    windowstypeshi2.insertAdjacentElement('afterbegin', windowname2);
    xbutton2.insertAdjacentElement('beforebegin', goofyahhuselessbutton3);
    goofyahhuselessbutton3.insertAdjacentElement('beforebegin', goofyahhuselessbutton4);
     var animationProperties3 = {
        height: '5px',
        width: '500px',
    };
    $(goofyahhuselessbutton4).click(function() {
        menuContents.hide();
        $(menu2).animate(animationProperties3, duration);
    });
    var animationProperties4 = {
        height: '300px',
        width: '500px',
    };
    $(goofyahhuselessbutton3).click(function() {
        menuContents.show();
        $(menu2).animate(animationProperties4, duration);
    });
 document.addEventListener('keydown', function(event) {
        if (event.keyCode === 83) {
            $(menu2).toggle();
        }
    });
    //end
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
    windowname.textContent = "themes.exe";
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
    let headerbg = document.querySelector('.site-navigation');
    let headercolorpicker = document.createElement('input');
    headercolorpicker.setAttribute('type', 'color');
    let bodybg = document.querySelector('#body');
    let bgimg = document.createElement('input');
    bgimg.setAttribute('type', 'file');
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
    menu.style.display = "none"
    menu.insertAdjacentElement('afterbegin', headercolorpicker);
    menu.insertAdjacentElement('afterbegin', bgimg);
    const opacityslider = document.createElement('input');
    opacityslider.type = 'range';
    opacityslider.id = 'opacity-slider';
    opacityslider.min = '0';
    opacityslider.max = '1';
    opacityslider.step = '0.1';
    opacityslider.value = '1';
    const clearfix = document.querySelector('.clearfix');
    headercolorpicker.insertAdjacentElement('afterend', opacityslider)
    document.body.insertAdjacentElement('beforebegin', menu);
    menu.insertAdjacentElement('afterbegin', windowstypeshi);
    windowstypeshi.insertAdjacentElement('beforeend', xbutton);
    windowstypeshi.insertAdjacentElement('afterbegin', windowname);
    xbutton.insertAdjacentElement('beforebegin', goofyahhuselessbutton1);
    goofyahhuselessbutton1.insertAdjacentElement('beforebegin', goofyahhuselessbutton2);
    let bgilabel = document.createElement("label");
    bgilabel.setAttribute('for', bgimg);
    bgilabel.innerHTML = '<br><h2 style="font-family: "Helvetica">Background Image</h2>'
    bgimg.insertAdjacentElement('beforebegin', bgilabel);
    let hclabel = document.createElement('label');
    hclabel.setAttribute('for', headercolorpicker)
    hclabel.innerHTML = '<br><br><h2 style="font-family: "Helvetica">Header Color</h2>';
    headercolorpicker.insertAdjacentElement('beforebegin', hclabel);
    let colabel = document.createElement('label');
    colabel.setAttribute('for', opacityslider)
    colabel.innerHTML = '<br><br><h2 style="font-family: "Helvetica">Content Opacity</h2>';
    opacityslider.insertAdjacentElement('beforebegin', colabel);
    //save and load header bg from local
    $(document).ready(function() {
        if (localStorage.getItem("headercolor")) {
            headerbg.style.backgroundColor = localStorage.getItem("headercolor");
        }
    });
    headercolorpicker.addEventListener("input", () => {
        const headercolor = headercolorpicker.value;
        headerbg.style.backgroundColor = headercolor;
        localStorage.setItem("headercolor", headercolor);
    });
    //---
    // content opacity handler
    $(document).ready(function() {
        if (localStorage.getItem("contentopacity")) {
            clearfix.style.opacity = localStorage.getItem("contentopacity");
        }
    });
    opacityslider.addEventListener("input", () => {
        const opacityvalue = opacityslider.value;
        clearfix.style.opacity = opacityvalue;
        localStorage.setItem("contentopacity", opacityvalue);
    });
    bgimg.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            const base64 = event.target.result;
            console.log(base64);
            bodybg.style.backgroundImage = `url(${base64})`;
            localStorage.setItem("bodybg", base64);
        }
        reader.readAsDataURL(file);
    });
    $(document).ready(function() {
        if (localStorage.getItem("bodybg")) {
            bodybg.style.backgroundImage = `url(${localStorage.getItem("bodybg")})`;
        }
    });
    let resetbody = document.createElement('button');
    resetbody.textContent = 'Reset';
    bgimg.insertAdjacentElement('afterend', resetbody);
    resetbody.addEventListener('click', function() {
        localStorage.removeItem('bodybg');
        bodybg.style.backgroundImage = '';
    });
    $(function() {
        $(menu).draggable();
        $(menu2).draggable();
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
    let openstyles = document.querySelector('#openstyles')
    $(openstyles).click(function() {
        $(menu).toggle();
    })
    const textBox = document.createElement('input');
    textBox.type = 'text';
    const filterButton = document.createElement('button');
    filterButton.textContent = 'Filter Posts';
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear Filter';
    let htlabel = document.createElement('label');
    htlabel.setAttribute('for', textBox)
    htlabel.innerHTML = '<br><br><h2 style="font-family: "Helvetica">Hide Teacher</h2>';
    opacityslider.insertAdjacentElement('afterend', htlabel);
    menu.appendChild(textBox);
    textBox.insertAdjacentElement('afterend', filterButton)
    filterButton.insertAdjacentElement('afterend', clearButton)
    filterButton.addEventListener('click', filterPosts);
    clearButton.addEventListener('click', clearFilter);
    function filterPosts() {
        const keyword = textBox.value.trim();
        localStorage.setItem('filterKeyword', keyword);
        const updatePostDivs = document.getElementsByClassName('s-edge-type-update-post');
        for (const div of updatePostDivs) {
            div.style.display = '';
        }
        for (const div of updatePostDivs) {
            const firstLink = div.querySelector('a');
            if (firstLink && firstLink.title.trim() === keyword) {
                div.style.display = 'none';
            }
        }
    }
    function clearFilter() {
        localStorage.removeItem('filterKeyword');
        const updatePostDivs = document.getElementsByClassName('s-edge-type-update-post');
        for (const div of updatePostDivs) {
            div.style.display = '';
        }
    }
    function handleMutations(mutationsList, observer) {
        const updatePostDivs = document.getElementsByClassName('s-edge-type-update-post');
        if (updatePostDivs.length > 0) {
            const storedKeyword = localStorage.getItem('filterKeyword');
            if (storedKeyword) {
                textBox.value = storedKeyword;
                filterPosts();
            }
            observer2.disconnect();
        }
    }
    const observer2 = new MutationObserver(handleMutations);
    observer2.observe(document.body, {
        childList: true,
        subtree: true
    });
})();