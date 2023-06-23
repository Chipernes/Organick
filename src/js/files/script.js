document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.icon-menu');
    var menu = document.querySelector('.menu__list');
    var pagesMenu = document.querySelector('.menu__pages');
    var pagesLink = document.querySelector('.pages-link');
    var pagesList = document.querySelector('.menu__pages-list');

    burger.addEventListener('click', function(event) {
        burger.classList.toggle('menu-open');
        menu.classList.toggle('menu-open');
    });

    pagesLink.addEventListener('click', function(event) {
        pagesList.classList.toggle('pages-open');
        pagesMenu.classList.toggle('pages-open');
    });
});
