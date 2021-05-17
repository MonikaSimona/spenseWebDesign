var menuButton =  document.querySelector('.menu-button');
var navMenu = document.querySelector('.nav__menu')
var navMenuPrim = document.querySelector('.nav__menu--primary')
var navMenuSec = document.querySelector('.nav__menu--secondary')

menuButton.addEventListener('click',() => {
    navMenu.classList.toggle('nav__menu--open');
    navMenuPrim.classList.toggle('menu-lists-open')
    navMenuSec.classList.toggle('menu-lists-open')
})