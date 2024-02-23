// define variables
const nextSlide = document.getElementById('nextButton');
const prevSlide = document.getElementById('prevButton');
let currentIndex = 0;

// make an array with all slides included
const reviewSlides = Array.from(document.querySelectorAll('#reviewCarrousel .review-card'));

// make a function to check for current slide and hide all others
function showSlide(index) {
    reviewSlides.forEach(reviewSlide => {
        reviewSlide.style.display = 'none';
    });

    reviewSlides[index].style.display = 'block';
}
showSlide(currentIndex);
// make function to go to next slide
nextSlide.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % reviewSlides.length;
    showSlide(currentIndex);
});

// make function to go to prev slide
prevSlide.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + reviewSlides.length) % reviewSlides.length;
    showSlide(currentIndex);
});