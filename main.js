function createGame(player1, hour, player2) {
  return `
  <li>
  <img src="./assets/icon-${player1}.svg" alt="Bandeira  ${player1}" />
  <strong>${hour}</strong>
  <img src="./assets//icon-${player2}.svg" alt="Bandeira ${player2}" />
</li>
    `;
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
      <ul>
${games}
      </ul>
    </div>
    
    `;
}
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "Cameron") +
      createGame("Portugal", "13:00", "Ghana") +
      createGame("Brazil", "16:00", "Serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("SouthKorea", "10:00", "Ghana") +
      createGame("Brazil", "13:00", "switzerland") +
      createGame("Portugal", "13:00", "Uruguai")
  );
  


