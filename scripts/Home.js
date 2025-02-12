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
