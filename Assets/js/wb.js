// After Slider Section
window.addEventListener('scroll', function(){
    var afterSliderSection = document.querySelector('.after-slider-section');
    var scrollPosition = window.scrollY;

    if(scrollPosition >= 600){
        afterSliderSection.style.display = 'block';
    }
    else{
        afterSliderSection.style.display = 'none'
    }
})




// NAV BAR CODE
let mobileNavLinks = document.querySelector('.mobile-nav-links');
let mainNavbar = document.querySelector('.nav-inner');
let hamBarTop = document.querySelector('.bar-top');
let hamBarMiddle = document.querySelector('.bar-middle');
let hamBarBottom = document.querySelector('.bar-bottom');



function navShow(){
    mainNavbar.classList.toggle('nav-inner-mobile')
    mobileNavLinks.classList.toggle('open');
    hamBarTop.classList.toggle('change-bar-top');
    hamBarMiddle.classList.toggle('change-bar-middle');
    hamBarBottom.classList.toggle('change-bar-bottom');
}

function navSize(){

  if (window.matchMedia("(min-width: 768px)").matches) {
    mainNavbar.classList.remove('nav-inner-mobile')
    mobileNavLinks.classList.remove('open');
    hamBarTop.classList.remove('change-bar-top');
    hamBarMiddle.classList.remove('change-bar-middle');
    hamBarBottom.classList.remove('change-bar-bottom');

  } 
}

window.onload = navSize;
window.onresize = navSize;



// HERO SLIDER CODE
window.addEventListener('scroll', function() {


    

    var slide1 = document.getElementById('myDiv-1');
    var slide2 = document.getElementById('myDiv-2');
    var slide3 = document.getElementById('myDiv-3');
    var heroBg = document.querySelector('.header-bg');
    var mainSlider = document.querySelector('.slide-container');
    var scrollPosition = window.scrollY;

    // Slide-2 Variable
    var ball1 = document.querySelector('.ball-1');
    var ball2 = document.querySelector('.ball-2');
    var rectangle = document.querySelector('.hero-home-slide-2-rectangle');

    // Slide- 1 and Slide 2
    if (scrollPosition > 10 && scrollPosition <= 400){
        slide1.classList.add('scrolled-1');
        slide2.classList.add('scrolled-1-slide-2');
        ball1.classList.add('up');
        ball2.classList.add('down');
        rectangle.classList.remove('rotate-up');
        rectangle.style.opacity = "0";
        slide3.classList.remove('scrolled-1-slide-3');

        // Slide -2 Animation
        if (scrollPosition > 100 && scrollPosition < 300){
            rectangle.classList.add('rotate-up');
            rectangle.classList.remove('expand');
            slide3.classList.remove('scrolled-1-slide-3');
        }

        if(scrollPosition > 301 && scrollPosition < 600){
            rectangle.classList.remove('rotate-up');
            rectangle.style.opacity = "1";
            rectangle.classList.add('expand');
            slide2.classList.remove('scrolled-1-slide-2');
            slide3.classList.add('scrolled-1-slide-3');
        }
            }
            // Nested if End


    else{
        slide1.classList.remove('scrolled-1');
        slide2.classList.remove('scrolled-1-slide-2');
        ball1.classList.toggle('up');
        ball2.classList.toggle('down');
    }


    if(scrollPosition > 400){
        slide1.style.display = 'none';
    }
    else{
        slide1.style.display = 'block';
    }

    // Slide 3 Switch to Normal Website

    
    if(scrollPosition >= 600){
        mainSlider.classList.add('opacity');
        heroBg.style.position = 'static';
    }
    else{
        mainSlider.classList.remove('opacity');
        heroBg.style.position = 'fixed';
    }


});




// About Section Text Slider
const textItems = Array.from(document.querySelectorAll('.text-item')).map(item => item.innerHTML);
    let currentIndex = 0;
    let scrollDirection = 'down';
    const textDisplay = document.getElementById('textDisplay');
    const sliderContainer = document.querySelector('.slider-container');

    function updateText(newText) {
        textDisplay.classList.remove('show');
        if (scrollDirection === 'up') {
            textDisplay.classList.add('hide-up');
        } else {
            textDisplay.classList.add('hide-down');
        }

        setTimeout(() => {
            textDisplay.innerHTML = newText;
            textDisplay.classList.remove('hide-up', 'hide-down');
            textDisplay.classList.add('show');
        }, 500); // Matches the CSS transition duration
    }

    function handleScroll(event) {
        if (event.deltaY < 0) {
            scrollDirection = 'up';
            currentIndex = (currentIndex - 1 + textItems.length) % textItems.length;
        } else {
            scrollDirection = 'down';
            currentIndex = (currentIndex + 1) % textItems.length;
        }
        updateText(textItems[currentIndex]);
        event.preventDefault();
    }

    function handleClick() {
        scrollDirection = 'down';
        currentIndex = (currentIndex + 1) % textItems.length;
        updateText(textItems[currentIndex]);
    }

    sliderContainer.addEventListener('mouseenter', () => {
        sliderContainer.addEventListener('wheel', handleScroll, { passive: false });
    });

    sliderContainer.addEventListener('mouseleave', () => {
        sliderContainer.removeEventListener('wheel', handleScroll);
    });

    sliderContainer.addEventListener('click', handleClick);

    updateText(textItems[currentIndex]);