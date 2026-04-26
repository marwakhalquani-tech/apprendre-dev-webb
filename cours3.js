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

// ===== SCROLL EFFECT =====
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 400;

    if (scrollY > offset) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// ===== PARAGRAPH GLOW =====
document.querySelectorAll("p").forEach(p => {
  p.addEventListener("mouseenter", () => {
    p.style.textShadow = "0 0 10px #00e5ff";
  });

  p.addEventListener("mouseleave", () => {
    p.style.textShadow = "none";
  });
});