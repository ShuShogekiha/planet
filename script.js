"use strict";

let menuClick = document.getElementsByClassName("menu-mobile-click")[0];

menuClick.addEventListener("click", () => {
    let getmenu = getComputedStyle(document.documentElement).getPropertyValue('--custClick');
    
    document.documentElement.style.setProperty('--custClick', 'grid');

    if(getmenu === "grid") document.documentElement.style.setProperty('--custClick', 'none');
});