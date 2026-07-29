const loadingFill = document.getElementById("loading-fill");
const loadingText = document.getElementById("loading-text");
const loadingScreen = document.getElementById("loading-screen");

const messages = [
    "Generating Birthday World...",
    "Loading Chunks...",
    "Planting Cherry Trees...",
    "Building Memory Village...",
    "Hiding Birthday Gifts...",
    "Spawning Mazonty..."
];

let progress = 0;
let message = 0;

const interval = setInterval(() => {

    progress++;

    loadingFill.style.width = progress + "%";

    if (progress % 18 === 0 && message < messages.length - 1) {
        message++;
        loadingText.textContent = messages[message];
    }

    if (progress >= 100) {

        clearInterval(interval);

        loadingText.textContent = "Done!";

        setTimeout(() => {

            loadingScreen.style.transition = "opacity .8s";
            loadingScreen.style.opacity = "0";

            setTimeout(() => {
                loadingScreen.style.display = "none";
                document.body.style.overflowY = "auto";
            }, 800);

        }, 500);

    }

}, 45);

const playButton = document.getElementById("playButton");

playButton.addEventListener("mouseenter", () => {
    playButton.style.transform = "scale(1.05)";
});

playButton.addEventListener("mouseleave", () => {
    playButton.style.transform = "scale(1)";
});

playButton.addEventListener("click", () => {

    playButton.textContent = "Entering World...";

    setTimeout(() => {

        alert("Version 2 will open the Minecraft world.");

    }, 800);

});

const musicButton = document.getElementById("musicButton");

let music = false;

musicButton.addEventListener("click", () => {

    music = !music;

    musicButton.textContent = music ? "Music: ON" : "Music: OFF";

});
