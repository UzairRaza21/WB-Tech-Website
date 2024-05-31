
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.usa-service-slide');

    slides.forEach(function(slide, index) {
        slide.addEventListener("mouseenter", function() {
            // Hide the entire div containing the adjacent image of the expanded slide
            const expandedSlide = this;
            const nextSlide = expandedSlide.nextElementSibling;
            const prevSlide = slides[index - 1];
            if (nextSlide) {
                setTimeout(function() {
                    nextSlide.style.display = 'none';
                }, 0);
             
            }
            if (index === slides.length - 1 && prevSlide) {
                setTimeout(function() {
                    prevSlide.style.display = 'none';
                }, 0);
            }
        });

        slide.addEventListener("mouseleave", function() {
            // Restore visibility of the adjacent div when mouse leaves the slide
            const expandedSlide = this;
            const nextSlide = expandedSlide.nextElementSibling;
            const prevSlide = slides[index - 1];
            if (nextSlide) {
                setTimeout(function() {
                    nextSlide.style.display = 'block';
                }, 2500);
            }
            if (index === slides.length - 1 && prevSlide) {
                setTimeout(function() {
                    prevSlide.style.display = 'block';
                }, 2500);

            }
        });
    });
});

