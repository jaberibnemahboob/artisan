// LIST OF ALL JS TO BE USE FOR EACH PAGE
let jsList = [
    "scripts/common_functions.js",
    "scripts/navigation.js",
    "https://use.fontawesome.com/3bf73e391b.js",
    "scripts/effects.js",
    "scripts/moving_parallax.js",
    "scripts/json_retriver.js",
    "scripts/remarke_owncarousel.js",
    "3rdparty/smooth-scroll/dist/js/smooth-scroll.min.js",
    "3rdparty/smooth-scroll/dist/js/smooth-scroll.polyfills.min.js",
    "scripts/smooth_scroll_helper.js"
];




// LOAD EACH JS FILE AND APPEND IT INSIDE THE BODY AT THE BOTTOM
jsList.forEach(function(filename){
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
    if (typeof fileref!="undefined") document.getElementsByTagName("body")[0].appendChild(fileref);
});


