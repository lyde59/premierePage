/*let nomUtilisateur
let ageUtilisateur

nomUtilisateur = prompt ("Comment vous appelez-vous")
ageUtilisateur = prompt ("Quel est votre âge ?")

alert(`bonjour ${nomUtilisateur}, vous avez ${ageUtilisateur} ans!`)*/

/*premier script complet*/

let randomTarget = Math.floor(Math.random() * 100)+1
console.log(randomTarget)

let userNumber = null
 count++

while(userNumber!=randomTarget) {
    count++
    userNumber = prompt("Devinez un nombre entre 1 et 100")

    if(isNaN(userNumber)){
    alert("il faut entrer un nombre")
    }else if(userNumber > randomTarget) {
        alert("c'est trop grand")
    } else if  (userNumber < randomTarget){
        alert("c'est trop petit")
    } else {
        alert(`bravo vous avez trouvé en ${count} coups`)
    }
}

