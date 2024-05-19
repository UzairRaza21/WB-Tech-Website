window.addEventListener('scroll', function() {

    var slide1 = document.getElementById('myDiv-1');
    var slide2 = document.getElementById('myDiv-2');
    var slide3 = document.getElementById('myDiv-3');
    var scrollPosition = window.scrollY;

    // Slide- 1
    if (scrollPosition > 50 && scrollPosition < 100) {
        slide1.classList.add('scrolled-1');

    } 
    
    else if (scrollPosition >= 100 && scrollPosition < 200) {
        slide1.classList.remove('scrolled-1');
        slide1.classList.add('scrolled-2');
        
    } 
    
    else if (scrollPosition >= 200 && scrollPosition <= 300) {
        slide1.classList.remove('scrolled-2');
        slide1.classList.add('scrolled-3');

    } 
    
    else {
        slide1.classList.remove('scrolled-1', 'scrolled-2', 'scrolled-3');
    }

    if(scrollPosition >= 300){
        slide1.style.display = 'none';
    }
    else{
        slide1.style.display = 'block';
    }


});




window.addEventListener('scroll', function() {

    var slide2 = document.getElementById('myDiv-2');
    var scrollPosition = window.scrollY;
    var ball1 = document.querySelector('.hero-home-slide-2-ball-1');

    // Slide-2
    if (scrollPosition > 301 && scrollPosition < 400) {
        slide2.classList.add('scrolled-1-slide-2');
       
    } 
    
    else if (scrollPosition >= 400 && scrollPosition < 500) {
        slide2.classList.remove('scrolled-1-slide-2');
        slide2.classList.add('scrolled-2-slide-2');
        ball1.classList.add('up');
    } 
    
    else if (scrollPosition >= 600 && scrollPosition < 700) {
        slide2.classList.remove('scrolled-2-slide-2');
        slide2.classList.add('scrolled-3-slide-2');
        ball1.classList.remove('up');
    } 
    else {
        slide2.classList.remove('scrolled-1-slide-2', 'scrolled-2-slide-2', 'scrolled-3-slide-2');
    }

    if(scrollPosition >= 700){
        slide2.style.display = 'none';
    }
    else{
        slide2.style.display = 'block';
    }
    
});




window.addEventListener('scroll', function() {

    var slide3 = document.getElementById('myDiv-3');
    var scrollPosition = window.scrollY;

    // Slide-3
    if (scrollPosition > 701 && scrollPosition < 800) {
        slide3.classList.add('scrolled-1-slide-3');
    } 
    
    else if (scrollPosition >= 900 && scrollPosition < 1000) {
        slide3.classList.remove('scrolled-1-slide-3');
        slide3.classList.add('scrolled-2-slide-3');
    } 
    
    else if (scrollPosition >= 1000 && scrollPosition < 1100) {
        slide3.classList.remove('scrolled-2-slide-3');
        slide3.classList.add('scrolled-3-slide-3');
    } 
    else {
        slide3.classList.remove('scrolled-1-slide-3', 'scrolled-2-slide-3', 'scrolled-3-slide-3');
    }

    if(scrollPosition >= 1100){
        slide3.style.display = 'none';
    }
    else{
        slide3.style.display = 'block';
    }
    
});


