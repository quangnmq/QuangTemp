const menuButton = document.querySelector('.menu-toggle');
const navGroups = document.querySelectorAll('.nav-group');

if (menuButton && navGroups.length) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Mở menu' : 'Đóng menu');
    navGroups.forEach((group) => group.classList.toggle('open', !isOpen));
  });

  navGroups.forEach((group) => {
    group.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Mở menu');
        navGroups.forEach((item) => item.classList.remove('open'));
      });
    });
  });
}

const yearLabel = document.querySelector('[data-current-year]');
if (yearLabel) yearLabel.textContent = new Date().getFullYear();
