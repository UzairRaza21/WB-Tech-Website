window.addEventListener('scroll', function() {

    var slide1 = document.getElementById('myDiv-1');
    var slide2 = document.getElementById('myDiv-2');
    var slide3 = document.getElementById('myDiv-3');
    var scrollPosition = window.scrollY;

    // Slide- 1
    if (scrollPosition > 50 && scrollPosition < 100) {
        slide1.classList.add('scrolled-1');
        slide1.classList.remove('scrolled-2');
    } 
    
    else if (scrollPosition >= 100 && scrollPosition < 150) {
        slide1.classList.remove('scrolled-1');
        slide1.classList.add('scrolled-2');
    } 
    
    else {
        slide1.classList.remove('scrolled-1', 'scrolled-2');
    }

    if(scrollPosition >= 150){
        slide1.style.display = 'none';
    }
    else{
        slide1.style.display = 'block';
    }


});




window.addEventListener('scroll', function() {

    var slide2 = document.getElementById('myDiv-2');
    var scrollPosition = window.scrollY;
    var ball1 = document.querySelector('.ball-1');
    var ball2 = document.querySelector('.ball-2')

    // Slide-2
    if (scrollPosition > 151 && scrollPosition < 200) {
        slide2.classList.add('scrolled-1-slide-2');
        slide2.classList.remove('scrolled-2-slide-2');
        ball1.classList.toggle('up');
        ball2.classList.toggle('down');
       
    } 
    
    else if (scrollPosition >= 200 && scrollPosition < 250) {
        slide2.classList.remove('scrolled-1-slide-2');
        slide2.classList.add('scrolled-2-slide-2');
    } 
    
    // else if (scrollPosition >= 300 && scrollPosition < 350) {
    //     slide2.classList.remove('scrolled-2-slide-2');
    //     slide2.classList.add('scrolled-3-slide-2');
    //     ball1.classList.remove('up');
    //     ball2.classList.remove('down');
    // } 
    else {
        slide2.classList.remove('scrolled-1-slide-2', 'scrolled-2-slide-2', 'scrolled-3-slide-2');
    }

    if(scrollPosition >= 250){
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
    if (scrollPosition > 251 && scrollPosition < 300) {
        slide3.classList.add('scrolled-1-slide-3');
        slide3.classList.remove('scrolled-2-slide-3');
    } 
    
    else if (scrollPosition >= 300 && scrollPosition < 350) {
        slide3.classList.remove('scrolled-1-slide-3');
        slide3.classList.add('scrolled-2-slide-3');
    } 
    
    else if (scrollPosition >= 350 && scrollPosition < 400) {
        slide3.classList.remove('scrolled-2-slide-3');
        slide3.classList.add('scrolled-3-slide-3');
    } 
    else {
        slide3.classList.remove('scrolled-1-slide-3', 'scrolled-2-slide-3', 'scrolled-3-slide-3');
    }

    if(scrollPosition >= 400){
        slide3.style.display = 'none';
    }
    else{
        slide3.style.display = 'block';
    }
    
});


