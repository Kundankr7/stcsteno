const hamburgerBtn = document.getElementById('hamburger-btn');
const menu = document.querySelector('.menu');
const innerContent = document.querySelector('.inner-content');

hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    innerContent.classList.toggle('shift-content');
});
