const slides = document.querySelectorAll('.slide'),
previousBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next');
let currentSlide = 0;

const chooseNextSlide = i => {
    slides[currentSlide].className = 'slide';
    currentSlide = (i + slides.length)%slides.length;
    slides[currentSlide].className = 'slide current';
}

const showNextSlide = () => chooseNextSlide(currentSlide + 1);

const showPreviousSlide = () => chooseNextSlide(currentSlide - 1);

const autoSlideShow = setInterval(showNextSlide, 4000);

previousBtn.addEventListener('click', () => showPreviousSlide());

nextBtn.addEventListener('click', () => showNextSlide());

// var slideIndex = 1;
// showSlides(slideIndex);

// // Вперед/назад элементы управления
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Элементы управления миниатюрами изображений
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }