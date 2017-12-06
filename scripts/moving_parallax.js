document.querySelectorAll(".movingParallax").forEach(function(item){
    let initialPositiion = 20;
    let documentHeight = bodyHeight();
    let calculatedPosition = initialPositiion;
    window.addEventListener("scroll", function(event){
        calculatedPosition = (initialPositiion + Math.round((document.scrollingElement.scrollTop / documentHeight * 200)));
        if(calculatedPosition > 100) calculatedPosition = 100;
        else if(calculatedPosition < 0) calculatedPosition = 0;
        item.style.backgroundPosition = "50% "+ calculatedPosition +"%";
    });
});

