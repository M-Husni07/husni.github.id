// Efek animasi masuk setiap halaman
window.addEventListener("DOMContentLoaded", () => {
  const fade = document.querySelector(".fade-slide");
  if (fade) setTimeout(() => fade.classList.add("show"), 150);
});