// Menu hambúrguer
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Pesquisa (lupa que abre input)
const searchToggle = document.getElementById("search-toggle");
const searchInput = document.getElementById("search-input");

searchToggle.addEventListener("click", () => {
  searchInput.classList.toggle("show");
  if (searchInput.classList.contains("show")) {
    searchInput.focus(); // foca no campo ao abrir
  }
});