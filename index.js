// tengo que hacer que los botnoes funcionen incrementando el score.//

let scoreHome = 0

let homeResult = document.getElementById("score-home")

function add1() {
    scoreHome = scoreHome + 1
    homeResult.textContent = scoreHome    
}

function add2() {
    scoreHome = scoreHome + 2
    homeResult.textContent = scoreHome
}

function add3() {
    scoreHome = scoreHome + 3
    homeResult.textContent = scoreHome
}

let scoreGuest = 0

let guestResult = document.getElementById("score-guest")

function addi(){
    scoreGuest = scoreGuest +1
    guestResult.textContent = scoreGuest
}

function addii(){
    scoreGuest = scoreGuest +2
    guestResult.textContent = scoreGuest
}

function addiii(){
    scoreGuest = scoreGuest +3
    guestResult.textContent = scoreGuest
}

function newGame(){
    scoreHome = 0
    scoreGuest = 0
    homeResult.textContent = scoreHome
    guestResult.textContent = scoreGuest
}