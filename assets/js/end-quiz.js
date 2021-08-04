/*jshint esversion: 6 */

// Blinking Game Over heading - https://www.youtube.com/watch?v=9iDm3QiIEzU
setInterval(function () {
    var gameOverText = document.getElementById('game-over-heading');

    gameOverText.innerHTML = "Game Over!";

    gameOverText.style.display = (gameOverText.style.display == 'none' ? '' : 'none');
}, 600);

// Set variables 
const username = document.getElementById('username');
const saveScore = document.getElementById('save-score');
const finalScore = document.getElementById('final-score-total');
const mostRecentScore = localStorage.getItem('recentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Max number of scores that can be displayed
const maxHighScores = 5;

// Set the final score that is displayed
finalScore.innerText = mostRecentScore;

// Disable the save score button if there is no value in the username
username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
    });


function validateForm() {
    let usernameLength = username.value.length;
    console.log(usernameLength);
    if (usernameLength < 5) {
        alert("Name must be more than 5 characters");
        return;
    } else {
        console.log('username entered');
    }
}
  
// Save the score to local storage
function saveHighScore(e) {
    e.preventDefault();
    validateForm();
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    // Add the score to the highScores array, sort them in order and display the top 5
    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(maxHighScores);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('https://daisygunn.github.io/around-the-world/additional-pages/high-scores.html');
}