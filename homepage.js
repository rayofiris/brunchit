/*function menu()
{
    let logo = document.querySelector(".logo");
    let menu = document.querySelector(".menucontainer");
    if (menu.style.visibility = "hidden")
    {
        logo.style.visibility = "hidden";
        logo.style.animation = "none";
        menu.style.visibility = "visible";
    }
    else
    { logo.style.visibility = "visible";
        menu.style.visibility = "hidden";
    }
}

document.addEventListener("mouseover", function() {
    let menuOptions = document.getElementsByClassName("menu");
    for (let i = 0; i < menuOptions.length; i++) {
    menuOptions.classList.add("menuhover");
    }
});*/

window.onload=function(){setTimeout(showMenu,7000)};

function showMenu() {

    let logoContainer = document.querySelector(".logocontainer");
    logoContainer.style.visibility = "hidden";
    let logo = document.querySelector(".logo");
    logo.style.visibility = "hidden";
    logo.style.animation = "none";
}