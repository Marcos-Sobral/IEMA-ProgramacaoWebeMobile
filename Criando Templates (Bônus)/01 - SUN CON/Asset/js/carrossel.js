const carousel = document.getElementById("carousel");
const wrapper = document.getElementById("carouselWrapper");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

function updateButtons() {
    const totalItems = carousel.children.length;

    // Sempre mostrar no mobile
    if (window.innerWidth <= 768) {
        prev.style.display = "block";
        next.style.display = "block";
        return;
    }

    // Somente se tiver mais de 4 produtos no desktop
    if (totalItems > 4) {
        prev.style.display = "block";
        next.style.display = "block";
    } else {
        prev.style.display = "none";
        next.style.display = "none";
    }
}

prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
});

next.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
});

window.addEventListener("resize", updateButtons);
updateButtons();