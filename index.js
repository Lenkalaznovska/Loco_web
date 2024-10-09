// Jazykové možnosti
const languages = {
    cs: {
        "models-title": "Naše modely",
        "models-desc": "Zde najdete širokou škálu našich modelových vlaků, které jsou precizně zpracovány a navrženy tak, aby splnily očekávání každého železničního nadšence.",
        "gallery-title": "Galerie modelů",
        "gallery-desc": "Prohlédněte si naši galerii modelů, kde najdete fotografie našich nejnovějších a nejoblíbenějších výrobků.",
        "models": "Modely",
        "our-work": "Naše práce"
    },
    en: {
        "models-title": "Our models",
        "models-desc": "Here you can find a wide range of our model trains, which are meticulously crafted and designed to meet the expectations of every railway enthusiast.",
        "gallery-title": "Gallery of models",
        "gallery-desc": "Take a look at our gallery of models, where you can find photos of our latest and most popular products.",
        "models": "Models",
        "our-work": "Our work"
    },
    de: {
        "models-title": "Unsere Modelle",
        "models-desc": "Hier finden Sie eine große Auswahl unserer Modellzüge, die sorgfältig gestaltet und entworfen wurden, um die Erwartungen jedes Eisenbahnenthusiasten zu erfüllen.",
        "gallery-title": "Galerie der Modelle",
        "gallery-desc": "Schauen Sie sich unsere Modellgalerie an, wo Sie Fotos unserer neuesten und beliebtesten Produkte finden können.",
        "models": "Modelle",
        "our-work": "Unsere Arbeit"
    }
};

// První jazyk (čeština)
let currentLanguage = 'cs';

// Funkce pro aktualizaci textu na stránce
function updateContent() {
    // Aktualizace obsahu sekcí
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (languages[currentLanguage][key]) {
            el.innerText = languages[currentLanguage][key];
        } else {
            console.warn(`Chybějící překlad pro klíč: ${key}`);
        }
    });

    // Aktualizace textu v navigačním menu
    document.querySelectorAll('.navigation a[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (languages[currentLanguage][key]) {
            el.innerText = languages[currentLanguage][key];
        } else {
            console.warn(`Chybějící překlad pro klíč: ${key}`);
        }
    });
}

// Jazykový přepínač
const languageButtons = document.querySelectorAll('.lang-flag');
languageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        currentLanguage = e.target.dataset.lang; // Získání zvoleného jazyka
        updateContent(); // Aktualizace obsahu
    });
});

// Inicializace obsahu
updateContent();

// Funkce pro sledování viditelnosti sekcí
const sections = document.querySelectorAll('.text-container');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Spustí animaci, když je 10% sekce viditelné
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Přidá třídu pro viditelnost
            observer.unobserve(entry.target); // Zastaví sledování po zobrazení
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section)); // Začátek sledování všech sekcí
