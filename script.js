let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.oneclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 