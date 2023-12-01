let menu = document.getElementById("menu")
let zone = document.getElementById("gameZone")

/* définit les functions*/

function menuChange() {
    switch(menu.value){
        case'1':
        fairNumber()
        break
        case '2':
            TicTacDoe()
            break
        default :
        reset()
        break
    }
}

function reset() {
    zone.innerHTML =""
}

/**
 * cette fonction déclenche le jeu du juste nombre
 */
function fairNumber(){
    /*initialiser la zone*/
    reset()
    zone.innerHTML= "<h2>Le jeu du juste nombre</h2>"
    /* on initialise les variables*/
    let randomTarget = Math.floor(Math.random() * 100)+1
console.log(randomTarget)
let count = 0

/*on ajoute les elements html*/
let playerInput = document.createElement("input")
playerInput.setAttribute('type','text')
playerInput.setAttribute('id','playerInput')
playerInput.setAttribute('placeholder', 'Tapez votre proposition')

let inputlabel = document.createElement("label")
inputlabel.setAttribute('for', 'playerinput')
inputlabel.innerHTML = "Devinez un nombre entre 1 et 100"

let submitButton = document.createElement("button")
submitButton.innerHTML="Validez"
submitButton.addEventListener('click', compareNumber)

zone.appendChild(inputlabel)
zone.appendChild(playerInput)
zone.appendChild(submitButton)

/*le fonctionnement du jeu */
function compareNumber() {
    console.log("check")
    count++
    let userNumber = parseInt(playerInput.value)
    let message = `coup n°${count} - proposition : ${userNumber} -`
    if(isNaN(userNumber)){
        message = "il faut entrer un nombre"
    }else if(userNumber > randomTarget) {
        message += "c'est trop grand"
    } else if  (userNumber < randomTarget){
        message += "c'est trop petit"
    } else {
        message += `bravo vous avez trouvé`
    }
    let newMessage = document.createElement('p')
    newMessage.innerHTML = message
    zone.appendChild(newMessage)
    
}

}
function TicTacDoe(){
    reset()
    console.log('jeu du morpion')
    /* déclaation des variables */

    let squares=[]
    let isActive=[]
    let score=[]
    let redPlayer = true;
    
    /*mise en page de la zone */
    let infoPanel = document.createElement('div')
    infoPanel.classList.add('infoPanel')

    let grid = document.createElement('div')
    grid.classList.add('grid')

    zone.appendChild(infoPanel)
    zone.appendChild(grid)
    zone.classList.add('ttdZone')

/*création de la grille*/

for(let i=0; i<9; i++){
    let square = document.createElement
    ('div')
    square.classList.add('square')
    grid.appendChild(square)
    squares.push(square)
    isActive.push(true)
    score.push(0)
}

for(let i=0; i<9; i++){
    squares[i].addEventListener('click',squareClick.bind(squares[i],i))
}

console.log(squares, isActive, score)

/*fonctionnement du jeu*/

/**
 * déclenchée quand on clique sur un carré de la grille
 */
function squareClick(squareNumber){
    if(isActive[squareNumber]) {
        if(redPlayer){
    this.style.backgroundImage = 'url("../assets/rouge.png")'
    score[squareNumber] = 1
    } else{
        this.style.backgroundImage='url("../assets/vert.png")'
        score[squareNumber] = 4
        }
        isActive[squareNumber]=false
        redPlayer = !redPlayer
        checkVictory()
    }
    }

    function checkVictory(){
        let lineScore = [
            score[0]+score[1]+score[2],
            score[3]+score[4]+score[5],
            score[6]+score[7]+score[8],
            score[0]+score[3]+score[6],
            score[1]+score[4]+score[7],
            score[2]+score[5]+score[8],
            score[0]+score[4]+score[8],
            score[2]+score[4]+score[6]
        ]
        let endGameMessage=""
        if(lineScore.includes(3)){
            endGameMessage="Victoire Rouge"
            endGame(endGameMessage)
        }else if (lineScore.includes(12)){
            endGameMessage="Victoire Vert"
            endGame(endGameMessage)
        }else if (!isActive.includes(true)) {
            endGameMessage="Egalité"
            endGame(endGameMessage)
        }
        console.log(lineScore, endGameMessage)
    }

function endGame(endGameMessage){
    for(let i=0; i<8; i++){
        isActive[i]=false

    }
    let gameOverMessage=document.createElement('h2')
    gameOverMessage.classList.add('gameOver')
    gameOverMessage.innerHTML=endGameMessage

    infoPanel.appendChild(gameOverMessage)

    let restartBut = document.createElement('button')
    restartBut.innerHTML="Recommencé"
    restartBut.addEventListener('click',TicTacDoe)

    infoPanel.appendChild(restartBut)
}
}
/* on configure les évènements*/

menu.addEventListener("change", menuChange)
