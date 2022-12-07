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

         
<div class="brasil-live">
<a href="https://www.twitch.tv/casimito" target="_blank"><h4>🔴 Assistir AO VIVO 🔴</h4></a>

  
  </div>

        </div>

        
  
  
        
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("Grupo G", "Brasil", "2 X 0", "Sérvia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("Grupo G", "Brasil", "1 X 0", "Suíça")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("Grupo G", "Camarões", "1 x 0", "Brasil")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("Oitavas de Final", "Brasil", "4 X 1", "Coréia do Sul")
  ) +
  createCard(
    "09/12",
    "sexta",
    createGame("Quartas de Final", "Brasil", "12:00h", "Croácia")
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
