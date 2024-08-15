// Example JavaScript functionality
document.addEventListener("DOMContentLoaded", function() {
  // Typed.js functionality (if any) can be implemented here
  if (document.querySelector('.typed-text')) {
      new Typed('.typed-text', {
          strings: ["Software Developer", "Web Developer", "Tech Enthusiast"],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true
      });
  }
});
