const win = "You win!";

const loss = "You lose!";

const draw = "Draw!";

const outcomes = {
  rock: { rock: draw, paper: loss, scissors: win },
  paper: { rock: win, paper: draw, scissors: loss },
  scissors: { rock: loss, paper: win, scissors: draw },
};

function round() {
  const player = playerChoice();
  const computer = computerChoice();
  return outcomes[player][computer];
}

function match() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 6 && computerScore < 6) {}
}

const HumanPlayer = function (name) {
  this.name = name;
  this.score = 0;
  this.give_point = () => (this.score += 1);
  this.default_move = () => "scissors";
  this.pick_move = () => prompt();
};

const ComputerPlayer = function (name) {
  this.name = name;
  this.score = 0;
  this.give_point = () => score++;
  this.pick_move = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };
};

const ComputerFac = (name) => {
  let score = 0;
  const getScore = () => score;
  const givePoint = () => {
    score++;
    return "Computer scores!";
  };
  pickMove = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };
  return { name, getScore, givePoint, pickMove };
};

const PlayerFac = (name) => {
  let score = 0;
  const getScore = () => score;
  const givePoint = () => {
    score++;
    return "Computer scores!";
  };
  pickMove = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };
  return { name, getScore, givePoint, pickMove };
};

const human = new HumanPlayer("Bill");
const ai = new ComputerPlayer("TIS-5000");

/* function match(player1, player2) {
  while(player1.getscore < 6 && player2.getScore < 6) {

  }
} */

switch (result) {
  case win:
    player1.givePoint();
    break;
  case loss:
    player2.givePoint();
  default:
    break;
}
