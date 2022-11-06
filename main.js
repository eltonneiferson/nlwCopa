const sectionCards = document.querySelector("#cards")
let delay = -1

function createCard(date, day, games) {
  delay = delay + 1
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
    `
}

function createGame(player1, hour, player2) {
  return `
    <li>
      <abbr title="${player1}"><img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/></abbr>
      <strong>${hour}</strong>
      <abbr title="${player2}"><img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/></abbr>
    </li>
  `
}

sectionCards.innerHTML += `
    ${createCard("24/11", "segunda", createGame("brasil", "16:00", "serbia"))}
    ${createCard("28/11", "segunda", createGame("brasil", "13:00", "switzerland"))}
    ${createCard("28/11", "segunda", createGame("brasil", "13:00", "cameroon"))}
`