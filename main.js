function createGame(team1, hour, team2) {
  team1Uppercase = team1.toUpperCase();

  return `
    <li>
      <img title="${team1}" src="./assets/icon-${team1}.svg" alt="${team1} flag">
      <strong>${hour}</strong>
      <img title="${team1Uppercase}" src="./assets/icon-${team2}.svg" alt="${team2} flag">
    </li>
  `;
}

let delayAnimation = -0.5
function createCard(data, day, games) {
  delayAnimation = delayAnimation + 0.5;
  return `
  <div class="card" style="animation-delay: ${delayAnimation}s">
  <h2><span>${data}</span>${day}</h2>
  <ul>
  ${games}
  </ul>
  </div>`;
}

document.querySelector('#cards').innerHTML = 
  
    createCard('20/11', 'sunday', 
      createGame('qatar', '16:00', 'ecuador') +
      createGame('brazil', '16:00', 'argentina') +
      createGame("england", "13:00", "iran")) +
  
 
    createCard('21/11', 'sunday', 
      createGame('portugal', '16:00', 'mexico') +
      createGame('morocco', '16:00', 'ecuador') +
      createGame("england", "13:00", "iran")) +
   
      createCard('21/11', 'sunday', 
      createGame('portugal', '16:00', 'mexico') +
      createGame('morocco', '16:00', 'ecuador') +
      createGame("england", "13:00", "iran"))