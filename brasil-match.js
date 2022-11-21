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

         
<div class="brasil-live">
<a href="https://www.twitch.tv/casimito" target="_blank"><h4>🔴 Assitir AO VIVO 🔴</h4></a>

  
  </div>

        </div>

        
  
  
        
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("G", "Brasil", "16:00h", "Sérvia")) +
  createCard("28/11", "segunda", createGame("G", "Brasil", "13:00h", "Suíça")) +
  createCard("02/12", "sexta", createGame("G", "Camarões", "16:00h", "Brasil"))

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
