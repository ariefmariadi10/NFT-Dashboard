const sidebar = document.querySelector(".nav-icon");
sidebar.addEventListener("click", sideToggle);

function sideToggle(){
    sidebar.classList.toggle("active");
    const side = document.querySelector(".side-bar");
    const large = document.querySelector(".large-container");
    const navigation = document.querySelector(".our-nav");
    const sidecontainer = document.querySelector(".side-container");
    large.style.paddingLeft = "8%";
    navigation.style.paddingLeft = "8%";
    sidecontainer.style.paddingLeft = "8%";
    side.classList.toggle("open");
    if(side.classList.contains("open")){
        side.style.maxWidth = side.scrollWidth + "px"
    }
    else{
        side.removeAttribute("style");
        navigation.style.paddingLeft = "3%";
        sidecontainer.style.paddingLeft = "3%";
        large.style.paddingLeft = "3%";
    }
}