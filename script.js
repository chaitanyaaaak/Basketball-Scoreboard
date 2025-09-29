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
    highlightLeader();
}

function addFoul(team) {
    if (team === 'home') {
        homeFoulsVal += 1;
        homeFouls.textContent = homeFoulsVal;
    } else if (team === 'guest') {
        guestFoulsVal += 1;
        guestFouls.textContent = guestFoulsVal;
    }
    highlightLeader();
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

function resetGame() {
    homeScoreVal = 0;
    guestScoreVal = 0;
    homeFoulsVal = 0;
    guestFoulsVal = 0;

    homeScore.textContent = homeScoreVal;
    guestScore.textContent = guestScoreVal;
    homeFouls.textContent = homeFoulsVal;
    guestFouls.textContent = guestFoulsVal;

    highlightLeader();
}

newGameBtn.addEventListener('click', resetGame);