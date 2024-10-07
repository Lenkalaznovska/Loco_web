document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById("language-select");
    
    languageSwitcher.addEventListener('change', switchLanguage);

    function switchLanguage() {
        const selectedLanguage = languageSwitcher.value;
        const elementsToTranslate = document.querySelectorAll("[data-lang-cs]");

        elementsToTranslate.forEach((element) => {
            const translation = element.getAttribute(`data-lang-${selectedLanguage}`);
            if (translation) {
                element.innerText = translation;
            }
        });
    }

    // Voláme funkci při načtení stránky, aby se aplikoval výchozí jazyk
    switchLanguage();
});
