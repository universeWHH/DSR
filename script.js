const adUnitInput = document.getElementById('adUnitInput');
const adUnitDisplay = document.getElementById('adUnitDisplay');
const saveAdUnitBtn = document.getElementById('saveAdUnitBtn');
const toggleThemeBtn = document.getElementById('toggleTheme');

// Save and show Ad Unit ID
saveAdUnitBtn.addEventListener('click', () => {
  const adID = adUnitInput.value.trim();
  if (adID === '') {
    alert('Please enter a valid AdMob Ad Unit ID.');
    return;
  }
  localStorage.setItem('adUnitID', adID);
  adUnitDisplay.textContent = `(Ad Unit ID: ${adID})`;
  alert('Ad Unit ID saved and displayed.');
});

// Load saved Ad ID and theme
window.addEventListener('DOMContentLoaded', () => {
  const savedAdID = localStorage.getItem('adUnitID');
  if (savedAdID) {
    adUnitInput.value = savedAdID;
    adUnitDisplay.textContent = `(Ad Unit ID: ${savedAdID})`;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Toggle dark mode
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});
