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
      createGame("A", "Senegal", "13:00h", "Holanda") +
      createGame("B", "Estados Unidos", "16:00h", "Gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("C", "Argentina", "07:00h", "Arábia Saudita") +
      createGame("D", "Dinamarca", "10:00h", "Tunísia") +
      createGame("C", "México", "13:00h", "Polônia") +
      createGame("D", "França", "16:00h", "Austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("F", "Marrocos", "07:00h", "Croácia") +
      createGame("E", "Alemanha", "10:00h", "Japão") +
      createGame("E", "Espanha", "13:00h", "Costa Rica") +
      createGame("F", "Bélgica", "16:00h", "Canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("G", "Suíça", "07:00h", "Camarões") +
      createGame("H", "Uruguai", "10:00h", "Coréia do Sul") +
      createGame("H", "Portugal", "13:00h", "Gana") +
      createGame("G", "Brasil", "16:00h", "Sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("B", "Gales", "07:00h", "Irã") +
      createGame("A", "Qatar", "10:00h", "Senegal") +
      createGame("A", "Holanda", "13:00h", "Equador") +
      createGame("B", "Inglaterra", "16:00h", "Estados Unidos")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("D", "Tunísia", "07:00h", "Austrália") +
      createGame("C", "Polônia", "10:00h", "Arábia Saudita") +
      createGame("D", "França", "13:00h", "Dinamarca") +
      createGame("C", "Argentina", "16:00h", "México")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("E", "Japão", "07:00h", "Costa Rica") +
      createGame("F", "Bélgica", "10:00h", "Marrocos") +
      createGame("F", "Croácia", "13:00h", "Canadá") +
      createGame("E", "Espanha", "16:00h", "Alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("G", "Camarões", "07:00h", "Sérvia") +
      createGame("H", "Coréia do Sul", "10:00h", "Gana") +
      createGame("G", "Brasil", "13:00h", "Suíça") +
      createGame("H", "Portugal", "16:00h", "Uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("A", "Equador", "12:00h", "Senegal") +
      createGame("A", "Holanda", "12:00h", "Qatar") +
      createGame("B", "Irã", "16:00h", "Estados Unidos") +
      createGame("B", "Gales", "16:00h", "Inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("D", "Tunísia", "12:00h", "França") +
      createGame("D", "Austrália", "12:00h", "Dinamarca") +
      createGame("C", "Polônia", "16:00h", "Argentina") +
      createGame("C", "Arábia Saudita", "16:00h", "México")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("F", "Croácia", "12:00h", "Bélgica") +
      createGame("F", "Canadá", "12:00h", "Marrocos") +
      createGame("E", "Japão", "16:00h", "Espanha") +
      createGame("E", "Costa Rica", "16:00h", "Alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("H", "Coréia do Sul", "12:00h", "Portugal") +
      createGame("H", "Gana", "12:00h", "Uruguai") +
      createGame("G", "Sérvia", "16:00h", "Suíça") +
      createGame("G", "Camarões", "16:00h", "Brasil")
  )

function scrollToTop() {
  window.scrollTo(0, 0)
}

window.addEventListener("scroll", function () {
  let scroll = this.document.querySelector(".scrollTop")
  scroll.classList.toggle("active", window.scrollY > 450)
})

const menuItens = document.querySelectorAll('.navigation a[href^="#"]')

menuItens.forEach((item) => {
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
    behavior: "smooth",
  })
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href")
  return document.querySelector(id).offsetTop
}
