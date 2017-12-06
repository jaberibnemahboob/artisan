document.querySelectorAll(".movingParallax").forEach(function(item){
    let initialPositiion = 50;
    window.addEventListener("scroll", function(event){
        console.log(window.innerHeight + "/" + document.scrollingElement.scrollTop + " == "+ (window.innerHeight / document.scrollingElement.scrollTop));
        item.style.backgroundPosition = "50% "+ (initialPositiion + Math.round((window.innerHeight / document.scrollingElement.scrollTop)))+"%";
    });
});
