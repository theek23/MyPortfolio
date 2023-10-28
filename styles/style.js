let loader = document.getElementById("loader");
function hideLoader() {
    loader.style.display = 'none';
}
setTimeout(function () {
    hideLoader();
}, 3000);


$(document).ready(function () {
    const hamber = document.querySelector(".hamber");
    const navMenu = document.querySelector(".navMenu");
    hamber.addEventListener("click", () => {
        hamber.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
    document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamber.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});