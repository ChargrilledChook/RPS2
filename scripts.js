const win = 'You win!';

const loss = 'You lose!';

const draw = 'Draw!';

const outcomes = {
  rock : { rock : draw, paper : loss, scissors : win },
  paper : { rock : win, paper : draw, scissors : loss },
  scissors : { rock : loss, paper : win, scissors : draw }
};

const playerChoice = () => {
  return 'paper'
};

const computerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
};

function round() {
  const player = playerChoice();
  const computer = computerChoice();
  return outcomes[player][computer];
};

console.log(round())
