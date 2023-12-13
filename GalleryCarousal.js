const carousel = document.getElementById('carousel');
let currentIndex = 0;
const intervalTime = 3000; // Set the interval time in milliseconds (e.g., 3000ms or 3s)

function showSlides(index) {
  const newTransformValue = -index * 16.666 + '%';
  carousel.style.transform = 'translateX(' + newTransformValue + ')';
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % 6;
  showSlides(currentIndex);
}

// Set an interval to automatically move to the next set of slides
const autoSlideInterval = setInterval(autoSlide, intervalTime);

// Stop the auto sliding when the user interacts with the carousel
carousel.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
carousel.addEventListener('mouseout', () => autoSlideInterval = setInterval(autoSlide, intervalTime));




