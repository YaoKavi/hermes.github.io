document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector('.dropdown');
    var menuIcon = dropdown.querySelector('.menu-icon');
    var closeIcon = dropdown.querySelector('.close-icon');
    var dropdownContent = dropdown.querySelector('.dropdown-content');
  
    dropdown.addEventListener('click', function() {
      dropdownContent.classList.toggle('show');
      menuIcon.classList.toggle('hide');
      closeIcon.classList.toggle('show');
    });
  });

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('mouseenter', () => {
    circle.classList.add('pulse'); // Add pulse animation class (refer to CSS below)
  });
  circle.addEventListener('mouseleave', () => {
    circle.classList.remove('pulse');
  });
});

// Button click transition (replace with your actual transition logic)
document.querySelector('.tour-button').addEventListener('click', () => {
  // Fade out animation (replace with desired effect)
  document.body.classList.add('fade-

