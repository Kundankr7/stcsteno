const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const bars = document.querySelectorAll('.bar');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  bars.forEach(bar => bar.classList.toggle('rotate'));
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove('active');
    bars.forEach(bar => bar.classList.remove('rotate'));
  }
});