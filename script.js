const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-large-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content .header-btn", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
});

ScrollReveal().reveal(".nav-links li", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1000,
    interval: 400,
});