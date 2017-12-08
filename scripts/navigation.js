let menu = document.querySelector('#offCanvasNav');
let timesX = document.querySelector('#times_nav_header');
let hamburger = document.querySelector(".hamburger");


//USE WHEN READY TO TEST
//myLink.addEventListener('touchend', arrow_carrot);


function toggleMenu() {
    menu.classList.toggle('displayBlock');
    timesX.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
}


function toggleSubMenu(parentObjName) {
    document.querySelector(("." + parentObjName + " .subCategoryMenu")).classList.toggle('displayBlock');
    document.querySelector(("." + parentObjName + " .subCategoryCaret")).classList.toggle('arrow_carrot');
}

function toggleSubMenuArt(parentObjName) {
    document.querySelector(("." + parentObjName + " .subCategoryArt")).classList.toggle('displayBlock');
    document.querySelector(("." + parentObjName + " .subCategoryArtCaret")).classList.toggle('arrow_carrot');
}
