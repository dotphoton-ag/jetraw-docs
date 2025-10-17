document.addEventListener('DOMContentLoaded', function() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function updateThemeBasedOnSystemPreference() {
        // Apply the system preference if no user-selected theme is stored
        const userSelectedTheme = localStorage.getItem('theme');
        if (!userSelectedTheme) {
            document.documentElement.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light');
        }
    }

    // Use addEventListener instead of the deprecated addListener
    mediaQuery.addEventListener('change', updateThemeBasedOnSystemPreference);

    // Initial check and application of the theme based on the system's preference
    updateThemeBasedOnSystemPreference();
});
