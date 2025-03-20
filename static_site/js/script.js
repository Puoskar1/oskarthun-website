// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
  // Default language
  let currentLanguage = 'en';

  // Function to change language
  window.changeLanguage = function(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.language-selector button').forEach(button => {
      button.classList.remove('active');
    });
    document.getElementById(lang + '-btn').classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('.lang').forEach(element => {
      if (element.hasAttribute('data-' + lang)) {
        element.textContent = element.getAttribute('data-' + lang);
      }
    });
  };
  
  // Initialize with default language
  changeLanguage(currentLanguage);
});
