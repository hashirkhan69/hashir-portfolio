function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('typed-text');
    if (element) {
      new Typed(element, {
        strings: ['Hashir Kaleem', 'a developer', 'Learner'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
      });
    } else {
      console.error('Element #typed-text not found');
    }
  });
 document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Update button text
      if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Light Mode';
      } else {
        toggleBtn.textContent = '🌙 Dark Mode';
      }
    });
  } else {
    console.error('Button with id "theme-toggle" not found');
  }
});