let homeScore = 0;
let guestScore = 0;

let homeScoreDisplay = document.getElementById("home-score");
let guestScoreDisplay = document.getElementById("guest-score");

let homeAddOne = document.getElementById("board1-btn1");
let homeAddTwo = document.getElementById("board1-btn2");
let homeAddThree = document.getElementById("board1-btn3");

let guestAddOne = document.getElementById("board2-btn1");
let guestAddTwo = document.getElementById("board2-btn2");
let guestAddThree = document.getElementById("board2-btn3");

let reset = document.getElementById("reset-btn");


reset.addEventListener("click", function () {
    homeScore = 0;
    guestScore = 0;
    homeScoreDisplay.innerHTML = homeScore;
    guestScoreDisplay.innerHTML = guestScore;
});


homeAddOne.addEventListener("click", () => {
    homeScore++;
    homeScoreDisplay.textContent = homeScore;
});

homeAddTwo.addEventListener("click", () => {
    homeScore += 2;
    homeScoreDisplay.textContent = homeScore;
});

homeAddThree.addEventListener("click", () => {
    homeScore += 3;
    homeScoreDisplay.textContent = homeScore;
});


guestAddOne.addEventListener("click", () => {
    guestScore++;
    guestScoreDisplay.textContent = guestScore;
});

guestAddTwo.addEventListener("click", () => {
    guestScore += 2;
    guestScoreDisplay.textContent = guestScore;
});

guestAddThree.addEventListener("click", () => {
    guestScore += 3;
    guestScoreDisplay.textContent = guestScore;
});