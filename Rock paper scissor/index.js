let userScore = 0;
let compScore = 0;
let userChoice;
let compChoice;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}
const Drawgame = () => {
    console.log("Game was draw")
    msg.innerText = "Game was draw .Play again !"
    msg.style.backgroundColor = "#081b31"
}
const ShowWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win !  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose")
        msg.innerText = `You lose ! ${compChoice} beats  Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("user choice= ", userChoice)
    const compChoice = genCompchoice()
    console.log("comp choice = ", compChoice);


    if (userChoice === compChoice) {
        Drawgame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;

        } else {
            userWin = compChoice === "rock" ? false : true
        }
        ShowWinner(userWin, userChoice, compChoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    });
});
