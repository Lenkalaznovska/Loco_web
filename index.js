document.getElementById('languageSwitcher').addEventListener('change', function() {
    const selectedLanguage = this.value;
    if (selectedLanguage === 'en') {
        window.location.href = '/en/index.html';  // URL pro anglickou verzi
    } else {
        window.location.href = '/index.html';  // URL pro českou verzi
    }
});
