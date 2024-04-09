document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const icon = document.querySelector('.bi-person');
    header.classList.toggle('scrolled', window.scrollY > 0);
    icon.classList.toggle('scrolled', window.scrollY > 0);
  
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 0);
      icon.classList.toggle('scrolled', window.scrollY > 0);
    });
  });
  const dropdownIcon = document.getElementById('dropdown-icon');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownIcon.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});