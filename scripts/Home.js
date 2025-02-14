window.addEventListener('scroll', () => {
  const content = document.querySelector('.scroll-content');
  const contentPosition = content.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (contentPosition < screenPosition) {
      content.classList.add('visible');
  } else {
      content.classList.remove('visible');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.first-container p, .first-container button, .second-container img, .second-parent-container div');

  function checkVisibility() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check in case elements are already in view
  checkVisibility();
});
