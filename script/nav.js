/* on récupère les éléments*/

let nav = document.getElementById("navBar")
let navButton = document.getElementById("navTrigger")

/*on crée de variables utiles*/

let isHidden = true

/*on définit les fonctions*/

function moveNav () {
    if(isHidden){
    nav.style.transform = "translateX(20vw)"
    isHidden = false
    }else {
        nav.style.transform = "translateX(-20vw)"
    isHidden = true
    }
}

//on règle les évènements déclencheur

navButton.addEventListener('click', moveNav)