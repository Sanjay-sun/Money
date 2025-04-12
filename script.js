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
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
  requestAnimationFrame(drawStars);
}
drawStars();
document.addEventListener('mousemove', e => {
  const trail = document.createElement('span');
  trail.className = 'trail';
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 300);
});
const buttonClickSound = new Audio('click.mp3');
const keyPressSound = new Audio('key.mp3');

// Play sound on button click
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    buttonClickSound.currentTime = 0;
    buttonClickSound.play();
  });
});

// Play sound on typing
document.addEventListener('keydown', (e) => {
  keyPressSound.currentTime = 0;
  keyPressSound.play();
});
document.addEventListener('click', e => {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(particle);
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80;
    particle.style.setProperty('--x', Math.cos(angle) * distance + 'px');
    particle.style.setProperty('--y', Math.sin(angle) * distance + 'px');
    setTimeout(() => particle.remove(), 800);
  }
});
for (let i = 0; i < 25; i++) {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');
  document.body.appendChild(firefly);
}
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.body.style.backgroundPositionY = `${scrolled * 0.5}px`;
});
