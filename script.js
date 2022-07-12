//SLIDE OUT MOBILE MENU:
const slideOutNav = document.querySelector('.mobileNav div');

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

//IMAGE GALLERY SLIDESHOW:
const slides = document.querySelectorAll('.banner li');

const btnNext = document.querySelector('.btnNext');
const btnPrev = document.querySelector('.btnPrev');

let currentSlide = 0;
const maxSlide = slides.length - 1;

btnNext.addEventListener('click', function() {
    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
});

btnPrev.addEventListener('click', function () {
    if (currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
});


//dark mode button
const toggle = document.querySelector("#toggle");
let isLight = true;

toggle.addEventListener('click', function () {
    isLight = !isLight;
    isLight ? toggle.innerText = '🌞' : toggle.innerText = '🌚';
    const rootElement = document.body;
    rootElement.classList.toggle('darkMode');

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.toggle('darkMode');
    })

    const h4Titles = document.querySelectorAll('.info h4 a');
    h4Titles.forEach((title) => {
        title.classList.toggle('darkMode');
    })
    
})
