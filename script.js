const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Mở menu' : 'Đóng menu');
    navigation.classList.toggle('open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Mở menu');
      navigation.classList.remove('open');
    });
  });
}

const yearLabel = document.querySelector('[data-current-year]');
if (yearLabel) yearLabel.textContent = new Date().getFullYear();

const demoButton = document.querySelector('.media-play');
const mediaDemo = document.querySelector('.media-demo');
if (demoButton && mediaDemo) {
  demoButton.addEventListener('click', () => {
    const isPlaying = mediaDemo.classList.toggle('is-playing');
    demoButton.setAttribute('aria-pressed', String(isPlaying));
    demoButton.setAttribute('aria-label', isPlaying ? 'Tạm dừng mô phỏng màu tem' : 'Chạy mô phỏng màu tem');
  });
}
