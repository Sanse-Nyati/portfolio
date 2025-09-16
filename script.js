const sections = document.querySelectorAll('.about, .projects, .experience, .contact');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  /* ==== TYPING ANIMATION ==== */
  const text = "Andrew Junior AFANDE...";
  let i = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typing-text");

  function type() {
    if (!isDeleting) {
      typingElement.innerHTML = `<span style="color: var(--accent);">${text.substring(0, i)}</span>`;
      i++;
      if (i > text.length) {
        isDeleting = true;
        setTimeout(type, 1500); // pause before deleting
        return;
      }
    } else {
      typingElement.innerHTML = `<span style="color: var(--accent);">${text.substring(0, i)}</span>`;
      i--;
      if (i === 0) {
        isDeleting = false;
      }
    }
    setTimeout(type, isDeleting ? 100 : 200);
  }

  type();

  /* ==== SMOOTH SCROLL ==== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  /* ==== SCROLL REVEAL ==== */
  const sections = document.querySelectorAll(".section, .hero");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const boxTop = section.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ==== SKILL BAR ANIMATION ==== */
  const skillBars = document.querySelectorAll(".progress div");
  const animateSkills = () => {
    const triggerBottom = window.innerHeight * 0.85;
    skillBars.forEach(bar => {
      const barTop = bar.getBoundingClientRect().top;
      if (barTop < triggerBottom && bar.style.width === "") {
        const skillPercent = Math.floor(Math.random() * (95 - 70 + 1)) + 70; // random between 70-95%
        bar.style.width = skillPercent + "%";
      }
    });
  };
  window.addEventListener("scroll", animateSkills);
  animateSkills();
});
