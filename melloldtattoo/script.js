const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let current = 'inicio';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

document.getElementById('moreGallery').addEventListener('click', () => {
  alert('Em breve você poderá ver todos os trabalhos do Mellold Tattoo aqui.');
});
