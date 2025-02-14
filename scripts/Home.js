window.addEventListener("scroll", () => {
  const content = document.querySelector(".scroll-content");
  const contentPosition = content.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (contentPosition < screenPosition) {
    content.classList.add("visible");
  } else {
    content.classList.remove("visible");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".first-container p, .first-container button, .second-container img, .first-third-container,  .second-third-container, .first-fourth-container, .first-fifth-container, .first-sixth-container"
  );

  function checkVisibility() {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);

  // Initial check in case elements are already in view
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".second-parent-container div, .second-fourth-container div, .third-fourth-container div, .second-fifth-container div");

  function checkVisibility() {
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        !el.classList.contains("visible")
      ) {
        // Check if NOT already visible
          setTimeout(() => {
            el.classList.add("visible");
          }, index * 100);
        // Staggered delay (300ms)
      }
    })
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility); // Also check on resize
  checkVisibility(); // Initial check in case elements are already visible
});
