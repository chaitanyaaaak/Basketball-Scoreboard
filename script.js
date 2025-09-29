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
        guestScore.textContent = guestScoreVal;
    }
}

function addFoul(team) {
    if (team === 'home') {
        homeFoulsVal += 1;
        homeFouls.textContent = homeFoulsVal;
    } else if (team === 'guest') {
        guestFoulsVal += 1;
        guestFouls.textContent = guestFoulsVal;
    }
}

function highlightLeader() {
    homeScore.classList.remove('leader');
    guestScore.classList.remove('leader');

    if (homeScoreVal > guestScoreVal) {
        homeScore.classList.add('leader');
    }   else if (guestScoreVal > homeScoreVal) {
        guestScore.classList.add('leader');
    }
}

