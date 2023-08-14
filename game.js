const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
  } else {
      console.log('Error');
  }
};

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
      return 'rock';
  } else if (number === 1) {
      return 'paper';
  } else if (number === 2) {
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
      return "It's a tie!";
  } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
          return 'Computer has won!';
      } else {
          return 'User has won!';
      }
  } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
          return 'Computer has won!';
      } else {
          return 'User has won!';
      }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
          return 'Computer has won!';
      } else {
          return 'User has won!';
      }
  }
};

const playGame = (choice = 'paper') => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  return [determineWinner(userChoice, computerChoice), computerChoice];
};