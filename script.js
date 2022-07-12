const mobileNav ={};

mobileNav.slideOutNav = document.querySelector('.mobileNav div');

mobileNav.showNav = () => {
    //when the hamburger menu is clicked, display the slideout menu:
    mobileNav.mobileBtn = document.querySelector('.mobileNav i');

    mobileNav.mobileBtn.addEventListener('click', function () {
        mobileNav.slideOutNav.style.top = 0;
    })
}

mobileNav.hideNav = () => {
    //when the close btn is clicked, close the slide out menu
    mobileNav.closeBtn = document.querySelector('.mobileNav button');

    mobileNav.closeBtn.addEventListener('click', function () {
        mobileNav.slideOutNav.style.top = '-500px';
    })
}

mobileNav.init = () => {
    mobileNav.showNav();
    mobileNav.hideNav();
}

mobileNav.init();

//IMAGE GALLERY SLIDESHOW:
const galleryApp = {};

galleryApp.slides = document.querySelectorAll('.banner li');

galleryApp.currentSlide = 0;
galleryApp.maxSlide = galleryApp.slides.length - 1;

galleryApp.showNextImg = () => {
    galleryApp.btnNext = document.querySelector('.btnNext');

    galleryApp.btnNext.addEventListener('click', function () {
        if (galleryApp.currentSlide === galleryApp.maxSlide) {
            galleryApp.currentSlide = 0;
        } else {
            galleryApp.currentSlide++;
        }

        galleryApp.slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - galleryApp.currentSlide)}%)`;
        });
    });
}

galleryApp.showPrevImg = () => {
    galleryApp.btnPrev = document.querySelector('.btnPrev');

    galleryApp.btnPrev.addEventListener('click', function () {
        if (galleryApp.currentSlide === 0) {
            galleryApp.currentSlide = galleryApp.maxSlide;
        } else {
            galleryApp.currentSlide--;
        }

        galleryApp.slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - galleryApp.currentSlide)}%)`;
        });
    });
}

galleryApp.init = () => {
    galleryApp.showNextImg();
    galleryApp.showPrevImg();
}

galleryApp.init();

//dark mode button
const toggleApp = {};

toggleApp.toggle = document.querySelector("#toggle");
toggleApp.isLight = true;

toggleApp.switchThemes = () => {
    toggleApp.toggle.addEventListener('click', function () {
        toggleApp.isLight = !toggleApp.isLight;
        toggleApp.isLight ? toggleApp.toggle.innerText = '🌞' : toggleApp.toggle.innerText = '🌚';
        const rootElement = document.body;
        rootElement.classList.toggle('darkMode');

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            section.classList.toggle('darkMode');
        })

        const h4Titles = document.querySelectorAll('.info h4 a');
        h4Titles.forEach((title) => {
            title.classList.toggle('darkMode');
        });

    });
}

toggleApp.init = () => {
    toggleApp.switchThemes();
}

toggleApp.init();




