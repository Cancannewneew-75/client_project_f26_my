const year = document.querySelector("[data-current-year]");
const backToTop = document.querySelector(".back-to-top");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 600) {
            backToTop.hidden = false;
        } else {
            backToTop.hidden = true;
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo(0, 0);
        document.querySelector(".skip-link").focus();
    });
}
