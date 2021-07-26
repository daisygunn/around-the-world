// Blinking Game Over heading - https://www.youtube.com/watch?v=9iDm3QiIEzU

setInterval(function(){
    var gameOverText = document.getElementById('game-over-heading');

    gameOverText.innerHTML="Game Over!";
    
    gameOverText.style.display=(gameOverText.style.display=='none'?'':'none');
}, 600);


