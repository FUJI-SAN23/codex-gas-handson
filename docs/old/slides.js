let activeIndex = 0;

function updateSlide(step) {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageNum = document.getElementById("pageNumDisplay");

  // Hide current
  slides[activeIndex].classList.remove("active");

  // Update index
  activeIndex += step;

  // Clamp
  if (activeIndex < 0) activeIndex = 0;
  if (activeIndex >= slides.length) activeIndex = slides.length - 1;

  // Show new
  slides[activeIndex].classList.add("active");

  // Update buttons
  prevBtn.disabled = activeIndex === 0;
  nextBtn.disabled = activeIndex === slides.length - 1;

  // Update page number
  const current = String(activeIndex + 1).padStart(2, "0");
  const total = String(slides.length).padStart(2, "0");
  pageNum.textContent = `${current} / ${total}`;
}

// Expose for inline onclick handlers in HTML.
window.updateSlide = updateSlide;

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
    e.preventDefault();
    updateSlide(1);
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    updateSlide(-1);
  }
});

// Initialize display on load
window.addEventListener("DOMContentLoaded", () => {
  updateSlide(0);
});
