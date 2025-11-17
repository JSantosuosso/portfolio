// =============================
// Dark Mode Persistence + Slider
// =============================
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById("darkToggle");

  // Initial Load: Apply stored value immediately
  if (localStorage.getItem("dark") === "true") {
    root.classList.add("dark-mode");
  }

  // Update slider state on load
  function updateSlider(){
    const enabled = root.classList.contains("dark-mode");
    toggle.classList.toggle("active", enabled);
  }
  updateSlider();

  toggle.addEventListener("click", () => {
    root.classList.toggle("dark-mode");
    const enabled = root.classList.contains("dark-mode");
    localStorage.setItem("dark", enabled);
    updateSlider();
  });
})();

// =============================
// Scroll-Fade Animation
// =============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll('.fade-scroll').forEach(el => observer.observe(el));

// =============================
// Cursor Glow Tracker
// =============================
document.addEventListener("mousemove", e => {
  document.documentElement.style.setProperty("--cursor-x", e.clientX + "px");
  document.documentElement.style.setProperty("--cursor-y", e.clientY + "px");
});

// =============================
// Mobile Menu (optional future)
// =============================
// Add later if you implement hamburger menu
