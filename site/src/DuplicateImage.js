document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.querySelector('.slider-track');
  const slides = sliderTrack.children;

  const numSlides = slides.length;

  // animation verhindern bevor bilder geladen sind
  window.addEventListener("load", () => {
    sliderTrack.style.animationPlayState = 'running';
  });

  // bilder duplizieren
  for (let i = 0; i < numSlides; i++) {
    const clone = slides[i].cloneNode(true);
    sliderTrack.appendChild(clone);
  }
});
