// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.

// In de theorie staat uitgelegd hoe je dit moet doen.

// Let op: in de code conventions staat dat je de code in het Engels moet schrijven!

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
    year: 1925,
    sold: 25000000,
    price: "$10.99"
};

const outputDiv = document.querySelector('.output');

for (const key in book) {
    const p = document.createElement('p');
    p.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${book[key]}`;
    outputDiv.appendChild(p);
}