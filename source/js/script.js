const nav = document.querySelector('.site-list');
const toggle = document.querySelector('.nav__toggle');

// Бургер-меню

  nav.classList.remove('site-list--no-js');
  toggle.classList.remove('nav__toggle--no-js');

  const toggleMenu = () => {
    nav.classList.toggle('site-list--close');
    toggle.classList.toggle('nav__toggle--close');
    toggle.classList.toggle('nav__toggle--open');
  }

  toggle.addEventListener('click', toggleMenu);
