// Home controls
let plusOneHome = document.getElementById("add-one-home")
let plusTwoHome = document.getElementById("add-two-home")
let plusThreeHome = document.getElementById("add-three-home")
let homeScore = document.getElementById("home-score")
let homeStart = 0
homeScore.textContent = homeStart

function addOneHome() {
    homeStart += 1
    homeScore.textContent = homeStart
}

function addTwoHome() {
    homeStart += 2
    homeScore.textContent = homeStart
}

function addThreeHome() {
    homeStart += 3
    homeScore.textContent = homeStart
}

// Guest controls
let plusOneGuest = document.getElementById("add-one-guest")
let plusTwoGuest = document.getElementById("add-two-guest")
let plusThreeGuest = document.getElementById("add-three-guest")
let guestScore = document.getElementById("guest-score")
let guestStart = 0
guestScore.textContent = guestStart

function addOneGuest() {
    guestStart += 1
    guestScore.textContent = guestStart
}

function addTwoGuest() {
    guestStart += 2
    guestScore.textContent = guestStart
}

function addThreeGuest() {
    guestStart += 3
    guestScore.textContent = guestStart
}

function scoreReset() {
    homeStart -= homeStart
    homeScore.textContent = homeStart
    guestStart -= guestStart
    guestScore.textContent = guestStart
}

console.log(guestScore)

