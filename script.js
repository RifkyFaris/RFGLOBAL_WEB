const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("x");
const menu = document.querySelector(".ul_header");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    menu.classList.remove("active");
    closeIcon.style.display = "none";
    hamburger.style.display = "block";
});

/* Close menu when clicking a link */
document.querySelectorAll(".li_header").forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
        closeIcon.style.display = "none";
        hamburger.style.display = "block";
    });
});
