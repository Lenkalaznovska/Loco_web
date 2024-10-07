function switchLanguage() {
    const language = document.getElementById("language-select").value;
    const elements = document.querySelectorAll("[data-lang-cs]");

    elements.forEach((element) => {
        const text = element.getAttribute(`data-lang-${language}`);
        if (text) {
            element.innerText = text;
        }
    });
}
