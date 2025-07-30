const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');

        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];

        const moveLeft = document.querySelector('.movesleft');

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                moves++;
                moveLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText.toLowerCase(), computerChoice);

                if (moves === 10) {
                    gameOver(playerOptions, moveLeft);
                }
            });
        });
    };

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');

        if (player === computer) {
            result.textContent = "It's a Tie!";
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        } else {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
    };

    const gameOver = (playerOptions, moveLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        chooseMove.innerText = 'Game Over!!';
        moveLeft.style.display = 'none';
        result.style.fontSize = '2rem';

        if (playerScore > computerScore) {
            result.innerText = 'You Won The Game!';
            result.style.color = '#308D46';
        } else if (playerScore < computerScore) {
            result.innerText = 'You Lost The Game!';
            result.style.color = 'red';
        } else {
            result.innerText = "It's a Tie!";
            result.style.color = 'grey';
        }

        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        });
    };

    playGame();
};

game();
