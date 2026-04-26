// ===== SMOOTH SCROLL =====
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// ===== CARD ANIMATION ON SCROLL =====
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let offset = sec.offsetTop - 400;

    if (window.scrollY > offset) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// ===== CARD HOVER EFFECT SOUNDLESS GLOW =====
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 25px #00e5ff";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});