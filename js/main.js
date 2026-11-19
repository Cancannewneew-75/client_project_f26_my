const yearElements = document.querySelectorAll("[data-current-year]");
const backToTopButton = document.querySelector(".back-to-top");

yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
});

if (backToTopButton) {
    const updateBackToTopButton = () => {
        backToTopButton.hidden = window.scrollY < 600;
    };

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0 });
        document.querySelector(".skip-link")?.focus();
    });

    window.addEventListener("scroll", updateBackToTopButton, { passive: true });
    updateBackToTopButton();
}
