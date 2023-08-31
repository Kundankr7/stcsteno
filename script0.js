document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Add click event listener to the hamburger icon
    hamburger.addEventListener("click", function () {
        // Show the navigation menu
        navMenu.style.display = "block";
    });
});

