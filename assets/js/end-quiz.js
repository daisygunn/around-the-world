// // Blinking Game Over heading - https://www.youtube.com/watch?v=9iDm3QiIEzU
// setInterval(function () {
//     var gameOverText = document.getElementById('game-over-heading');

//     gameOverText.innerHTML = "Game Over!";

//     gameOverText.style.display = (gameOverText.style.display == 'none' ? '' : 'none');
// }, 600);


const username = document.getElementById('username');
const saveScore = document.getElementById('save-score');
const finalScore = document.getElementById('final-score-total');
const mostRecentScore = localStorage.getItem('recentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScores = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('https://daisygunn.github.io/around-the-world/additional-pages/high-scores.html')
};