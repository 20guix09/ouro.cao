// =====================================================
// SLIDER DE IMAGENS + FULLSCREEN + MENU MOBILE
// =====================================================

// Imagens do slider principal
const slides = document.querySelectorAll(".sobre-imagem .slide");

// Imagens exibidas no modo fullscreen
const slidesFullscreen = document.querySelectorAll("#fullscreen .slide");

// Elementos do fullscreen
const fullscreen = document.getElementById("fullscreen");
const btnFechar = document.querySelector(".fechar");

// Elementos do menu mobile
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

// Índice da imagem atual
let indexAtual = 0;

// =====================================================
// ATUALIZA O SLIDE ATIVO
// Sincroniza o slider normal com o fullscreen
// =====================================================
function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove("ativo"));
  slidesFullscreen.forEach(slide => slide.classList.remove("ativo"));

  slides[index].classList.add("ativo");
  slidesFullscreen[index].classList.add("ativo");
}

// =====================================================
// TROCA AUTOMÁTICA DOS SLIDES
// Altera a imagem a cada 4 segundos
// =====================================================
setInterval(() => {
  indexAtual++;

  if (indexAtual >= slides.length) {
    indexAtual = 0;
  }

  mostrarSlide(indexAtual);
}, 4000);

// =====================================================
// ABRE A IMAGEM EM FULLSCREEN
// Ao clicar em uma imagem do slider
// =====================================================
slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    indexAtual = index;
    mostrarSlide(indexAtual);
    fullscreen.classList.add("ativo");
  });
});

// =====================================================
// FECHA O FULLSCREEN
// =====================================================
btnFechar.addEventListener("click", () => {
  fullscreen.classList.remove("ativo");
});

// =====================================================
// ABRE E FECHA O MENU MOBILE
// =====================================================
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

// =====================================================
// FECHA O MENU AO CLICAR EM UM LINK
// Melhora a experiência no celular
// =====================================================
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});