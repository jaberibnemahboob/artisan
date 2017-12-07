let siteurl = "https://studkea.jprkopat.com/semester_2/theme0801/artisan//wp-json/wp/v2/";
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
    console.log(url);
    fetch(url).then(res=>res.json()).then(callbackFunction).catch(function(event) {
        console.log(event);
        if(document.querySelector(".loadMoreOption button") != null){
            document.querySelector(".loadMoreOption button").setAttribute("onclick","");
            document.querySelector(".loadMoreOption button").textContent="--No more--";
            document.querySelector(".loadMoreOption button").classList.remove("regular");
            document.querySelector(".loadMoreOption button").classList.add("disable");
        }
    });;
}



//GET DATA FUNCTIONS DUMMY
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
function getSouvenirBySlug(slug){
    loadJSONData(siteurl + "souvenirs/?slug="+slug+"&_embed", function(souvenirs){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        if(typeof souvenirs[0] !== "undefined") showSouvenir(souvenirs[0]);
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


//FINALIZED GET DATA FUNCTIONS
function getSouvenirs(per_page, current_page, callBack){
    if(typeof per_page == 'undefined') per_page = 100;
    if(typeof current_page == 'undefined') current_page = 1;
    loadJSONData(siteurl + "souvenirs/?per_page="+per_page+"&page="+current_page+"&_embed", function(souvenirs){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        callBack(souvenirs);
    });
}
function getSouvenirById(id, callBack){
    loadJSONData(siteurl + "souvenirs/"+id+"?_embed", function(souvenir){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        callBack(souvenir);
    });
}
function getCategories(per_page, current_page, callBack){
    if(typeof per_page == 'undefined') per_page = 100;
    if(typeof current_page == 'undefined') current_page = 1;
    loadJSONData(siteurl + "categories/?per_page="+per_page+"&page="+current_page+"&_embed", function(cats){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        callBack(cats);
    });
}
function getSouvenirsByCategory(id, per_page, current_page, exclude, callBack){
    if(typeof per_page == 'undefined') per_page = 100;
    if(typeof current_page == 'undefined') current_page = 1;
    loadJSONData(siteurl + "souvenirs/?per_page="+per_page+"&page="+current_page+"&categories="+id+"&exclude="+exclude+"&_embed", function(souvenirs){

        //CHANGE FUNCTION NAME TO SHOW LOADED INFORMATION
        callBack(souvenirs);
    });
}

//FINALIZED SHOW FUNCTION
function showSouvenirs_at_shop(souvenirs){
    //SHOW DATA
    console.log(souvenirs);


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
        clone.querySelector(".link").setAttribute("href",("product.html?id=" + souvenir.id + "&cat=" + souvenir.categories.join(",")));

        list.appendChild(clone);
    });
}
function showSouvenirs_at_product(souvenirs){
    //SHOW DATA
    console.log(souvenirs);


    let list = document.querySelector(".productList");
    let template = document.querySelector("#productTemplate").content;
    souvenirs.forEach(function (souvenir){
        let clone = template.cloneNode(true);

        clone.querySelector(".view img").setAttribute("src", souvenir.acf.default_image);
        clone.querySelector(".view img").setAttribute("alt", souvenir.title.rendered);
        clone.querySelector(".name span").textContent = souvenir.title.rendered;
        clone.querySelector(".price span").textContent = souvenir.acf.price;
        clone.querySelector(".link").setAttribute("href",("product.html?id=" + souvenir.id + "&cat=" + souvenir.categories.join(",")));

        list.appendChild(clone);
    });
}
function showSouvenirDetails_at_product(souvenir){
    //SHOW DATA
    console.log(souvenir);

    document.querySelector(".productPageName").textContent = souvenir.title.rendered;

    let holder = document.querySelector(".productDetails");
    let template = document.querySelector("#productDetailsTemplate").content;

    let variant_by = souvenir.acf.variant_by;
    let variants = (variant_by!="None") ? souvenir.acf[(variant_by.toLowerCase()+"_variants")] : "None";
    let variantsList = (variants!="None") ? souvenir.acf[(variants.toLowerCase().replace(" ","_"))] : new Array();
    let variantsListSelectCode = "";
    let variantsArray = variantsList;
    let categories = new Array();
    let cats = urlParams.get("cat").split(",");
    let variantsImg = new Array();

    if(Array.isArray(variantsList) && variantsList.length>0)variantsList.forEach(function(item){variantsListSelectCode = variantsListSelectCode + '<option>'+item+'</option>';});
    if(!(Array.isArray(variantsArray))) variantsArray = new Array();
    if(variantsArray.length>0) variantsArray.shift();
    if(variantsArray.length<1) variantsArray.push("N/A");
    if(variantsArray.length>0){
        variantsArray.forEach(function(item,index){
            switch(index){
                case 1:
                    variantsImg.push(souvenir.acf.first_variant_image);
                    break;
                case 2:
                    variantsImg.push(souvenir.acf.second_variant_image);
                    break;
                case 3:
                    variantsImg.push(souvenir.acf.third_variant_image);
                    break;
                case 4:
                    variantsImg.push(souvenir.acf.fourth_variant_image);
                    break;
                case 5:
                    variantsImg.push(souvenir.acf.fifth_variant_image);
                    break;
                case 6:
                    variantsImg.push(souvenir.acf.sixth_variant_image);
                    break;
                case 7:
                    variantsImg.push(souvenir.acf.seventh_variant_image);
                    break;
                case 8:
                    variantsImg.push(souvenir.acf.eighth_variant_image);
                    break;
                case 9:
                    variantsImg.push(souvenir.acf.ninth_variant_image);
                    break;
                case 10:
                    variantsImg.push(souvenir.acf.tenth_variant_image);
                    break;
                case 11:
                    variantsImg.push(souvenir.acf.eleventh_variant_image);
                    break;
                case 12:
                    variantsImg.push(souvenir.acf.twelfth_variant_image);
                    break;
                case 13:
                    variantsImg.push(souvenir.acf.thirteenth_variant_image);
                    break;
                case 14:
                    variantsImg.push(souvenir.acf.fourteenth_variant_image);
                    break;
                case 15:
                    variantsImg.push(souvenir.acf.fifteenth_variant_image);
                    break;
                case 16:
                    variantsImg.push(souvenir.acf.sixteenth_variant_image);
                    break;
                case 17:
                    variantsImg.push(souvenir.acf.seventeenth_variant_image);
                    break;
                case 18:
                    variantsImg.push(souvenir.acf.eighteenth_variant_image);
                    break;
                case 19:
                    variantsImg.push(souvenir.acf.nineteenth_variant_image);
                    break;
                case 20:
                    variantsImg.push(souvenir.acf.twentieth_variant_image);
                    break;
                case 21:
                    variantsImg.push(souvenir.acf["twenty-first_variant_image"]);
                    break;
                case 22:
                    variantsImg.push(souvenir.acf["twenty-second_variant_image"]);
                    break;
                case 23:
                    variantsImg.push(souvenir.acf["twenty-third_variant_image"]);
                    break;
                case 24:
                    variantsImg.push(souvenir.acf["twenty-fourth_variant_image"]);
                    break;
                case 25:
                    variantsImg.push(souvenir.acf["twenty-fifth_variant_image"]);
                    break;
                default:
                    break;
            }
        })
    }
    cats.forEach(function(id){
        categoryList.forEach(function(cat){
            if(id != (productParentCatID+"") && cat.id == id) categories.push(cat.name);
        });
    });

    let clone = template.cloneNode(true);

    clone.querySelectorAll(".productName").forEach(function(item){item.textContent = souvenir.title.rendered;});
    clone.querySelector(".variant_by").textContent = souvenir.acf.variant_by;
    clone.querySelector(".view img").setAttribute("src",souvenir.acf.default_image);
    clone.querySelector(".view img").setAttribute("alt",souvenir.title.rendered);
    if(variant_by=="None") clone.querySelector(".variantList").parentNode.classList.add("hidden");
    else clone.querySelector(".variantList").innerHTML = variantsListSelectCode;

    clone.querySelector(".price").textContent = souvenir.acf.price + " dkk";
    clone.querySelector(".category").textContent = categories.join(", ");
    clone.querySelector(".variant_by").textContent = souvenir.acf.variant_by;
    clone.querySelector(".size").textContent = souvenir.acf.size;
    clone.querySelector(".weight").textContent = souvenir.acf.weight;
    clone.querySelector(".variants").textContent = variantsArray.join(", ");
    clone.querySelector(".description").innerHTML = souvenir.content.rendered;


    holder.appendChild(clone);

    function changeImageOnSelectVariant(){
        let newHolder = holder.querySelector("article:last-child");
        let target = newHolder.querySelector(".variantList");
        let newChangeReactionDone = false;
        target.addEventListener("change",function(event){
            newChangeReactionDone = false;
            variantsArray.forEach(function(option,index){
                if(target.value == option){
                    if(typeof variantsImg[index] != 'undefined'){
                        newHolder.querySelector(".view img").setAttribute("src",variantsImg[index]);
                        newChangeReactionDone = true;
                    }
                }
            });
            if(!newChangeReactionDone) newHolder.querySelector(".view img").setAttribute("src",souvenir.acf.default_image);
        });
    }

    runCarousel();
    changeImageOnSelectVariant();

}
















let loadIndex=0;
let loadPerPage = 6;
let categoryList;
let productParentCatID;
let urlParams = new URLSearchParams(window.location.search);
function loadData(){
    loadIndex += 1;

    if(window.location.href.indexOf("/shop.html") != -1){
        getSouvenirs(loadPerPage,loadIndex,showSouvenirs_at_shop);
    }else if(window.location.href.indexOf("/product.html") != -1){
        let id = urlParams.get("id");
        let cats = urlParams.get("cat").split(",");
        if(loadIndex==1) getSouvenirById(id,showSouvenirDetails_at_product);
        cats.forEach(function(cat){
            if(cat != productParentCatID+""){
                getSouvenirsByCategory(cat, (Math.round(loadPerPage/2)), loadIndex, id, showSouvenirs_at_product);
            }
        });
    }
}
function loadCategoires(){
    getCategories(100,1,function(categories){
        categoryList = categories;
        categoryList.forEach(function(cat){
            if(cat.slug == "souvenirs") productParentCatID = cat.id;
        });
        loadData();
    });
}
//START RETRIEVE
loadCategoires();
