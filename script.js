const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
const homeFouls = document.getElementById('home-fouls');
const guestFouls = document.getElementById('guest-fouls');
const newGameBtn = document.getElementById('new-game-btn');

let homeScoreVal = 0;
let guestScoreVal = 0;
let homeFoulsVal = 0;
let guestFoulsVal = 0;

function addScore(team, points) {
    if (team === 'home') {
        homeScoreVal += points;
        homeScore.textContent = homeScoreVal;
    } else if (team === 'guest') {  
        guestScoreVal += points;
    }
}

