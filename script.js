const loadingScreen = document.getElementById("loading-screen");
const mainMenu = document.getElementById("main-menu");
const enterBtn = document.getElementById("enter-btn");
const spawn = document.getElementById("spawn");

// Loading screen
spawn.style.display = "none";
mainMenu.style.display = "none";

setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "1s";

    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainMenu.style.display = "flex";
    }, 1000);

}, 5000);

// Enter Birthday World
enterBtn.onclick = function () {
    mainMenu.style.display = "none";
    spawn.style.display = "flex";
};

// ================= BOOK =================

const pages = document.querySelectorAll(".page");
const nextPage = document.getElementById("nextPage");

let currentPage = 0;

nextPage.addEventListener("click", () => {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if (currentPage >= pages.length) {
        currentPage = 0;
    }

    pages[currentPage].classList.add("active");

});
