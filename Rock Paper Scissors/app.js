
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector(".msg");

const user_Score_board = document.querySelector("#user_score");
const comp_Score_board = document.querySelector("#computer_score");

const genComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomIndx = Math.floor(Math.random() * 3);
    return option[randomIndx];
    // rock, paper, scissors
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game is draw! Play again.";
    msg.style.backgroundColor = "#081B31";
};

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        user_Score_board.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats computer's ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        comp_Score_board.innerText = compScore;
        console.log("You Lose!");
        msg.innerText = `You lose! Computer's ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    };
};

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    //Generate Computer Choice => modular way of programming.
    const compChoice = genComputerChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // Comp choice => paper / scissors, because it will log draw before if it selects rock.
        userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice has been clicked", userChoice);
        playGame(userChoice);
    });
});