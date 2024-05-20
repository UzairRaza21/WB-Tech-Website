window.addEventListener('scroll', function() {

    var slide1 = document.getElementById('myDiv-1');
    var slide2 = document.getElementById('myDiv-2');
    var slide3 = document.getElementById('myDiv-3');
    var heroBg = document.querySelector('.header-bg');
    var mainSlider = document.querySelector('.slide-container');
    var scrollPosition = window.scrollY;
    // Slide-2 
    var ball1 = document.querySelector('.ball-1');
    var ball2 = document.querySelector('.ball-2')

    // Slide- 1 and Slide 2
    if (scrollPosition > 10 && scrollPosition <= 200){
        slide1.classList.add('scrolled-1');
        slide2.classList.add('scrolled-1-slide-2');
        ball1.classList.add('up');
        ball2.classList.add('down');
    }
    else{
        slide1.classList.remove('scrolled-1');
        slide2.classList.remove('scrolled-1-slide-2');
        ball1.classList.toggle('up');
        ball2.classList.toggle('down');
    }

    if(scrollPosition > 200){
        slide1.style.display = 'none';
    }
    else{
        slide1.style.display = 'block';
    }

    // Slide-2  and Slide 3

    if(scrollPosition > 200){
        slide3.classList.add('scrolled-1-slide-3');
    }
    else{
        slide3.classList.remove('scrolled-1-slide-3');
    }


    // Slide 3 Switch to Normal Website

    
    if(scrollPosition >= 500){
        mainSlider.classList.add('opacity');
        heroBg.style.position = 'static';
    }
    else{
        mainSlider.classList.remove('opacity');
        heroBg.style.position = 'fixed';
    }

});




