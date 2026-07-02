// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Navbar Shadow
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
    } else {
      navbar.style.boxShadow = "none";
    }
  }
});
