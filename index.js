const translations = {
    cs: {
        title: "Výrobce modelových vláčků",
        description: "Vítejte na stránkách výrobce modelových železnic.",
        contact: "Kontaktujte nás"
    },
    en: {
        title: "Model Train Manufacturer",
        description: "Welcome to the model railway manufacturer website.",
        contact: "Contact Us"
    },
    de: {
        title: "Modellbahnhersteller",
        description: "Willkommen auf der Website des Modellbahnherstellers.",
        contact: "Kontaktieren Sie uns"
    }
};

// Funkce pro změnu jazyka
function changeLanguage(language) {
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("description").textContent = translations[language].description;
    document.getElementById("contact").textContent = translations[language].contact;
}

// Přidání event listenerů pro přepínače jazyka
document.getElementById("language-selector").addEventListener("change", function() {
    changeLanguage(this.value);
});
