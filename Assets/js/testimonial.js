const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-slide');
const totalSlides = slides.length;
let index = 0;
let autoplay;

function updateSlides() {
    const offset = -(index * (100 / 3 + 0.5)); // Adding gap percentage
    sliderWrapper.style.transform = `translateX(${offset}%)`;
    slides.forEach(slide => slide.classList.remove('slider-slide-center', 'active', 'slider-slide-adjacent'));
    if (slides[index + 1]) {
        slides[index + 1].classList.add('slider-slide-center');
    }
}

function nextSlide() {
    index++;
    sliderWrapper.style.transition = 'transform 0.5s ease';
    updateSlides();
    if (index === totalSlides - 3) {
        setTimeout(() => {
            sliderWrapper.style.transition = 'none';
            index = 0;
            updateSlides();
        }, 500);
    }
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = totalSlides - 4;
        sliderWrapper.style.transition = 'none';
        updateSlides();
    } else {
        sliderWrapper.style.transition = 'transform 0.5s ease';
        updateSlides();
    }
}

function toggleActiveSlide(event) {
    const activeSlide = document.querySelector('.slider-slide-center');
    if (activeSlide) {
        const adjacentSlides = [slides[index], slides[index + 2]];
        activeSlide.classList.toggle('active');
        adjacentSlides.forEach(slide => slide.classList.toggle('slider-slide-adjacent'));
        if (activeSlide.classList.contains('active')) {
            clearInterval(autoplay);
        } else {
            autoplay = setInterval(nextSlide, 2500);
        }
    }
}

function startAutoplay() {
    autoplay = setInterval(nextSlide, 2500000);
}

document.addEventListener('click', (event) => {
    const isClickInside = document.querySelector('.slider-container').contains(event.target);
    if (!isClickInside) {
        const activeSlide = document.querySelector('.slider-slide-center.active');
        if (activeSlide) {
            activeSlide.classList.remove('active');
            const adjacentSlides = [slides[index], slides[index + 2]];
            adjacentSlides.forEach(slide => slide.classList.remove('slider-slide-adjacent'));
            startAutoplay();
        }
    }
});

document.querySelector('.slider-container').addEventListener('mousedown', (e) => {
    clearInterval(autoplay);
    let startX = e.pageX;
    sliderWrapper.style.transition = 'none';

    function onMouseMove(e) {
        let moveX = e.pageX - startX;
        sliderWrapper.style.transform = `translateX(calc(-${(index * (100 / 3 + 1.666))}% + ${moveX}px))`;
    }

    function onMouseUp() {
        sliderWrapper.style.transition = 'transform 0.5s ease';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        autoplay = setInterval(nextSlide, 2500);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

document.querySelector('.nav-button-left').addEventListener('click', () => {
    clearInterval(autoplay);
    prevSlide();
    autoplay = setInterval(nextSlide, 2500);
});

document.querySelector('.nav-button-right').addEventListener('click', () => {
    clearInterval(autoplay);
    nextSlide();
    autoplay = setInterval(nextSlide, 2500);
});

document.querySelectorAll('.slider-slide').forEach(slide => {
    slide.addEventListener('click', toggleActiveSlide);
});

updateSlides();
startAutoplay();