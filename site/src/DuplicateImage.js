document.addEventListener("DOMContentLoaded", () => {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = sliderTrack.children;
    
    // Anzahl der Bilder bestimmen
    const numSlides = slides.length;
    
    // Dupliziere die Bilder
    for (let i = 0; i < numSlides; i++) {
      const clone = slides[i].cloneNode(true);
      sliderTrack.appendChild(clone);
    }
  
    // Pause und Fortsetzen der Animation bei Mouseover/Mouseout
    sliderTrack.addEventListener('mouseover', () => {
      sliderTrack.style.animationPlayState = 'paused';
    });
  
    sliderTrack.addEventListener('mouseout', () => {
      sliderTrack.style.animationPlayState = 'running';
    });
  });
  