document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const reveals = document.querySelectorAll(".reveal");

  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const expanded = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    header.querySelectorAll(".site-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  reveals.forEach((element) => observer.observe(element));
});
