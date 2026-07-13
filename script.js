const loadingScreen = document.getElementById("loading-screen");
const mainMenu = document.getElementById("main-menu");
const enterBtn = document.getElementById("enter-btn");
const spawn = document.getElementById("spawn");

spawn.style.display = "none";
mainMenu.style.display = "none";

setTimeout(() => {

    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "1s";

    setTimeout(() => {

        loadingScreen.style.display = "none";
        mainMenu.style.display = "flex";

    },1000);

},5000);

enterBtn.onclick = function(){

    mainMenu.style.display = "none";
    spawn.style.display = "flex";

}
