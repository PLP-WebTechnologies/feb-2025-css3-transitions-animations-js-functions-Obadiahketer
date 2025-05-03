function savePreference(key, value) {
    localStorage.setItem(key, value);
  }
  
  function getPreference(key) {
    return localStorage.getItem(key);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
  
    button.addEventListener('click', () => {
      // Trigger animation
      button.classList.add('clicked');
      
      // Save user action in localStorage
      savePreference('buttonClicked', 'true');
  
      // Remove the animation class after it completes
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 500); // Match the duration of the animation
    });
  });