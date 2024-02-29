

function getComputerChoice() {
  let items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
}

const computerChoice = getComputerChoice();

let playerChoice; // Declare playerChoice variable outside the function

function roundPlay(computerChoice) { // Remove playerChoice parameter
  playerChoice = prompt("Choose: rock, paper, or scissors").toLowerCase(); // Reassign the value
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    // Continue with the game
  } else {
    alert("You're out!");
    return; // Exit function if choice is invalid
  }

  if (playerChoice === computerChoice) {
    alert("Draw");
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    alert("You lose");
  } else {
    alert("You win");
  }
}

roundPlay(computerChoice); // Pass computerChoice as argument
function playGame() {
  roundPlay(playerChoice,computerChoice);
  roundPlay(playerChoice,computerChoice);
  roundPlay(playerChoice,computerChoice);
  roundPlay(playerChoice,computerChoice);
  roundPlay(playerChoice,computerChoice);
}
console.log(playGame())
