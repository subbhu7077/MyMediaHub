document.addEventListener("DOMContentLoaded", () => {

  // MOBILE MENU
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });


  // MEDIA ANALYZER
  const mediaUrl = document.getElementById("mediaUrl");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const clearBtn = document.getElementById("clearBtn");
  const status = document.getElementById("status");
  const resultCard = document.getElementById("resultCard");
  const platformResult = document.getElementById("platformResult");

  function detectPlatform(url) {

    const text = url.toLowerCase();

    if (text.includes("youtube.com") || text.includes("youtu.be")) {
      return "YouTube";
    }

    if (text.includes("instagram.com")) {
      return "Instagram";
    }

    if (text.includes("tiktok.com")) {
      return "TikTok";
    }

    if (text.includes("facebook.com") || text.includes("fb.watch")) {
      return "Facebook";
    }

    if (text.includes("twitter.com") || text.includes("x.com")) {
      return "X";
    }

    return "Other Media Source";
  }

  analyzeBtn.addEventListener("click", () => {

    const url = mediaUrl.value.trim();

    resultCard.classList.add("hidden");

    if (!url) {
      status.textContent = "Please enter a media URL.";
      return;
    }

    try {
      new URL(url);
    } catch {
      status.textContent = "Please enter a valid URL including https://";
      return;
    }

    analyzeBtn.disabled = true;
    analyzeBtn.textContent = "Analyzing...";

    status.textContent = "Analyzing media information...";

    setTimeout(() => {

      platformResult.textContent = detectPlatform(url);

      resultCard.classList.remove("hidden");

      status.textContent = "Demo analysis complete.";

      analyzeBtn.disabled = false;
      analyzeBtn.innerHTML = 'Analyze Media <span>→</span>';

    }, 1300);

  });


  clearBtn.addEventListener("click", () => {

    mediaUrl.value = "";
    status.textContent = "";
    resultCard.classList.add("hidden");
    mediaUrl.focus();

  });


  // FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

    const button = item.querySelector("button");

    button.addEventListener("click", () => {

      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
        }
      });

      item.classList.toggle("active");

    });

  });


  // CONTACT FORM
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", event => {

    event.preventDefault();

    formStatus.textContent =
      "Demo message received locally. Connect a backend later for real email delivery.";

    contactForm.reset();

  });


  // SCROLL REVEAL
  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }

    });

  }, {
    threshold: 0.15
  });

  document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
  });


  // 3D CARD EFFECT
  document.querySelectorAll(".tilt").forEach(card => {

    card.addEventListener("mousemove", event => {

      if (window.innerWidth < 769) return;

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateX = (y - rect.height / 2) / 15;
      const rotateY = (rect.width / 2 - x) / 15;

      card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

  });


  // PARTICLES
  const particles = document.getElementById("particles");

  const count =
    window.innerWidth < 768 ? 25 : 50;

  for (let i = 0; i < count; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.animationDuration =
      8 + Math.random() * 12 + "s";

    particle.style.animationDelay =
      Math.random() * -10 + "s";

    particles.appendChild(particle);

  }

});
// Test Supabase connection
console.log("MyMediaHub Supabase connected:", supabaseClient);
