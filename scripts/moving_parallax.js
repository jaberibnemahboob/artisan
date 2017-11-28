document.querySelectorAll(".movingParallax").forEach(function(item){
    let initialPositiion = 25;
    window.addEventListener("scroll", function(event){
        item.style.backgroundPosition = "50% "+initialPositiion + Math.round((window.innerWidth / document.scrollingElement.scrollTop))+"%";
    });
});
