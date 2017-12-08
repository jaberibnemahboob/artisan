let siteurl = "http://studkea.jprkopat.com/semester_2/theme0801/artisan//wp-json/wp/v2/";
let pagesID = {
    home : 6,
    biography : 8,
    exhibitions : 10,
    process : 12,
    workshops : 14,
    luxuryArtworks : 16,
    souvenirsShop : 18,
    contact : 20
}
let pagesSlug = {
    home : "home",
    biography : "biography",
    exhibitions : "exhibitions",
    process : "process",
    workshops : "workshops",
    luxuryArtworks : "luxury-artworks",
    souvenirsShop : "souvenirs-shop",
    contact : "contact"
}


function loadJSONData(url, callbackFunction){
    fetch(url).then(res=>res.json()).then(callbackFunction).catch(function() {
        document.querySelector(".loadMoreOption button").setAttribute("onclick","");
        document.querySelector(".loadMoreOption button").textContent="--No more--";
        document.querySelector(".loadMoreOption button").classList.remove("regular");
        document.querySelector(".loadMoreOption button").classList.add("disable");
    });;
}



//GET DATA FUNCTIONS DUMMY
function getCategories(per_page, current_page){
    if(typeof per_page == 'undefined') per_page = 100;
    if(typeof current_page == 'undefined') current_page = 1;
    loadJSONData(siteurl + "categories/?per_page="+per_page+"&page="+current_page+"&_embed", function(cats){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showCategories(cats);
    });
}
function getCategoryById(id){
    loadJSONData(siteurl + "categories/"+id+"?_embed", function(cat){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showCategory(cat);
    });
}
function getCategoryBySlug(slug){
    loadJSONData(siteurl + "categories/?slug="+slug+"&_embed", function(cats){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        if(typeof cats[0] !== "undefined") showCategory(cats[0]);
    });
}
function getSouvenirById(id){
    loadJSONData(siteurl + "souvenirs/"+id+"?_embed", function(souvenir){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showSouvenir(souvenir);
    });
}
function getSouvenirBySlug(slug){
    loadJSONData(siteurl + "souvenirs/?slug="+slug+"&_embed", function(souvenirs){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        if(typeof souvenirs[0] !== "undefined") showSouvenir(souvenirs[0]);
    });
}
function getSouvenirsByCategory(id, per_page, current_page){
    if(typeof per_page == 'undefined') per_page = 100;
    if(typeof current_page == 'undefined') current_page = 1;
    loadJSONData(siteurl + "souvenirs/?per_page="+per_page+"&page="+current_page+"&categories="+id+"&_embed", function(souvenirs){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showSouvenirs(souvenirs);
    });
}
function getArtworks(per_page, current_page){
    if(typeof per_page == 'undefined') per_page = 100;
    if(typeof current_page == 'undefined') current_page = 1;
    loadJSONData(siteurl + "artworks/?per_page="+per_page+"&page="+current_page+"&_embed", function(artworks){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showArtworks(artworks);
    });
}
function getArtworkById(id){
    loadJSONData(siteurl + "artworks/"+id+"?_embed", function(artwork){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showArtwork(artwork);
    });
}
function getArtworkBySlug(slug){
    loadJSONData(siteurl + "artworks/?slug="+slug+"&_embed", function(artworks){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        if(typeof artworks[0] !== "undefined") showArtwork(artworks[0]);
    });
}
function getArtworksByCategory(id, per_page, current_page){
    if(typeof per_page == 'undefined') per_page = 100;
    if(typeof current_page == 'undefined') current_page = 1;
    loadJSONData(siteurl + "artworks/?per_page="+per_page+"&page="+current_page+"&categories="+id+"&_embed", function(artworks){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showArtworks(artworks);
    });
}
function getPages(per_page, current_page){
    if(typeof per_page == 'undefined') per_page = 100;
    if(typeof current_page == 'undefined') current_page = 1;
    loadJSONData(siteurl + "pages/?per_page="+per_page+"&page="+current_page+"&_embed", function(pages){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showPages(pages);
    });
}
function getPageById(id){
    loadJSONData(siteurl + "pages/"+id+"?_embed", function(page){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showPage(page);
    });
}
function getPageBySlug(slug){
    loadJSONData(siteurl + "pages/?slug="+slug+"&_embed", function(pages){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        if(typeof pages[0] !== "undefined") showPage(pages[0]);
    });
}



