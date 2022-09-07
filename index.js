const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".mobile-links");
const menuLinks = document.querySelector(".mobile-menu-links");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('active');
        menuOpen = false;
    }
});

menuLinks.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    menu.classList.remove('active');
    menuOpen = false;
});