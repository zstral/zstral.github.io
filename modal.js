const modal = document.getElementById("infoModal");
const about = document.getElementById("aboutBtn");
const closeBtn = document.getElementById("closeBtn");

aboutBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

about.addEventListener("click", () => {
    modal.classList.add("active");
    modal.classList.remove("fadeOut");
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("fadeOut");
    setTimeout(() => {
        modal.classList.remove("active");
    }, 500);
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("fadeOut");
        setTimeout(() => {
            modal.classList.remove("active");
        }, 500);
    }
});