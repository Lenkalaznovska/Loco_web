// Jazykové možnosti
const languages = {
    cs: {
        title: "Vítejte na naší železniční stránce",
        description: "Objevte svět modelových vláčků a příslušenství.",
        order: "Objednat",
        gallery: "Galerie",
        contact: "Kontakt",
        languageSwitcher: "Vyberte jazyk"
    },
    en: {
        title: "Welcome to Our Railway Page",
        description: "Discover the world of model trains and accessories.",
        order: "Order",
        gallery: "Gallery",
        contact: "Contact",
        languageSwitcher: "Select Language"
    },
    de: {
        title: "Willkommen auf unserer Eisenbahnseite",
        description: "Entdecken Sie die Welt der Modelleisenbahnen und Zubehör.",
        order: "Bestellen",
        gallery: "Galerie",
        contact: "Kontakt",
        languageSwitcher: "Sprache auswählen"
    }
};

// První jazyk (čeština)
let currentLanguage = 'cs';

// Funkce pro aktualizaci textu na stránce
function updateContent() {
    document.querySelector('.main-heading').innerText = languages[currentLanguage].title;
    document.querySelector('.text-container p').innerText = languages[currentLanguage].description;
    document.querySelector('.order-section h2').innerText = languages[currentLanguage].order;
    document.querySelector('.gallery-section h2').innerText = languages[currentLanguage].gallery;
    document.querySelector('.contact-section h2').innerText = languages[currentLanguage].contact;
    document.querySelector('.language-switcher-label').innerText = languages[currentLanguage].languageSwitcher;
}

// Jazykový přepínač
const languageSwitcher = document.querySelectorAll('.language-switcher a');
languageSwitcher.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentLanguage = e.target.dataset.lang; // Získání zvoleného jazyka
        updateContent(); // Aktualizace obsahu
    });
});

// Inicializace obsahu
updateContent();
