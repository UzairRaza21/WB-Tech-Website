// NAV BAR CODE
let mobileNavLinks = document.querySelector('.mobile-nav-links');
let mainNavbar = document.querySelector('.nav-inner');

function navShow(){
    mainNavbar.classList.toggle('nav-inner-mobile')
    mobileNavLinks.classList.toggle('open');
}

function navSize(){

  if (window.matchMedia("(min-width: 768px)").matches) {
    mainNavbar.classList.remove('nav-inner-mobile')
    mobileNavLinks.classList.remove('open');
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




