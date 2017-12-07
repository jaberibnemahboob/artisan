//init
function runCarousel(){
    let carouselItems = document.querySelectorAll(".carousel-slider__item");
    let carouselItemsCount = carouselItems.length;
    let currentItem = 0;
    let nextItem = 1;
    let carouselWidth = 0;
    let carouselHeight = 0;
    let tmp = 0;

    if(carouselItemsCount>1){

        carouselItems.forEach(function(item){
            item.classList.toggle("hidden");
            item.querySelector("img").setAttribute("src",item.querySelector("img").getAttribute("data-src"));
            item.querySelector("img").removeAttribute("width");
            item.querySelector("img").removeAttribute("height");

            fixSize();
        });


        function fixSize(){
            if(carouselItemsCount>0){
                carouselWidth = carouselItems[0].parentNode.parentNode.parentNode.clientWidth;
                //default img width = 640px (comming from wp)
                //default img heigh = 400px (comming from wp)
                carouselHeight = Math.round(carouselWidth / 640 * 400);
                carouselItems[0].parentNode.parentNode.style.width = carouselWidth + "px";
                carouselItems[0].parentNode.parentNode.style.height = carouselHeight + "px";
            }
        }

        //showitem
        function showItem(){
            if(currentItem!=0) carouselItems[(currentItem-1)].classList.toggle("hidden");
            carouselItems[(nextItem-1)].classList.toggle("hidden");

            currentItem = nextItem;
            nextItem = nextItem + 1;
            if(nextItem > carouselItemsCount) nextItem = 1;

            fixSize();

            setTimeout(showItem, 3000);
        }



        showItem();

    }
}
