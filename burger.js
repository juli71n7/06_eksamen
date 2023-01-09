const burger = document.querySelector(".burger");
const navUl = document.querySelector(".nav ul");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navUl.classList.toggle("active");
});

document.querySelectorAll(".navul").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    navUl.classList.remove("active");
  })
);
