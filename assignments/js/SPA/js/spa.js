const homeSection = document.getElementById("home-section");
console.log("Les Goooo!");
const customerSection = document.getElementById("customer-section");
const itemSection = document.getElementById("item-section");
const orderSection = document.getElementById("order-section");

const navLinks = document.querySelectorAll(".nav-link");

// Function to show a section and hide others
function showSection(section) {
    homeSection.style.display = "none";
    customerSection.style.display = "none";
    itemSection.style.display = "none";
    orderSection.style.display = "none";
    section.style.display = "block";
}

// Event listeners for navigation links
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSectionId = this.getAttribute("href").substring(1) + "-section";
        const targetSection = document.getElementById(targetSectionId);
        showSection(targetSection);
    });
});

// Initialize: Show the default section (e.g., Home)
showSection(homeSection);