// LIST OF ALL JS TO BE USE FOR EACH PAGE
let jsList = [
    "scripts/common_functions.js",
    "scripts/navigation.js",
    "scripts/moving_parallax.js",
    "scripts/json_retriver.js",
    "https://use.fontawesome.com/3bf73e391b.js"
];




// LOAD EACH JS FILE AND APPEND IT INSIDE THE BODY AT THE BOTTOM
jsList.forEach(function(filename){
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
    if (typeof fileref!="undefined") document.getElementsByTagName("body")[0].appendChild(fileref);
});
