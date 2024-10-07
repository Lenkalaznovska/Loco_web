const languages = {
    cs: {
        title: "Modelové Vláčky",
        about: "Naše firma se specializuje na výrobu detailně propracovaných modelů vlaků a železnic. Každý model je precizně zpracován a je věnována maximální pozornost každému detailu.",
        products: "Nabízíme širokou škálu modelových vlaků, kolejnic a příslušenství pro všechny železniční nadšence. Naše produkty jsou známé svou kvalitou a precizností.",
        order: "Objednejte si svůj model ještě dnes!"
    },
    en: {
        title: "Model Trains",
        about: "Our company specializes in the production of highly detailed model trains and railways. Each model is meticulously crafted with great attention to detail.",
        products: "We offer a wide range of model trains, tracks, and accessories for all railway enthusiasts. Our products are known for their quality and precision.",
        order: "Order your model today!"
    },
    de: {
        title: "Modelleisenbahnen",
        about: "Unser Unternehmen ist auf die Herstellung von detailgetreuen Modelleisenbahnen spezialisiert. Jedes Modell wird mit großer Sorgfalt und Liebe zum Detail gefertigt.",
        products: "Wir bieten eine große Auswahl an Modelleisenbahnen, Schienen und Zubehör für alle Eisenbahn-Enthusiasten. Unsere Produkte sind für ihre Qualität und Präzision bekannt.",
        order: "Bestellen Sie Ihr Modell noch heute!"
    }
};

let currentLanguage = 'cs';

function updateContent() {
    document.querySelector('.main-heading').innerText = languages[currentLanguage].title;
    document.querySelector('.section1 p').innerText = languages[currentLanguage].about;
    document.querySelector('.section2 p').innerText = languages[currentLanguage].products;
    document.querySelector('.order-section h2').innerText = languages[currentLanguage].order;
}

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentLanguage = button.id;
        updateContent();
    });
});

updateContent();
