document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelectorAll('.grow');
    
    slides.forEach((slide, index) => {
        slide.addEventListener('mouseover', () => {

            // Check if it's not the last slide
            if (index === slides.length - 1) {
              const prevSlide = slides[index - 1];
             prevSlide.classList.add('hidden');
            }       


            if (index < slides.length - 1) {
                const nextSlide = slides[index + 1];
                nextSlide.classList.add('hidden');

            }
        });

        slide.addEventListener('mouseout', () => {

            // Check if it's the last slide
        if (index === slides.length - 1) {
        const prevSlide = slides[index - 1];
        prevSlide.classList.remove('hidden');
        }
            if (index < slides.length - 1) {
                const nextSlide = slides[index + 1];
                nextSlide.classList.remove('hidden');
            }
        });
    });
});