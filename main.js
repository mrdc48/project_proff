// console.log('Hello World!');


const menuIcon= document.querySelector('.hamburger');
const navbar = document.querySelector('.mobile-navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
  
});