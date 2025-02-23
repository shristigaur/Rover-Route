function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("open");
}

const buttons = document.querySelectorAll(".barrier-btn");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.4)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
    });
});