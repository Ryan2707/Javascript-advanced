// Stap 1

// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

// Het object moet ook de volgende methods bevatten:

//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!

const persoon = {
    naam: "Jan Bakker",
    leeftijd: 32,
    geboortedatum: "1992-04-15",
    geslacht: "Man",
    inLeven: true,
    hobbies: ["Lezen", "Fietsen", "Koken", "Fotografie"],
    veranderNaam: function(nieuweNaam) {
        this.naam = nieuweNaam;
        toonPersoon();
    },
    veranderLeven: function(status) {
        this.inLeven = status;
        toonPersoon();
    },
    voegHobbyToe: function(hobby) {
        this.hobbies.push(hobby);
        toonPersoon();
    }
};

function toonPersoon() {
    const div = document.getElementById("persoonDiv");
    div.innerHTML = `
        <p>Naam: ${persoon.naam}</p>
        <p>Leeftijd: ${persoon.leeftijd}</p>
        <p>Geboortedatum: ${persoon.geboortedatum}</p>
        <p>Geslacht: ${persoon.geslacht}</p>
        <p>In leven: ${persoon.inLeven ? "Ja" : "Nee"}</p>
        <p>Hobby's: ${persoon.hobbies.join(", ")}</p>
    `;
}

document.body.innerHTML += '<div id="persoonDiv"></div>';
toonPersoon();

// Voorbeeld van wijzigen:
// persoon.veranderNaam("Piet Jansen");
// persoon.veranderLeven(false);
// persoon.voegHobbyToe("Schaken");