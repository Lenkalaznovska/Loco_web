// Jazykové možnosti
const languages = {
    cs: {
        "home": "Domů",
        "models-title": "Naše modely",
        "models-desc": "Zde najdete širokou škálu našich modelových vlaků, které jsou precizně zpracovány a navrženy tak, aby splnily očekávání každého železničního nadšence.",
        "gallery-title": "Galerie modelů",
        "gallery-desc": "Prohlédněte si naši galerii modelů, kde najdete fotografie našich nejnovějších a nejoblíbenějších výrobků.",
        "models": "Modely",
        "our-work": "Naše práce",
        "our-work-title": "Naše práce",
        "our-work-desc": "Zde si můžete prohlédnout naše dosavadní projekty a realizace, které jsme s nadšením dokončili.",
        "about-title": "O nás",
        "about-desc": "Naše firma se specializuje na výrobu detailně propracovaných modelů vlaků a železnic. Každý model je precizně zpracován a je věnována maximální pozornost každému detailu.",
        "products-title": "Naše modely",
        "products-desc": "Nabízíme širokou škálu modelových vlaků, kolejnic a příslušenství pro všechny železniční nadšence. Naše produkty jsou známé svou kvalitou a precizností.",
        "order-title": "Objednejte si svůj model ještě dnes!",
        "order-desc": "Pro více informací nás kontaktujte na e-mailu nebo telefonním čísle uvedeném níže."
    },
    en: {
        "home": "Home",
        "models-title": "Our models",
        "models-desc": "Here you can find a wide range of our model trains, which are meticulously crafted and designed to meet the expectations of every railway enthusiast.",
        "gallery-title": "Gallery of models",
        "gallery-desc": "Take a look at our gallery of models, where you can find photos of our latest and most popular products.",
        "models": "Models",
        "our-work": "Our work",
        "our-work-title": "Our Work",
        "our-work-desc": "Here you can view our completed projects and implementations that we have enthusiastically finished.",
        "about-title": "About Us",
        "about-desc": "Our company specializes in the production of intricately crafted model trains and railways. Each model is precisely made, with maximum attention to detail.",
        "products-title": "Our Models",
        "products-desc": "We offer a wide range of model trains, tracks, and accessories for all railway enthusiasts. Our products are known for their quality and precision.",
        "order-title": "Order Your Model Today!",
        "order-desc": "For more information, contact us via the email or phone number below."
    },
    de: {
        "home": "Startseite",
        "models-title": "Unsere Modelle",
        "models-desc": "Hier finden Sie eine große Auswahl unserer Modellzüge, die sorgfältig gestaltet und entworfen wurden, um die Erwartungen jedes Eisenbahnenthusiasten zu erfüllen.",
        "gallery-title": "Galerie der Modelle",
        "gallery-desc": "Schauen Sie sich unsere Modellgalerie an, wo Sie Fotos unserer neuesten und beliebtesten Produkte finden können.",
        "models": "Modelle",
        "our-work": "Unsere Arbeit",
        "our-work-title": "Unsere Arbeit",
        "our-work-desc": "Hier können Sie unsere abgeschlossenen Projekte und Umsetzungen ansehen, die wir mit Begeisterung abgeschlossen haben.",
        "about-title": "Über uns",
        "about-desc": "Unser Unternehmen spezialisiert sich auf die Herstellung detailliert gestalteter Modellzüge und Eisenbahnen. Jedes Modell wird präzise verarbeitet und es wird maximaler Wert auf jedes Detail gelegt.",
        "products-title": "Unsere Modelle",
        "products-desc": "Wir bieten eine breite Palette von Modellzügen, Schienen und Zubehör für alle Eisenbahnenthusiasten. Unsere Produkte sind für ihre Qualität und Präzision bekannt.",
        "order-title": "Bestellen Sie Ihr Modell noch heute!",
        "order-desc": "Für weitere Informationen kontaktieren Sie uns bitte per E-Mail oder Telefonnummer unten."
    }
};

// Získání jazyka z localStorage nebo nastavení na výchozí (čeština)
let currentLanguage = localStorage.getItem('language') || 'cs';

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
        localStorage.setItem('language', currentLanguage); // Uložení zvoleného jazyka do localStorage
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
