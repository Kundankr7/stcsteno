// JavaScript (script.js)

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menuOverlay = document.getElementById("menu-overlay");

    menuBtn.addEventListener("click", function () {
        menuOverlay.classList.toggle("show-menu");
    });
});
