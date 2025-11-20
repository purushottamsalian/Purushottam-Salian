// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
});

// Contact Form Message Box
const form = document.querySelector(".contact-form");
const messageBox = document.getElementById("message-box");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    messageBox.innerHTML = `<div class="message-box message-success">Message sent successfully!</div>`;

    setTimeout(() => {
        messageBox.innerHTML = "";
    }, 3000);

    form.reset();
});
