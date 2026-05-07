let btn = document.querySelector(".navbar-toggler");
let menu = document.querySelector(".navbar-collapse");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
