let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Step 3: Generate Target Number 0-9
const generateTarget = () => Math.floor(Math.random() * 10);

//Strp 4: Compare guesses of Human, Computer with Target Number  
const compareGuesses = (userGuess, computerGuess, targetNo) => {
  //After step 7 update
  if (userGuess < 0 || userGuess > 9) {
    alert(`Please enter numbers between 0 to 9! You entered ${userGuess}`)
  }
  const absUserDiff = getAbsoluteDistance(userGuess, targetNo);
  const absComputerDiff = getAbsoluteDistance(computerGuess, targetNo);
  return (absUserDiff <= absComputerDiff) ? true : false;
  //return (Math.abs(targetNo - userGuess) <= Math.abs(targetNo - computerGuess)) ? true : false;
};

//Step 5: Updates score by 1 value as per passed string
const updateScore = (winner) => (winner === 'human') ? humanScore += 1 : computerScore += 1;

//Step 6: count of rounds 
const advanceRound = () => currentRoundNumber += 1;

//Step 7: 
const getAbsoluteDistance = (guess, target) => {
  return Math.abs(target - guess);
}