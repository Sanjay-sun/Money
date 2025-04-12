// 🌗 Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
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

// 🔥 Scroll Reveal Animation
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ⌨️ Typing Effect (Simple Static)
document.addEventListener("DOMContentLoaded", () => {
  const typing = document.querySelector('.typing-text');
  const text = "Hello, I'm Sanjay. Welcome to my portfolio!";
  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      typing.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 50);
    }
  }

  typeLetter();
});
