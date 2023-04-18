// Get the mouse cursor element
var mouseCursor = document.querySelector('.mouse-cursor');

// Add event listener for mousemove event
document.addEventListener('mousemove', function (event) {
  // Get the mouse position
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Update the background gradient position based on mouse position
  var bgGradient = 'linear-gradient(' + (mouseX / window.innerWidth) * 360 + 'deg, #3884fd, #ff00c3)';
  document.body.style.background = bgGradient;

  // Update the mouse cursor position
  mouseCursor.style.top = mouseY + 'px';
  mouseCursor.style.left = mouseX + 'px';
});

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

