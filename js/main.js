const year = document.querySelector("[data-current-year]");
const backToTop = document.querySelector(".back-to-top");

if (year) {
    year.textContent = new Date().getFullYear();
}

function updateBackToTop() {
    if (backToTop) {
        backToTop.hidden = window.scrollY < 600;
    }
}

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo(0, 0);
        document.querySelector(".skip-link").focus();
    });

    window.addEventListener("scroll", updateBackToTop);
    updateBackToTop();
}
