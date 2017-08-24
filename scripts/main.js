document.addEventListener("DOMContentLoaded", (event) => {

    let openMenu = document.getElementById("open-mobile-menu")
    let closeMenu = document.getElementById("close-mobile-menu");
    let menu = document.getElementById("mobile-menu");

    const toggleMenu = (e) => { menu.classList.toggle("show");};

    openMenu.addEventListener("click", toggleMenu);
    closeMenu.addEventListener("click", toggleMenu);
});