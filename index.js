const translations = {
    cs: {
        welcome: "Vítejte na stránkách našeho modelového světa",
        intro-text: "Nabízíme širokou škálu detailních modelů železnic. Naše výrobky jsou vyrobeny s důrazem na přesnost a kvalitu.",
        products-title: "Naše produkty",
        products-description: "V naší nabídce najdete lokomotivy, vagóny, koleje a další doplňky pro modelové železnice."
    },
    en: {
        welcome: "Welcome to our model train world",
        intro-text: "We offer a wide range of detailed model trains. Our products are made with precision and quality in mind.",
        products-title: "Our Products",
        products-description: "We offer locomotives, carriages, tracks, and other accessories for model railways."
    },
    de: {
        welcome: "Willkommen in unserer Welt der Modellbahnen",
        intro-text: "Wir bieten eine breite Palette von detailgetreuen Modelleisenbahnen. Unsere Produkte werden mit Präzision und Qualität hergestellt.",
        products-title: "Unsere Produkte",
        products-description: "Wir bieten Lokomotiven, Wagen, Schienen und weiteres Zubehör für Modellbahnen."
    }
};

document.querySelectorAll('#language-switcher button').forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});

function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });
}

// Set default language to Czech
window.onload = () => {
    setLanguage('cs');
};
