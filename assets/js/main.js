// =============================
// Dark Mode Persistence + Slider
// =============================
const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  // Save preference
  if (document.documentElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


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
