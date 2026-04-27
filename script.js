const slides = document.querySelectorAll(".slide");
const btnEsquerda = document.querySelector(".seta.esquerda");
const btnDireita = document.querySelector(".seta.direita");

let index = 0;

function mostrarSlide(i) {
  slides.forEach((slide) => slide.classList.remove("ativo"));
  slides[i].classList.add("ativo");
}

btnDireita.addEventListener("click", () => {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  mostrarSlide(index);
});

btnEsquerda.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }

  mostrarSlide(index);
});

setInterval(() => {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  mostrarSlide(index);
}, 4000);