fetch("https://dragonball-api.com/api/characters?limit=100")
  .then(response => {
    if (!response.ok) {
      throw new Error("API is niet beschikbaar: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("Aantal characters:", data.items.length);

    const container = document.getElementById("characters");

    // Loop door de karakters heen
    data.items.forEach(character => {
      const div = document.createElement("div");
      div.classList.add("character");

      div.innerHTML = `
        <h3>${character.name}</h3>
        <p>Race: ${character.race || "Onbekend"}</p>
        <img src="${character.image}" alt="${character.name}">
      `;

      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Fout:", error);
    document.getElementById("characters").innerHTML =
      "<p>Kan de Dragon Ball characters niet laden.</p>";
  });
