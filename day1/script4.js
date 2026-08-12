console.log("Sccicors Paper Rock");

let allChoice = document.querySelectorAll(".choice-btn");

let computerWinCount = 0;
let playerWinCount = 0;

let computerScore = document.getElementById("computer-score");
let playerScore = document.getElementById("player-score");
allChoice.forEach((choices) => {
  choices.addEventListener("click", () => {
    let playerChoice = choices.getAttribute("id");
    console.log(playerChoice);
    let computerChoice = getRandomInt(3);
    console.log(computerChoice);

    // if (playerChoice === computerChoice) {
    //   console.log("draw");
    // } else if (playerChoice === "rock" && computerChoice === "scissors") {
    //   console.log("player wins");
    //   playerWinCount++;
    //   playerScore.innerText = playerWinCount;
    // } else if (playerChoice === "paper" && computerChoice === "scissors") {
    //   console.log("computer wins");
    //   computerWinCount++;
    //   computerScore.innerText = computerWinCount;
    // } else if (playerChoice === "scissors" && computerChoice === "rock") {
    //   console.log("computer wins");
    //   computerWinCount++;
    //   computerScore.innerText = computerWinCount;
    // } else {
    //   console.log("player wins");
    //   playerWinCount++;
    //   playerScore.innerText = playerWinCount;
    // }

    if (playerChoice === computerChoice) {
      console.log("Draw!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("Player wins!");
      playerWinCount++;
      playerScore.innerText = playerWinCount;
    } else {
      console.log("Computer wins!");
      computerWinCount++;
      computerScore.innerText = computerWinCount;
    }

    console.log(playerWinCount);
    console.log(computerWinCount);
  });
});

let resetBtn = document.getElementById("reset");
let computerChoiceBtn = document.getElementById("computer-choice");
resetBtn.addEventListener("click", () => {
  computerChoiceBtn.innerText = "❓";
  playerWinCount = 0;
  computerWinCount = 0;
  playerScore.innerText = 0;
  computerScore.innerText = 0;
});

function getRandomInt(max) {
  let number = Math.floor(Math.random() * max);
  if (number == 0) {
    computerChoiceBtn.innerText = "🪨";
    return "rock";
  } else if (number == 1) {
    computerChoiceBtn.innerText = "📄";
    return "paper";
  } else {
    computerChoiceBtn.innerText = "✂️";
    return "scissors";
  }
}
