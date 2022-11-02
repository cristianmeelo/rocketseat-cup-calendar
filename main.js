function createGame(player1, hour, player2) {
  return `
  <li>
  <img src="./assets/icon-${player1}.svg" alt="Bandeira  ${player1}" />
  <strong>${hour}</strong>
  <img src="./assets//icon-${player2}.svg" alt="Bandeira ${player2}" />
</li>
    `;
}

function createCard(date, day, games) {
  return `
    <div class="card">
    <h2>${date} <span>${day}</span></h2>
      <ul>
${games}
      </ul>
    </div>
    
    `;
}
document.querySelector("#app").innerHTML = ` <div id="app">
<header>
  <img src="./assets/logo.svg" alt="Logo da NLW">
</header>
<main id="cards">
${createCard(
  "24/11",
  "quinta",
  createGame("switzerland", "07:00", "Cameron") +
    createGame("Portugal", "13:00", "Ghana") +
    createGame("Brazil", "16:00", "Serbia")
)}

${createCard(
  "28/11",
  "segunda",
  createGame("SouthKorea", "10:00", "Ghana") +
    createGame("Brazil", "13:00", "switzerland") +
    createGame("Portugal", "13:00", "Uruguai")
)}

</main>
</div>`;
