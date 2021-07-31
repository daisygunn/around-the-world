const highScoresLeaderboard = document.getElementById('high-scores-leaderboard');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresLeaderboard.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`}).join('');