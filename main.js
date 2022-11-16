// const btnMobile = document.getElementById("btn-mobile")

// function toggleMenu(event) {
//   if (event.type === "touchstart") event.preventDefault()

//   const nav = document.getElementById("nav")
//   nav.classList.toggle("active")
//   const active = nav.classList.contains("active")
//   event.currentTarget.setAttribute("aria-expanded", active)
//   if (active) {
//     event.currentTarget.setAttribute("aria-label", "Fechar menu")
//   } else {
//     event.currentTarget.setAttribute("aria-label", "Abrir menu")
//   }
// }

// btnMobile.addEventListener("click", toggleMenu)
// btnMobile.addEventListener("touchstart", toggleMenu)

const menuDiv = document.getElementById("menu-mobile")
const btnAnimar = document.getElementById("btn-menu")

menuDiv.addEventListener("click", animarMenu)

function animarMenu() {
  menuDiv.classList.toggle("abrir")
  btnAnimar.classList.toggle("ativo")
}

// pegar na navegação todos os links internos que comecem por #
const menuItens = document.querySelectorAll(".desk-menu a[href^="#" ]")








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
  createCard(
    "20/11",
    "domingo",
    createGame("A", "Catar", "13:00h", "Equador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("B", "Inglaterra", "10:00h", "Irã") +
      createGame("A", "Senegal", "13:00h", "Holanda") +
      createGame("B", "Estados Unidos", "16:00h", "Gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("C", "Argentina", "07:00", "Arábia Saudita") +
      createGame("D", "Dinamarca", "10:00", "Tunísia") +
      createGame("C", "México", "13:00", "Polônia") +
      createGame("D", "França", "16:00", "Austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("F", "Marrocos", "07:00", "Croácia") +
      createGame("E", "Alemanha", "10:00", "Japão") +
      createGame("E", "Espanha", "13:00", "Costa Rica") +
      createGame("F", "Bélgica", "16:00", "Canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("G", "Suíça", "07:00", "Camarões") +
      createGame("H", "Uruguai", "10:00", "Coréia do Sul") +
      createGame("H", "Portugal", "13:00", "Gana") +
      createGame("G", "Brasil", "16:00", "Sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("B", "Gales", "07:00", "Irã") +
      createGame("A", "Catar", "10:00", "Senegal") +
      createGame("A", "Holanda", "13:00", "Equador") +
      createGame("B", "Inglaterra", "16:00", "Estados Unidos")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("D", "Tunísia", "07:00", "Austrália") +
      createGame("C", "Polônia", "10:00", "Arábia Saudita") +
      createGame("D", "França", "13:00", "Dinamarca") +
      createGame("C", "Argentina", "16:00", "México")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("E", "Japão", "07:00", "Costa Rica") +
      createGame("F", "Bélgica", "10:00", "Marrocos") +
      createGame("F", "Croácia", "13:00", "Canadá") +
      createGame("E", "Espanha", "16:00", "Alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("G", "Camarões", "07:00", "Sérvia") +
      createGame("H", "Coréia do Sul", "10:00", "Gana") +
      createGame("G", "Brasil", "13:00", "Suíça") +
      createGame("H", "Portugal", "16:00", "Uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("A", "Equador", "07:00", "Senegal") +
      createGame("A", "Holanda", "10:00", "Catar") +
      createGame("B", "Irã", "13:00", "Estados Unidos") +
      createGame("B", "Gales", "16:00", "Inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("D", "Tunísia", "07:00", "França") +
      createGame("D", "Austrália", "10:00", "Dinamarca") +
      createGame("C", "Polônia", "13:00", "Argentina") +
      createGame("C", "Arábia Saudita", "16:00", "México")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("F", "Croácia", "07:00", "Bélgica") +
      createGame("F", "Canadá", "10:00", "Marrocos") +
      createGame("E", "Japão", "13:00", "Espanha") +
      createGame("E", "Costa Rica", "16:00", "Alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("H", "Coréia do Sul", "07:00", "Portugal") +
      createGame("H", "Gana", "10:00", "Uruguai") +
      createGame("G", "Sérvia", "13:00", "Suíça") +
      createGame("G", "Camarões", "16:00", "Brasil")
  )
