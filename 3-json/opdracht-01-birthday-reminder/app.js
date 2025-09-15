let output = document.querySelector('.birthdays');
let out = '';

fetch('./birthday.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Kan birthday.json niet laden');
    }
    return response.json();
  })
  .then((birthdays) => {
    let today = new Date().toISOString().slice(5, 10); // "MM-DD"

    for (let person of birthdays) {
      let birthDate = new Date(person.date);
      let monthDay = person.date.slice(5); // "MM-DD"
      let isToday = monthDay === today;

      out += `
        <div class="birthday ${isToday ? 'today' : ''}">
          <h2>${person.name}</h2>
          <p>🎂 Geboortedatum: ${birthDate.toLocaleDateString('nl-NL')}</p>
          <p>Leeftijd: ${new Date().getFullYear() - birthDate.getFullYear()}</p>
          ${isToday ? '<p>🎉 Vandaag jarig!</p>' : ''}
        </div>
      `;
    }

    output.innerHTML = out;
  })
  .catch((error) => {
    console.error('Fout:', error);
    output.innerHTML = '<p>Kon verjaardagen niet laden.</p>';
  });
