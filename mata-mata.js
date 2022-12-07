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
  <p class="grupo">${group}</p>
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
  createCard(
    "03/12",
    "sábado",
    createGame("Oitavas de Final", "Holanda", "3 X 1", "Estados Unidos") +
    createGame("Oitavas de Final", "Argentina", "2 X 1", "Austrália")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("Oitavas de Final", "França", "3 x 1", "Polônia") +
    createGame("Oitavas de Final", "Inglaterra", "3 X 0", "Senegal")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("Oitavas de Final", "Japão", "1(1) X 1(3)", "Croácia") +
    createGame("Oitavas de Final", "Brasil", "4 x 1", "Coréia do Sul")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("Oitavas de Final", "Marrocos", "0(3) X 0(0)", "Espanha") +
    createGame("Oitavas de Final", "Portugal", "6 X 1", "Suíça")
  ) +
  createCard(
    "09/12",
    "sexta",
    createGame("Quartas de Final", "Croácia", "12:00h", "Brasil") +
    createGame("Quartas de Final", "Holanda", "16:00h", "Argentina")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("Quartas de Final", "Marrocos", "12:00h", "Portugal") +
    createGame("Quartas de Final", "Inglaterra", "16:00h", "França")

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
