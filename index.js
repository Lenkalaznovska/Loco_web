// Jazykové možnosti
const languages = {
    cs: {
        "about-title": "O nás",
        "about-desc": "Naše firma se specializuje na výrobu detailně propracovaných modelů vlaků a železnic. Každý model je precizně zpracován a je věnována maximální pozornost každému detailu.",
        "products-title": "Naše modely",
        "products-desc": "Nabízíme širokou škálu modelových vlaků, kolejnic a příslušenství pro všechny železniční nadšence. Naše produkty jsou známé svou kvalitou a precizností.",
        "order-title": "Objednejte si svůj model ještě dnes!",
        "order-desc": "Pro více informací nás kontaktujte na e-mailu nebo telefonním čísle uvedeném níže."
    },
    en: {
        "about-title": "About us",
        "about-desc": "Our company specializes in creating detailed models of trains and railways. Each model is meticulously crafted with the utmost attention to detail.",
        "products-title": "Our models",
        "products-desc": "We offer a wide range of model trains, tracks, and accessories for all railway enthusiasts. Our products are known for their quality and precision.",
        "order-title": "Order your model today!",
        "order-desc": "For more information, contact us via email or phone number below."
    },
    de: {
        "about-title": "Über uns",
        "about-desc": "Unser Unternehmen ist auf die Herstellung von detaillierten Modellen von Zügen und Eisenbahnen spezialisiert. Jedes Modell wird mit größter Sorgfalt und Liebe zum Detail gefertigt.",
        "products-title": "Unsere Modelle",
        "products-desc": "Wir bieten eine breite Palette von Modellzügen, Schienen und Zubehör für alle Eisenbahnfans. Unsere Produkte sind für ihre Qualität und Präzision bekannt.",
        "order-title": "Bestellen Sie Ihr Modell noch heute!",
        "order-desc": "Für weitere Informationen kontaktieren Sie uns per E-Mail oder unter der unten angegebenen Telefonnummer."
    }
};

// První jazyk (čeština)
let currentLanguage = 'cs';

// Funkce pro aktualizaci textu na stránce
function updateContent() {
    document.querySelectorAll('[data-key]').forEach(el => {
        el.innerText = languages[currentLanguage][el.getAttribute('data-key')];
    });
}

// Jazykový přepínač
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (e) => {
    currentLanguage = e.target.value; // Získání zvoleného jazyka
    updateContent(); // Aktualizace obsahu
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
