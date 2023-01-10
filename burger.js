const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenvises");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      burger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}