//SHOW DATA FUNCTIONS DUMMY
function showCategories(cats){
    console.log("Called Function - showCategories(...)");
    console.log(cats);
    cats.forEach(showCategory);
}
function showCategory(cat){
    console.log("Called Function - showCategory(...)");
    console.log(cat);
}
function showSouvenirs(souvenirs){
    console.log("Called Function - showSouvenirs(...)");
    console.log(souvenirs);
    souvenirs.forEach(showSouvenir);
}
function showSouvenir(souvenir){
    console.log("Called Function - showSouvenir(...)");
    console.log(souvenir);
}
function showPages(pages){
    console.log("Called Function - showPages(...)");
    console.log(pages);
    pages.forEach(showPage)
}
function showPage(page){
    console.log("Called Function - showPage(...)");
    console.log(page);
}
function showArtworks(artworks){
    console.log("Called Function - showArtworks(...)");
    console.log(artworks);
    artworks.forEach(showArtwork);
}
function showArtwork(artwork){
    console.log("Called Function - showArtwork(...)");
    console.log(artwork);
}

//FINALIZED GET DATA FUNCTIONS
function getSouvenirs(per_page, current_page, showSouvenirsCallBack){
    if(typeof per_page == 'undefined') per_page = 100;
    if(typeof current_page == 'undefined') current_page = 1;
    loadJSONData(siteurl + "souvenirs/?per_page="+per_page+"&page="+current_page+"&_embed", function(souvenirs){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        showSouvenirsCallBack(souvenirs);
    });
}

//FINALIZED SHOW FUNCTION
function showSouvenirs_at_shop(souvenirs){
    let list = document.querySelector(".productList");
    let template = document.querySelector("#productTemplate").content;
    souvenirs.forEach(function (souvenir){
        console.log(souvenir);
        let clone = template.cloneNode(true);

        clone.querySelector(".view img").setAttribute("src", souvenir.acf.default_image);
        clone.querySelector(".view img").setAttribute("alt", souvenir.title.rendered);
        clone.querySelector(".name span").textContent = souvenir.title.rendered;
        let descriptions = souvenir.content.rendered.split('</p>');
        clone.querySelector(".description span").innerHTML = descriptions[0] + '</p>';
        clone.querySelector(".price span").textContent = souvenir.acf.price;
        if(souvenir.acf.variant_by != "" && souvenir.acf.variant_by != "None"){
            clone.querySelector(".note span").textContent = "Item can be varied by "+souvenir.acf.variant_by;
        }else{
            clone.querySelector(".note").textContent = "There is no variant of this item."
        }
        clone.querySelector(".link").setAttribute("href",("product.html?id=" + souvenir.id));

        list.appendChild(clone);
    });
}




//HOW TO CALL FUNCTION TO LOAD INFORMATION FORM WORDPRESS SITE
//getCategories();
//getCategoryById(3);
//getCategoryBySlug("candlestick");
//getSouvenirs(2,2);
//getSouvenirById(53);
//getSouvenirBySlug("ufo-lysestage");
//getSouvenirsByCategory(3,2,1);
//getArtworks();
//getArtworkById(87);
//getArtworkBySlug("test-artwork");
//getArtworksByCategory(8);
//getPages(2,1);
//getPageById(18);
//getPageBySlug("souvenirs-shop");

//getPageById(pagesID.home);
//getPageBySlug(pagesSlug.home);


let loadIndex=0;
function loadData(){
    loadIndex += 1;
    if(window.location.href.indexOf("/shop2.html") != -1){
        getSouvenirs(4,loadIndex,showSouvenirs_at_shop);
    }
}
loadData();
