const hamburgerBtn = document.getElementsByClassName('hamburger-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links-mobil')[0];

hamburgerBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});
