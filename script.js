const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const revealSections = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealSections.forEach((section) => observer.observe(section));

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks for reaching out! I’ll get back to you soon.";
    contactForm.reset();
  });
}

const canvas = document.getElementById("starfield");
const ctx = canvas?.getContext("2d");

const stars = [];
const STAR_COUNT = 260;

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  if (ctx) {
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }
}

function createStars() {
  stars.length = 0;
  for (let i = 0; i < STAR_COUNT; i += 1) {
    const layer = Math.random();
    const radius = layer > 0.85 ? Math.random() * 2.4 + 0.8 : Math.random() * 1.6 + 0.3;
    const drift = layer > 0.85 ? Math.random() * 0.6 + 0.2 : Math.random() * 0.3 + 0.05;
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius,
      alpha: Math.random() * 0.7 + 0.2,
      drift,
      twinkle: Math.random() * 0.02 + 0.005,
      hue: 210 + Math.random() * 40
    });
  }
}

function renderStars() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.scale(devicePixelRatio, devicePixelRatio);
  ctx.shadowBlur = 26;
  ctx.shadowColor = "rgba(90, 170, 255, 0.95)";
  stars.forEach((star) => {
    star.alpha += Math.sin(Date.now() * star.twinkle) * 0.015;
    ctx.globalAlpha = Math.max(0.15, Math.min(1, star.alpha));
    ctx.fillStyle = `hsla(${star.hue}, 80%, 92%, 1)`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.drift * 0.3;
    if (star.y > window.innerHeight) {
      star.y = -5;
      star.x = Math.random() * window.innerWidth;
    }
  });
  ctx.restore();
  requestAnimationFrame(renderStars);
}

if (canvas && ctx) {
  resizeCanvas();
  createStars();
  renderStars();
  window.addEventListener("resize", () => {
    resizeCanvas();
    createStars();
  });
}
