const slides = document.querySelectorAll(".sobre-imagem .slide");
const slidesFullscreen = document.querySelectorAll("#fullscreen .slide");


const fullscreen = document.getElementById("fullscreen");
const btnFechar = document.querySelector(".fechar");

let index = 0;

// ===== MOSTRAR SLIDE (SINCRONIZA NORMAL + FULLSCREEN)
function mostrarSlide(i) {
  slides.forEach(s => s.classList.remove("ativo"));
  slidesFullscreen.forEach(s => s.classList.remove("ativo"));

  slides[i].classList.add("ativo");
  slidesFullscreen[i].classList.add("ativo");
}



// ===== AUTO SLIDE
setInterval(() => {
  index++;
  if (index >= slides.length) index = 0;
  mostrarSlide(index);
}, 4000);

// ===== ABRIR FULLSCREEN
slides.forEach((img, i) => {
  img.addEventListener("click", () => {
    index = i;
    mostrarSlide(index);
    fullscreen.classList.add("ativo");
  });
});

// ===== FECHAR FULLSCREEN
btnFechar.addEventListener("click", () => {
  fullscreen.classList.remove("ativo");
});