document.querySelectorAll('.expand-btn').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    const open = target.classList.toggle('open');
    button.setAttribute('aria-expanded', open);
    button.querySelector('span').textContent = open ? '−' : '+';
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
