//global variables
const slideOutNav = document.querySelector('.mobileNav div');

///////////////////////////////////////////////////////////////////////////
//SLIDE OUT MOBILE MENU:

//when the hamburger menu is clicked, display the slideout menu:
const mobileBtn = document.querySelector('.mobileNav i');

mobileBtn.addEventListener('click', function() {
    slideOutNav.style.top = 0;
})

//when the close btn is clicked, close the slide out menu
const closeBtn = document.querySelector('.mobileNav button');

closeBtn.addEventListener('click', function() {
    slideOutNav.style.top = '-500px';
})


