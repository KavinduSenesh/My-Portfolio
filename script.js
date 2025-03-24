function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// // Mobile Navigation JavaScript
// document.addEventListener('DOMContentLoaded', () => {
//   const hamburgerIcon = document.querySelector('.hamburger-icon');
//   const menuLinks = document.querySelector('.menu-links');
//   const navLinks = document.querySelectorAll('.menu-links a');

//   // Toggle menu open/closed
//   hamburgerIcon.addEventListener('click', () => {
//     hamburgerIcon.classList.toggle('open');
//     menuLinks.classList.toggle('open');
//   });

//   // Close menu when a link is clicked
//   navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       hamburgerIcon.classList.remove('open');
//       menuLinks.classList.remove('open');
//     });
//   });

//   // Close menu if clicked outside
//   document.addEventListener('click', (event) => {
//     const isClickInsideMenu = menuLinks.contains(event.target);
//     const isClickOnHamburger = hamburgerIcon.contains(event.target);

//     if (!isClickInsideMenu && !isClickOnHamburger) {
//       hamburgerIcon.classList.remove('open');
//       menuLinks.classList.remove('open');
//     }
//   });
// });