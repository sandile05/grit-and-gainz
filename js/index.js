document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li a"); // Select all nav links

    // Toggle menu on burger click
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Close menu when clicking any nav item
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });

     // Close menu when clicking outside of it
     document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
});
