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
}

for(let i=0; i<9; i++){
    squares[i].addEventListener('click',squareClick.bind(squares[i]))
}

console.log(squares)

function squareClick(){
    this.style.backgroundImage = 'url("../assets/rouge.png")'
    }

}

/* on configure les évènements*/

menu.addEventListener("change", menuChange)
 