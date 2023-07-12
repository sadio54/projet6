const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score")
const head = document.querySelectorAll(".head")

let timeUp = false
let score = 0
let lastCloud



function showHead() {
    const time = randomTime(600, 1000)
    const cloud = randomCloud(clouds);
    cloud.classList.add("up")
    setTimeout(() => {
        if(!timeUp) showHead();
        cloud.classList.remove("up")
    }, time)


}
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randomCloud (clouds) {
   const indexCloud = Math.floor(Math.random() * clouds.length)
   const cloudSelect = clouds[indexCloud]
   
   if (cloudSelect === lastCloud) {
    return randomCloud(clouds)
   }
   lastCloud = cloudSelect
   return cloudSelect
}

function playerScore(event) {
    if(!event.isTrusted) return
    score += 1
    this.classList.remove("up")
    scoreBoard.textContent = score
}

head.forEach(head => head.addEventListener("click", playerScore))

function startGame() {
    scoreBoard.textContent = 0;
    score = 0
    timeUp = false
    showHead()
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "Fin"
        }, 2000)
    }, 10000)
}
startGame()
