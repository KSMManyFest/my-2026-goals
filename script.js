const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;
const imageCount = images.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageCount - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < imageCount - 1) ? currentIndex + 1 : 0;
    updateSlider();
});