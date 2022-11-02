function createGame(team1, hour, team2) {
  return `
    <li>
      <img title="${team1}" src="./assets/icon-${team1}.svg" alt="${team1} flag">
      <strong>${hour}</strong>
      <img title="${team2}" src="./assets/icon-${team2}.svg" alt="${team2} flag">
    </li>
  `;
}

function createCard(data, day, games) {
  return `
    <div class="card">
      <h2><span>${data}</span>${day}</h2>
      <ul>
      ${games}
     </ul>
    </div>`;
}
document.querySelector('#app').innerHTML = `
  <header class="header">
    <img src="./assets/nlw-icon.svg" alt="Icone nlw copa 2022">
  </header>
  <main class="cards">
  ${
    createCard('20/11', 'sunday', createGame('qatar', '16:00', 'ecuador')) +
    createGame('qatar', '16:00', 'ecuador')
  }
    
  ${createCard('21/11', 'sunday', createGame('england', '13:00', 'iran'))}
    createGame("england", "13:00", "iran"))}
  </main>`;
