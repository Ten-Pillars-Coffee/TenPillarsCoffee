document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");

  burger?.addEventListener("click", () => {
    nav?.classList.toggle("active");
    burger.classList.toggle("active");
  });
});
