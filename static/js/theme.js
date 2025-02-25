document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
      body.setAttribute('data-theme', savedTheme);
      themeIcon.src = savedTheme === 'dark' ? 'static/images/light_mode.png' : 'static/images/dark_mode.png';
      themeIcon.alt = savedTheme === 'dark' ? 'Dark Theme Icon' : 'Light Theme Icon';
  }
});

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const currentTheme = body.getAttribute('data-theme');

  if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'light');
      themeIcon.src = 'static/images/dark_mode.png';
      themeIcon.alt = 'Light Theme Icon';
      localStorage.setItem('theme', 'light');  // Save to localStorage
  } else {
      body.setAttribute('data-theme', 'dark');
      themeIcon.src = 'static/images/light_mode.png';
      themeIcon.alt = 'Dark Theme Icon';
      localStorage.setItem('theme', 'dark');  // Save to localStorage
  }
}