const loadingScreen = document.getElementById("loading-screen");
const mainMenu = document.getElementById("main-menu");
const enterBtn = document.getElementById("enter-btn");

// Hide the menu while loading
mainMenu.style.display = "none";

// After 5 seconds...
setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "1s";

    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainMenu.style.display = "flex";
    }, 1000);

}, 5000);

// Enter button
enterBtn.addEventListener("click", () => {

    alert("Welcome to Mazen's Birthday World! 🎉");

});
