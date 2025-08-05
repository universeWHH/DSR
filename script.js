// DOM elements
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const greetingText = document.getElementById('greetingText');
const darkModeToggle = document.getElementById('darkModeToggle');

// Load name from localStorage if available
window.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('username');
  if (savedName) {
    nameInput.value = savedName;
    updateGreeting(savedName);
  }

  // Apply dark mode setting
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }
});

// Handle form submission
nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name === '') return;

  localStorage.setItem('username', name);
  updateGreeting(name);
});

// Update greeting text
function updateGreeting(name) {
  greetingText.textContent = `Happy Festival, ${name}! 🎉`;
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
});renderTasks();
