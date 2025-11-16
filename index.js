let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function minusone(){
    homeScore -=1
    homeScoreEl.textContent = homeScore
}
function plusone(){
    homeScore +=1
    homeScoreEl.textContent = homeScore
}
function plustwo(){
    homeScore +=2
    homeScoreEl.textContent = homeScore
}
function plusthree(){
    homeScore +=3
    homeScoreEl.textContent = homeScore
}

function guestminusone(){
    guestScore -=1
    guestScoreEl.textContent = guestScore
}
function guestplusone(){
    guestScore +=1
    guestScoreEl.textContent = guestScore
}
function guestplustwo(){
    guestScore +=2
    guestScoreEl.textContent = guestScore
}
function guestplusthree(){
    guestScore +=3
    guestScoreEl.textContent = guestScore
}

function reset(){
    guestScore = 0
    homeScore = 0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
}