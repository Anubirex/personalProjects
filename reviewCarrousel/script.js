// define variables
const nextSlide = document.getElementById('nextButton');
const prevSlide = document.getElementById('prevButton');
let currentIndex = 0;
let slideInterval = setInterval(moveToNextSlide, 5000);

// make an array with all slides included
const reviewSlides = Array.from(document.querySelectorAll('#reviewCarrousel .review-card'));

// make a function to check for current slide and hide all others
function showSlide(index) {
    reviewSlides.forEach((slide, i) => {
        slide.style.display = 'none'; // Ensure slides are hidden after animation
        slide.classList.remove('slide-left', 'slide-right'); // Clean up
    });

    // No need for a delay here since we're waiting in the moveToNextSlide/PrevSlide functions
    reviewSlides[index].style.display = 'block';
}
showSlide(currentIndex);

// make function to move to next/prev slide
function moveToNextSlide() {
    applyExitAnimation(currentIndex, 'left');
    currentIndex = (currentIndex + 1) % reviewSlides.length;
    setTimeout(() => showSlide(currentIndex), 500); // Wait for animation to complete
    pauseSlideShow();
    startSlideShow();
}

function moveToPrevSlide() {
    applyExitAnimation(currentIndex, 'right');
    currentIndex = (currentIndex - 1 + reviewSlides.length) % reviewSlides.length;
    setTimeout(() => showSlide(currentIndex), 500); // Wait for animation to complete
    pauseSlideShow();
    startSlideShow();
}

nextSlide.addEventListener('click', moveToNextSlide);
prevSlide.addEventListener('click', moveToPrevSlide);

// make function to pause slideshow
function pauseSlideShow() {
    clearInterval(slideInterval);
}

// make function to start slideshow
function startSlideShow() {
    slideInterval = setInterval(moveToNextSlide, 5000);
}

// make a pause function
reviewSlides.forEach(slide => {
    slide.addEventListener('click', pauseSlideShow);
});

function applyExitAnimation(index, direction) {
    const slide = reviewSlides[index];
    slide.classList.remove('slide-left', 'slide-right'); // Clean up previous animations
    slide.offsetWidth; // Trigger reflow to restart animation
    slide.classList.add(direction === 'left' ? 'slide-left' : 'slide-right');
}