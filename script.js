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

ScrollReveal().reveal(".destination-container .section-header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".destination-container .section-subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".destination-container .destination-card", {
    ...scrollRevealOption,
    delay: 800,
    interval: 300,
});

ScrollReveal().reveal(".discount-content h2", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".discount-content p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".discount-content .discount-btn", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
});

ScrollReveal().reveal(".feature-container .section-header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".feature-container .section-subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".feature-container .feature-card", {
    interval: 500,
    delay: 1500,
});

