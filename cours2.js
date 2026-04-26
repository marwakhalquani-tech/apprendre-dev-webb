// ===== SMOOTH SCROLL NAV =====
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

// ===== SCROLL ANIMATION EFFECT =====
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;

    if (top > offset) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// ===== HOVER SHADOW EFFECT =====
sections.forEach(sec => {
  sec.addEventListener("mouseenter", () => {
    sec.style.boxShadow = "0 0 25px rgba(0,229,255,0.4)";
  });

  sec.addEventListener("mouseleave", () => {
    sec.style.boxShadow = "none";
  });
});
// button animation on load
window.addEventListener("load", () => {
  const btn = document.querySelector("button");

  btn.style.opacity = "0";
  btn.style.transform = "translateY(20px)";

  setTimeout(() => {
    btn.style.transition = "0.6s ease";
    btn.style.opacity = "1";
    btn.style.transform = "translateY(0)";
  }, 300);
});