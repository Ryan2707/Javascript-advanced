// Je gaat even oefenen met het gebruiken van een arrow function en de for/of loop. 

// Maak een array genaamd 'marvels' en plaats hier 4 Marvel films in.
const marvels = ['Iron Man', 'Thor', 'Captain America', 'Black Panther'];

// Maak een arrow function genaamd 'addMarvel'
// In je functie voeg je een nieuwe Marvel film toe zonder dit zelf in de bovenstaande array toe te voegen
const addMarvel = (film) => {
    marvels.push(film);
};

// Roep de functie op (het klopt dat je nog niets ziet)
addMarvel('Spider-Man');

// Loop met een for/of loop door de array en toon alle items in de array in je console
for (const film of marvels) {
    console.log(film);
}
