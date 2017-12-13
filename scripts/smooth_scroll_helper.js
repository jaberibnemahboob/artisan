document.querySelectorAll(".smoothScroll2page").forEach(function(item){
    new SmoothScroll('[data-selector="'+item.getAttribute("data-selector")+'"]', {
        easing: item.getAttribute("data-easing"),
        offset: 80
    });
    item.addEventListener("click",function(){
        document.querySelectorAll(".smoothScroll2page").forEach(function(thisItem){
            thisItem.classList.remove("active");
        });
        item.classList.add("active");
    });
});
