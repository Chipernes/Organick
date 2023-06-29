document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.icon-menu');
    const menu = document.querySelector('.menu__list');
    const pagesMenu = document.querySelector('.menu__pages');
    const pagesLink = document.querySelector('.pages-link');
    const pagesList = document.querySelector('.menu__pages-list');

    burger.addEventListener('click', (event) => {
        burger.classList.toggle('menu-open');
        menu.classList.toggle('menu-open');
    });

    pagesLink.addEventListener('click', (event) => {
        pagesList.classList.toggle('pages-open');
        pagesMenu.classList.toggle('pages-open');
    });
});


/* Sticky header */
const header = document.querySelector('header');
const headerTop = header.offsetHeight;

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > headerTop) {
        header.classList.add('fixed_menu');
    } else {
        header.classList.remove('fixed_menu');
    }
});


/* Slide of testimonial comments */
let slideIndex = 2;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("comment");
    let dots = document.getElementsByClassName("comment__dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/*function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/

