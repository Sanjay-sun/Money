// 🌗 Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// 🎯 Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 💥 Animate Buttons on Click
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 300);
  });
});
