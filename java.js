// java.js

// Toggle Menu

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

// Change header background on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
});

// sr.reveal('.home-text', { delay: 200, origin: 'top' });
// sr.reveal('.home-img', { delay: 400, origin: 'top' });
// sr.reveal('.about, .services, .work, .contact', { delay: 200, origin: 'top' });

   
