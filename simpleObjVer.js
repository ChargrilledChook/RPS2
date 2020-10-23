function match() {
  const player = { score : 0, name : 'Human' }
  const computer = { score : 0, name : 'AI' }

  const outcomes = {
  rock : { rock : 'draw', paper : 'loss', scissors : 'win' },
  paper : { rock : 'win', paper : 'draw', scissors : 'loss' },
  scissors : { rock : 'loss', paper : 'win', scissors : 'draw' }
  };

  while (player.score < 5 && computer.score < 5) {
    playRound(player, computer, outcomes)
  }

  let winner;
  let loser;

  if (player.score > computer.score) {
    winner = player;
    loser = computer
  } else {
     winner = computer;
     loser = player;
  }

  return `${winner.name} wins ${winner.score} to ${loser.score}!`
}

function playRound(player1, player2, outcomes) {
  result = outcomes[chooser()][chooser()]
  givePoint(player1, player2, result)
}

function givePoint (player1, player2, result) {
  switch(result) {
    case 'win':
      player1.score += 1;
      break;
    case 'loss':
      player2.score += 1;
    case 'draw':
      break;
  }
}

function chooser() {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

match()
