document.addEventListener("DOMContentLoaded", () => {

  // MOBILE MENU

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });


  // MEDIA ANALYSIS

  const mediaUrl = document.getElementById("mediaUrl");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const clearBtn = document.getElementById("clearBtn");

  const analysisStatus = document.getElementById("analysisStatus");
  const mediaResult = document.getElementById("mediaResult");
  const resultSource = document.getElementById("resultSource");

  function detectPlatform(url) {

    const value = url.toLowerCase();

    if (value.includes("youtube.com") || value.includes("youtu.be")) {
      return "YouTube URL";
    }

    if (value.includes("instagram.com")) {
      return "Instagram URL";
    }

    if (value.includes("tiktok.com")) {
      return "TikTok URL";
    }

    if (value.includes("facebook.com") || value.includes("fb.watch")) {
      return "Facebook URL";
    }

    if (value.includes("x.com") || value.includes("twitter.com")) {
      return "X URL";
    }

    return "Other media source";
  }


  analyzeBtn.addEventListener("click", () => {

    const url = mediaUrl.value.trim();

    mediaResult.classList.add("hidden");

    if (!url) {
      analysisStatus.textContent =
        "Please enter a media URL first.";
      return;
    }

    try {
      new URL(url);
    } catch (error) {
      analysisStatus.textContent =
        "Please enter a valid URL including https://";
      return;
    }

    analysisStatus.textContent =
      "Analyzing URL interface...";

    analyzeBtn.disabled = true;

    analyzeBtn.querySelector(".button-text").textContent =
      "Analyzing...";

    setTimeout(() => {

      const platform = detectPlatform(url);

      resultSource.textContent = platform;

      analysisStatus.textContent =
        "Demo analysis complete.";

      mediaResult.classList.remove("hidden");

      analyzeBtn.disabled = false;

      analyzeBtn.querySelector(".button-text").textContent =
        "Analyze Media";

      mediaResult.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    }, 1400);

  });


  clearBtn.addEventListener("click", () => {

    mediaUrl.value = "";

    analysisStatus.textContent = "";

    mediaResult.classList.add("hidden");

    mediaUrl.focus();

  });


  // FAQ

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

      faqItems.forEach(otherItem => {

        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }

      });

      item.classList.toggle("active");

    });

  });


  // CONTACT FORM DEMO

  const contactForm =
    document.getElementById("contactForm");

  const formMessage =
    document.getElementById("formMessage");

  contactForm.addEventListener("submit", event => {

    event.preventDefault();

    formMessage.textContent =
      "Demo message received locally. Connect a backend service later to send real emails.";

    contactForm.reset();

  });


  // SCROLL REVEAL

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );

  document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
  });


  // 3D CARD TILT

  const tiltCards =
    document.querySelectorAll(".tilt-card");

  tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

      if (window.innerWidth < 769) return;

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        (y - centerY) / 12;

      const rotateY =
        (centerX - x) / 12;

      card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-6px)`;

    });


    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

  });


  // PARTICLES

  const particleContainer =
    document.getElementById("particles");

  const particleCount =
    window.innerWidth < 768 ? 25 : 50;

  for (let i = 0; i < particleCount; i++) {

    const particle =
      document.createElement("span");

    particle.className =
      "particle";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.top =
      Math.random() * 100 + "%";

    particle.style.animationDuration =
      8 + Math.random() * 12 + "s";

    particle.style.animationDelay =
      Math.random() * -15 + "s";

    particle.style.opacity =
      0.2 + Math.random() * 0.7;

    particleContainer.appendChild(particle);

  }


  // BUTTON RIPPLE

  document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", event => {

      const ripple =
        document.createElement("span");

      const rect =
        button.getBoundingClientRect();

      const size =
        Math.max(rect.width, rect.height);

      ripple.style.width =
        ripple.style.height =
        size + "px";

      ripple.style.left =
        event.clientX - rect.left - size / 2 + "px";

      ripple.style.top =
        event.clientY - rect.top - size / 2 + "px";

      ripple.style.position =
        "absolute";

      ripple.style.borderRadius =
        "50%";

      ripple.style.background =
        "rgba(255,255,255,0.35)";

      ripple.style.transform =
        "scale(0)";

      ripple.style.pointerEvents =
        "none";

      ripple.style.transition =
        "transform 0.6s ease, opacity 0.6s ease";

      button.appendChild(ripple);

      requestAnimationFrame(() => {

        ripple.style.transform =
          "scale(3)";

        ripple.style.opacity =
          "0";

      });

      setTimeout(() => {
        ripple.remove();
      }, 700);

    });

  });

});
