const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const imageUpload = document.getElementById('imageUpload');
const generateBtn = document.getElementById('generateBtn');
const cardMessage = document.getElementById('cardMessage');
const cardName = document.getElementById('cardName');
const cardBg = document.getElementById('cardBg');
const darkToggle = document.getElementById('darkToggle');
const copyBtn = document.getElementById('copyBtn');

// Load stored preferences
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
});

// Generate Greeting
generateBtn.addEventListener('click', () => {
  const name = nameInput.value.trim() || 'Your Name';
  const message = messageInput.value.trim() || 'Happy Festival!';
  cardMessage.textContent = message;
  cardName.textContent = `From, ${name}`;
});

// Upload Background
imageUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      cardBg.src = evt.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Copy Greeting Text
copyBtn.addEventListener('click', () => {
  const text = `${cardMessage.textContent} - ${cardName.textContent}`;
  navigator.clipboard.writeText(text)
    .then(() => alert('Greeting copied! 🎉'))
    .catch(() => alert('Failed to copy.'));
});

// Toggle Dark Mode
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});
