const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("x");
const menu = document.querySelector(".ul_header");

// open menu
hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  hamburger.classList.add("hidden");
  closeIcon.classList.add("show");
});

// close menu
closeIcon.addEventListener("click", () => {
  menu.classList.remove("active");
  hamburger.classList.remove("hidden");
  closeIcon.classList.remove("show");
});

// close when clicking menu item
document.querySelectorAll(".li_header").forEach(item => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
    hamburger.classList.remove("hidden");
    closeIcon.classList.remove("show");
  });
});
