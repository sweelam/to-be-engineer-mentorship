// Predefined list of image filenames
const imageFilenames = [
  'mahmoud-feedback.jpeg',
  'warda-feedback.png',
  'mahmoud-photo.png',
  'hussam-feedback.png',
  'abdo-naser-welcome.png',
  'mohamed-essam-welcome.png',
  'ahmed-adel-welcome.png',
  'abdulaziz-feedback.png',
  'abdo-naser-project.png'
];

// Function to dynamically create carousel items
function createCarouselItems() {
  const carouselInner = document.querySelector('.carousel-inner');

  imageFilenames.forEach((filename, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    if (index === 0) {
      carouselItem.classList.add('active');
    }

    const img = document.createElement('img');
    img.src = `img/${filename}`;
    img.alt = `Image ${index + 1}`;

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });
}

// Function to dynamically create carousel indicators
function createCarouselIndicators() {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  carouselItems.forEach((item, index) => {
    const button = document.createElement('button');
    button.setAttribute('onclick', `currentSlide(${index})`);
    if (index === 0) {
      button.classList.add('active');
    }
    indicatorsContainer.appendChild(button);
  });
}

createCarouselItems();
// Call the function to create indicators
createCarouselIndicators();

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.carousel-indicators button');
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[currentIndex].classList.add('active');
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// Initialize the carousel
showSlide(currentIndex);

