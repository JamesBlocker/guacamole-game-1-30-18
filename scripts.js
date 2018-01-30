
//Add click listeners to board squares
var holes = document.querySelectorAll('.hole');
for (var i = 0; i < holes.length; i++) {
    holes[i].addEventListener('click', moleClicked);
}

//Score
var scoreCounter = document.querySelector('#score-count');
var score = 0;

function scoreCheck() {
    scoreCounter.innerText = score;
}

//Timer
var timerCounter = document.querySelector('#time-count');
var timer = 5;
function timerCheck() {
    if (timer > 0) {
        timer--; 
    } 
    timerCounter.innerText = timer;
}
timerCheck();

var timerID = setInterval(timerCheck, 1000);

//mole timer

var moleTimer = setInterval(moleMove, 500);
var moleClearTimer = setInterval(moleClear, 1000)
timerCheck();
console.log(timer);



//Mole placement
function randomInt(n) {
    return Math.floor(Math.random() * n);
} 

//mole clear
var moleHole;
var nextHole;
function moleClear() {
    moleHole.innerText = "";
    //moleMove();
}


function moleMove() {
    var nextHole = holes[randomInt(9)];
    nextHole.innerHTML = "M";
    moleHole = nextHole;
}

//board clicks
function moleClicked() {
    if (this.innerHTML === "") {
        console.log('Mole is not here');
        if (score >= 1) {
            score--;
            scoreCheck();
        }
    } else {
        score++;
        scoreCheck()
        console.log('Mole IS here!');
        this.innerHTML = "";
        //moleMove();
        
    }
}

