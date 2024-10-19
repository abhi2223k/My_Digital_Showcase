// Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  modeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
