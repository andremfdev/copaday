const menuDiv = document.getElementById("menu-mobile")
const btnAnimar = document.getElementById("btn-menu")

menuDiv.addEventListener("click", animarMenu)

function animarMenu() {
  menuDiv.classList.toggle("abrir")
  btnAnimar.classList.toggle("ativo")
}

function createGame(group, player1, hour, player2) {
  return `
  <li>
  <p class="grupo">Grupo ${group}</p>
  <div class="horario">
  <div style="width: 90px; height: 80px;">
    <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
    <p class="nation">${player1}</p>
    </div>
    <strong>${hour}</strong>
    <div style="width: 90px; height: 80px;">
    <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
    <p class="nation">${player2}</p>
        </div>
    </div>
  </li>

  `
}

let delay = -0.3

function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
           ${games}
          </ul>
        </div>
        
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("A", "Qatar", "0 X 2", "Equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("B", "Inglaterra", "6 X 2", "Irã") +
      createGame("A", "Senegal", "0 X 2", "Holanda") +
      createGame("B", "Estados Unidos", "1 X 1", "Gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("C", "Argentina", "1 X 2", "Arábia Saudita") +
      createGame("D", "Dinamarca", "0 X 0", "Tunísia") +
      createGame("C", "México", "0 X 0", "Polônia") +
      createGame("D", "França", "4 X 1", "Austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("F", "Marrocos", "0 X 0", "Croácia") +
      createGame("E", "Alemanha", "1 X 2", "Japão") +
      createGame("E", "Espanha", "7 X 0", "Costa Rica") +
      createGame("F", "Bélgica", "1 X 0", "Canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("G", "Suíça", "1 X 0", "Camarões") +
      createGame("H", "Uruguai", "0 X 0", "Coréia do Sul") +
      createGame("H", "Portugal", "3 X 2", "Gana") +
      createGame("G", "Brasil", "2 X 0", "Sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("B", "Gales", "0 X 2", "Irã") +
      createGame("A", "Qatar", "1 X 3", "Senegal") +
      createGame("A", "Holanda", "1 X 1", "Equador") +
      createGame("B", "Inglaterra", "0 X 0", "Estados Unidos")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("D", "Tunísia", "0 X 1", "Austrália") +
      createGame("C", "Polônia", "2 X 0", "Arábia Saudita") +
      createGame("D", "França", "2 X 1", "Dinamarca") +
      createGame("C", "Argentina", "2 X 0", "México")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("E", "Japão", "0 X 1", "Costa Rica") +
      createGame("F", "Bélgica", "0 X 2", "Marrocos") +
      createGame("F", "Croácia", "4 X 1", "Canadá") +
      createGame("E", "Espanha", "1 X 1", "Alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("G", "Camarões", "3 X 3", "Sérvia") +
      createGame("H", "Coréia do Sul", "2 X 3", "Gana") +
      createGame("G", "Brasil", "1 X 0", "Suíça") +
      createGame("H", "Portugal", "2 X 0", "Uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("A", "Equador", "1 X 2", "Senegal") +
      createGame("A", "Holanda", "2 X 0", "Qatar") +
      createGame("B", "Irã", "0 X 1", "Estados Unidos") +
      createGame("B", "Gales", "0 X 3", "Inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("D", "Tunísia", "1 X 0", "França") +
      createGame("D", "Austrália", "1 X 0", "Dinamarca") +
      createGame("C", "Polônia", "0 X 2", "Argentina") +
      createGame("C", "Arábia Saudita", "1 X 2", "México")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("F", "Croácia", "0 X 0", "Bélgica") +
      createGame("F", "Canadá", "1 X 2", "Marrocos") +
      createGame("E", "Japão", "2 X 1", "Espanha") +
      createGame("E", "Costa Rica", "2 X 4", "Alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("H", "Coréia do Sul", "2 X 1", "Portugal") +
      createGame("H", "Gana", "0 X 2", "Uruguai") +
      createGame("G", "Sérvia", "2 X 3", "Suíça") +
      createGame("G", "Camarões", "1 X 0", "Brasil")
  )

function scrollToTop() {
  window.scrollTo(0, 0)
}

window.addEventListener("scroll", function () {
  let scroll = this.document.querySelector(".scrollTop")
  scroll.classList.toggle("active", window.scrollY > 450)
})

const menuItens = document.querySelectorAll('.navigation a[href^="#"]')

menuItens.forEach(item => {
  item.addEventListener("click", scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
  event.preventDefault()
  const to = getScrollTopByHref(event.target) - 127
  scrollToPosition(to)
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth"
  })
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href")
  return document.querySelector(id).offsetTop
}
