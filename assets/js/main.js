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

// Chat Dark Mode Memory
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  const html = document.documentElement;

  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// =============================
// Mobile Menu (optional future)
// =============================
// Add later if you implement hamburger menu
