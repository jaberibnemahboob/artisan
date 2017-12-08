function bodyHeight(){
    return Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )
}

function setPageTitle(){
    fetch("jsons/common_data.json").then(res=>res.json()).then(setPageTitleNow).catch(function(event) {
        console.log(event);
        if(document.querySelector(".loadMoreOption button") != null){
            document.querySelector(".loadMoreOption button").setAttribute("onclick","");
            document.querySelector(".loadMoreOption button").textContent="--No more--";
            document.querySelector(".loadMoreOption button").classList.remove("regular");
            document.querySelector(".loadMoreOption button").classList.add("disable");
        }
    });
    function setPageTitleNow(data){
        let page_titles = data.page_titles;


        if(window.location.href.indexOf("/biography.html") != -1){
            document.title = page_titles.biography;
        }else if(window.location.href.indexOf("/process.html") != -1){
            document.title = page_titles.process;
        }else if(window.location.href.indexOf("/exhibitions.html") != -1){
            document.title = page_titles.exhibitions;
        }else if(window.location.href.indexOf("/workshops.html") != -1){
            document.title = page_titles.workshops;
        }else if(window.location.href.indexOf("/projects.html") != -1){
            document.title = page_titles.projects;
        }else if(window.location.href.indexOf("/shop.html") != -1){
            document.title = page_titles.shop;
        }else if(window.location.href.indexOf("/contact.html") != -1){
            document.title = page_titles.contact;
        }else{
            document.title = page_titles.home;
        }
    }
}
window.onload = setPageTitle;
