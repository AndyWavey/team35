// Tania // 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("cases__mySlides");
  for (i = 0; i < slides.length; i++) {                               //Boolean//loop 
    slides[i].style.display = "none";                                 //Boolean
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500);                                      // Change image every 2,5 seconds
}