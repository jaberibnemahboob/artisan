// STOP EMPTY LINK'S DEFAULT BEHAVIOR
// ON CLICK IN GENERAL LINK FOLLOW THE HREF ATTRIBUTE, AND FOR EMPTY OR, # VALUE IT'S RELOAD / JUMP TO TOP
// THIS EFFECT WILL STOP BEHAVING LIKE THAT
// SO, EMPTY LINK WILL NOT WORK AT ALL
document.querySelectorAll('a[href="#"]').forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault();
    });
});




// PAGE HEADER BACKGROUND OPACITY EFFECTS
// PAGE HEADER WILL BE BACKGROUND WHITE WITH SHADOW OFFSET
// THIS BACKGROUND WILL FADE IN ON SCROLLING DOWNWORD
// AND WILL FADE OUT ON SCROLLING UPWORD
document.querySelectorAll(".pageHeader>div.background").forEach(function(background){
    //INITIALIZE VARIABLE AND EFFECT CONDITION
    let defaultOpacity = 0.00;
    let maxOpacity = 0.95;
    let opacity;
    let opacityFullOffset = 100;
    setNewOpacity();

    //ACTION AND REACTION EFFECTS ON SCROLLING
    window.addEventListener("scroll", function(event){setNewOpacity();});

    //APPLY NEW EFFECTS
    function setNewOpacity(){
        opacity = document.scrollingElement.scrollTop / opacityFullOffset;
        if(opacity>maxOpacity) opacity = maxOpacity;
        else if(opacity<defaultOpacity) opacity = defaultOpacity;
        else opacity = Math.round((opacity*100))/100;
        background.style.opacity = opacity;
        document.querySelectorAll("nav.tabNavigation.atHomePage>ul>li>a").forEach(function(link){
            if((opacity>0.5) && (link.classList.contains('invert'))) link.classList.remove('invert');
            else if((opacity<0.5) && !(link.classList.contains('invert'))) link.classList.add('invert');
        });
    }
});



// ENLARGE IMAGE ON CLICK
// USE OF SIMPLE LIGHT BOX
// ONLY CHANGE IMG SRC & ALT FROM LIGHT BOX
// CLOSE LIGHTBOX ON CLICKING CLOSE
function enlargeImage(targetObj){
    targetObj.querySelectorAll("img").forEach(function(img){
        img.classList.add("enlarge");
        img.addEventListener("click",function(event){
            document.querySelector(".lightBox img").setAttribute("src",img.getAttribute("src"));
            document.querySelector(".lightBox img").setAttribute("alt",img.getAttribute("alt"));
            document.querySelector(".lightBox").style.display = "block";
        });
    });
}
document.querySelector(".lightBox .close").addEventListener("click",function(){
    document.querySelector(".lightBox").style.display = "none";
});



// HERO SECTION MOVING PARALLAX EFFECT
// BACKGROUND IMAGE OF HERO SECTION WILL MOVE BIT DOWNWORD WHILE SCROLLING DOWNWORD
// BACKGROUND IMAGE OF HERO SECTION WILL MOVE BIT UPWORD WHILE SCROLLING UPWORD
document.querySelectorAll(".movingParallax").forEach(function(item){
    //INITIALIZE VARIABLE AND EFFECT CONDITION
    let initialPositiion = 20;
    let documentHeight = bodyHeight();
    let calculatedPosition = initialPositiion;
    setNewBgPosition();

    //ACTION AND REACTION EFFECTS ON SCROLLING
    window.addEventListener("scroll", function(event){
        setNewBgPosition();
    });

    //APPLY NEW EFFECTS
    function setNewBgPosition(){
        calculatedPosition = (initialPositiion + Math.round((document.scrollingElement.scrollTop / documentHeight * 200)));
        if(calculatedPosition > 100) calculatedPosition = 100;
        else if(calculatedPosition < 0) calculatedPosition = 0;
        item.style.backgroundPosition = "50% "+ calculatedPosition +"%";
    }
});



// RESIZE VIDEO IFRAME ON CHANGE OF SCREEN
// DEFAULT IFRAME SIZE WIDTH 800PX & HEIGHT 450PX
// OR IT'S GIVEN WITH IFRAME ITSELF
// CHANGE THE SIZE BASE ON THIS RATIO
function fixIframeSize(){
    document.querySelectorAll("iframe").forEach(function(iframe){
        iframe.style.height = (((iframe.parentNode.clientWidth / 800 * 0.96) * 500) + "px");
    });
}
window.addEventListener("resize", function(e) {
    fixIframeSize();
});
