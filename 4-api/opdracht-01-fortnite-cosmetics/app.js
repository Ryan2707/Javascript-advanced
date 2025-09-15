fetch('https://fortnite-api.com/v2/cosmetics/br')
  .then(response => {
    if (!response.ok) {
      throw new Error("API is niet beschikbaar");
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Handig om de structuur te bekijken

    const container = document.getElementById('cosmetics');
    const items = data.data; // Cosmetics zitten in 'data.data'

    // Voorbeeld: alleen de eerste 100 items tonen
    for (let i = 0; i < 100; i++) {
      const cosmetic = items[i];

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      itemDiv.innerHTML = `
        <h3>${cosmetic.name}</h3>
        <p>${cosmetic.type.displayValue}</p>
        <img src="${cosmetic.images.icon}" alt="${cosmetic.name}">
      `;

      container.appendChild(itemDiv);
    }
  })
  .catch(error => {
    console.error("Fout:", error);
    document.getElementById('cosmetics').innerHTML =
      "<p>Kan de data niet ophalen. Probeer later opnieuw.</p>";
  });
