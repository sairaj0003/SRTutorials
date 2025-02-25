function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'light');
      themeIcon.src = 'static/images/dark_mode.png'; // Update the image for light theme
      themeIcon.alt = 'Light Theme Icon';
    } else {
      body.setAttribute('data-theme', 'dark');
      themeIcon.src = 'static/images/light_mode.png'; // Update the image for dark theme
      themeIcon.alt = 'Dark Theme Icon';
    }
}