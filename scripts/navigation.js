let menu = document.querySelector('#offCanvasNav');
let timesX = document.querySelector('#times_nav_header');
let hamburger = document.querySelector(".hamburger");
let subCatMenu = document.querySelector('#subCategoryMenu');
let subMenuArt = document.querySelector('#subCategoryArt');
let subCaretCat = document.querySelector('#subCategoryCaret');
let subCaretArt = document.querySelector('#subCategoryArtCaret');


//USE WHEN READY TO TEST
//myLink.addEventListener('touchend', arrow_carrot);


function toggleMenu() {
    menu.classList.toggle('displayBlock');
    timesX.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
}


function toggleSubMenu() {
    subCatMenu.classList.toggle('displayBlock');
    subCaretCat.classList.toggle('arrow_carrot');
}

function toggleSubMenuArt() {
    subMenuArt.classList.toggle('displayBlock');
    subCaretArt.classList.toggle('arrow_carrot');
}
