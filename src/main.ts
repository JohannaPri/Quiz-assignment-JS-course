// Imports CSS.
import './scss/style.scss';
// Imports array with quiz.
import { musicQuiz } from './questions.ts';

// Creates variables for the HTML elements.
const startPage: HTMLDivElement | null = document.querySelector('#start-page');
const startBtn: HTMLButtonElement | null =
  document.querySelector('#start-quiz-btn');
const gamePage: HTMLDivElement | null = document.querySelector('#game-page');
const lastPage: HTMLDivElement | null = document.querySelector('#last-page');
const question: HTMLSpanElement | null = document.querySelector('#question');
const nextQuestionBtn: HTMLButtonElement | null =
  document.querySelector('#next-question-btn');
const alternative0Btn: HTMLButtonElement | null =
  document.querySelector('#alternative0-btn');
const alternative1Btn: HTMLButtonElement | null =
  document.querySelector('#alternative1-btn');
const alternative2Btn: HTMLButtonElement | null =
  document.querySelector('#alternative2-btn');
const tryAgainBtn: HTMLButtonElement | null =
  document.querySelector('#try-again-btn');
const finishBtn: HTMLButtonElement | null =
  document.querySelector('#finish-btn');
const resultsTime: HTMLSpanElement | null =
  document.querySelector('#results-time');
const resultsText: HTMLSpanElement | null =
  document.querySelector('#results-text');

// Variables for timer
let startTime: number;
let timerInterval: number;
let totalTime: number = 0;
let elapsedTime: number = 0;
const timerElement: HTMLSpanElement | null = document.querySelector('#timer');

/**
 *Function generating unique numbers.
 */
function generateUniqueRandomNumbers(count: number, range: number): number[] {
  const randomNumbers: number[] = [];

  while (randomNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * range);

    // Checks if the number is already in the array.
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
}

// Creates an array variable with numbers between 0-39.
let randomNumbersArray = generateUniqueRandomNumbers(10, 40);
console.log(randomNumbersArray);

/**
 *
 *
 *
 * Show game page
 *
 *
 *
 */

// Function showing the game page (deletes class=hidden) when the user clicks on the 'Start quiz'-button.
// Also shows the first question.
function showGamePage(): void {
  // Reset timer to 0.
  totalTime = 0;
  elapsedTime = 0;

  if (startPage !== null) {
    startPage.classList.add('hidden');
  }
  if (gamePage !== null) {
    gamePage.classList.remove('hidden');
  }

  // Print question to page.
  if (question !== null) {
    question.innerHTML = `${musicQuiz[randomNumbersArray[0]].question}`;
  }

  // Print alternatives for buttons to page.
  if (alternative0Btn !== null) {
    alternative0Btn.innerHTML = `${
      musicQuiz[randomNumbersArray[0]].options[0]
    }`;
  }
  if (alternative1Btn !== null) {
    alternative1Btn.innerHTML = `${
      musicQuiz[randomNumbersArray[0]].options[1]
    }`;
  }
  if (alternative2Btn !== null) {
    alternative2Btn.innerHTML = `${
      musicQuiz[randomNumbersArray[0]].options[2]
    }`;
  }

  // Update the question number display
  const questionNumberElement: HTMLDivElement | null =
    document.querySelector('#question-number');
  if (questionNumberElement !== null) {
    questionNumberElement.innerText = `1/${randomNumbersArray.length}`;
  }

  // Start the timer
  startTimer();
}

if (startBtn !== null) {
  startBtn.addEventListener('click', showGamePage);
}

/**
 *
 *
 *
 * Timer
 *
 *
 *
 */

/**
 * Function to start timer
 */
function startTimer(): void {
  totalTime = 0;
  elapsedTime = 0;
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

/**
 * Function to stop timer
 */
function stopTimer(): number {
  clearInterval(timerInterval);
  elapsedTime = Math.floor((currentTime - startTime) / 1000); // in seconds
  totalTime += elapsedTime; // Add elapsed time to totalTime
  return totalTime;
}

/**
 * Function to format time as "00:00"
 * @param seconds - The time in seconds
 * @returns A formatted string in the "mm:ss" format
 */

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}

let currentTime: number = 0;

// Function to update the timer display
function updateTimer(): void {
  currentTime = Date.now();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000); // in seconds

  if (timerElement !== null) {
    const formattedTime = formatTime(elapsedTime);
    timerElement.innerText = `${formattedTime}`;
  }
}

/**
 *
 *
 *
 * Alternative buttons
 *
 *
 *
 */

// Add event listeners.
if (alternative0Btn !== null) {
  alternative0Btn.addEventListener('click', () => {
    handleButtonClick(alternative0Btn);
  });
}
if (alternative1Btn !== null) {
  alternative1Btn.addEventListener('click', () => {
    handleButtonClick(alternative1Btn);
  });
}
if (alternative2Btn !== null) {
  alternative2Btn.addEventListener('click', () => {
    handleButtonClick(alternative2Btn);
  });
}

// Declare a variable to keep track of the chosen alternative
let chosenAlternative: HTMLButtonElement | null = null;

// Declare a variable to control whether clicks are allowed
let allowClicks: boolean = true;

/**
 * Function controlling clicks on alternative buttons.
 */
function handleButtonClick(clickedButton: HTMLButtonElement): void {
  if (!allowClicks) {
    return; // Clicks are disabled
  }

  if (chosenAlternative !== null) {
    return; // Only allow one click per question
  }

  chosenAlternative = clickedButton;

  const correctAnswerIndex =
    musicQuiz[randomNumbersArray[questionIndex]].correctAnswerIndex;

  // Add 'wrong' class to the chosen alternative if it's incorrect
  if (chosenAlternative.id !== `alternative${correctAnswerIndex}-btn`) {
    chosenAlternative.classList.add('wrong');
  } else {
    // Add 'correct' class to the correct alternative
    chosenAlternative.classList.add('correct');
  }

  // Disable other alternative buttons
  disableAlternativeButtons();
}

/**
 * Function that disables alternative buttons after selecting an answer.
 */
function disableAlternativeButtons(): void {
  if (alternative0Btn !== null) {
    alternative0Btn.disabled = true;
  }
  if (alternative1Btn !== null) {
    alternative1Btn.disabled = true;
  }
  if (alternative2Btn !== null) {
    alternative2Btn.disabled = true;
  }
}

/**
 * Function that remove the green/red color from the alt btns.
 */
function resetAltBtns(): void {
  if (alternative0Btn !== null) {
    alternative0Btn.classList.remove('correct', 'wrong');
    alternative0Btn.disabled = false;
  }
  if (alternative1Btn !== null) {
    alternative1Btn.classList.remove('correct', 'wrong');
    alternative1Btn.disabled = false;
  }
  if (alternative2Btn !== null) {
    alternative2Btn.classList.remove('correct', 'wrong');
    alternative2Btn.disabled = false;
  }
}

/**
 *
 *
 *
 * Next question-button
 *
 *
 *
 */

// Initialize question index
let questionIndex: number = 0; // 1 since we use question 0 when the user clicks on the 'Start quiz'-button.

console.log(resultsText);

// Variable to keep track of points
let countPoints: number = 0;

/**
 * Function displaying the next question.
 */
function showNextQuestion(): void {
  // Increment the questionIndex before updating the display
  questionIndex += 1;

  // Check if there are more questions to display.
  if (questionIndex < randomNumbersArray.length) {
    // Update the question number display
    const questionNumberElement: HTMLDivElement | null =
      document.querySelector('#question-number');
    if (questionNumberElement !== null) {
      questionNumberElement.innerText = `${questionIndex + 1}/${
        randomNumbersArray.length
      }`;
    }

    // Reset all alternative buttons to default state on the next question.
    resetAltBtns();

    // Reset chosenAlternative
    chosenAlternative = null;

    // Enable clicks for the next question
    allowClicks = true;

    // Display the next question.
    if (question !== null) {
      question.innerText = `${
        musicQuiz[randomNumbersArray[questionIndex]].question
      }`;
    }

    // Print alternatives for buttons to the page.
    if (alternative0Btn !== null) {
      alternative0Btn.innerHTML = `${
        musicQuiz[randomNumbersArray[questionIndex]].options[0]
      }`;
    }
    if (alternative1Btn !== null) {
      alternative1Btn.innerHTML = `${
        musicQuiz[randomNumbersArray[questionIndex]].options[1]
      }`;
    }
    if (alternative2Btn !== null) {
      alternative2Btn.innerHTML = `${
        musicQuiz[randomNumbersArray[questionIndex]].options[2]
      }`;
    }
  } else {
    // Handle the case when there are no more questions (quiz is finished).
    // (redirect to results page)
    console.log('Quiz finished!');

    if (question !== null) {
      question.innerText =
      'Well done!\n You have answered all the questions.\n Click Finish to see your results!';
    }

    if (alternative0Btn !== null) {
      alternative0Btn.classList.add('hidden');
    }
    if (alternative1Btn !== null) {
      alternative1Btn.classList.add('hidden');
    }
    if (alternative2Btn !== null) {
      alternative2Btn.classList.add('hidden');
    }

    if (nextQuestionBtn !== null) {
      nextQuestionBtn.classList.add('hidden');
    }

    if (finishBtn !== null) {
      finishBtn.classList.remove('hidden');
      finishBtn.addEventListener('click', () => {
        if (lastPage !== null) {
          lastPage.classList.remove('hidden');
        }
        // Prints number of point to resultText on last page
        if (resultsText !== null) {
          resultsText.innerText = `${countPoints}/${randomNumbersArray.length}`;
        }
        if (resultsTime !== null) {
          resultsTime.innerText = `${totalTime}`;
        }
        if (gamePage !== null) {
          gamePage.classList.add('hidden');
        }
      });
    }
  }
}

/**
 * Function controlling the selected answer.
 */
function compareAnswer(): void {
  if (chosenAlternative === null || !allowClicks) {
    return; // no alternative selected or already processed
  }

  // Disable further clicks
  allowClicks = false;

  const correctAnswerIndex =
    musicQuiz[randomNumbersArray[questionIndex]].correctAnswerIndex;

  // Add 'correct' or 'wrong' class based on the correctness
  if (chosenAlternative.id === `alternative${correctAnswerIndex}-btn`) {
    chosenAlternative.classList.add('correct');

    // Adds one point for every correct answer
    countPoints += 1;
    console.log(countPoints);
  } else {
    chosenAlternative.classList.add('wrong');
  }

  // Disable other alternative buttons
  disableAlternativeButtons();

  if (questionIndex === 9) {
    // Stop the timer on the 10th question
    stopTimer();
  }

  // Show the next question
  showNextQuestion();
}

if (nextQuestionBtn !== null) {
  nextQuestionBtn.addEventListener('click', compareAnswer);
}

/**
 *
 *
 *
 * Play again
 *
 *
 *
 */

/**
 * Function to generate a new random numbers array for round two,
 * avoiding the numbers to the questions in the first round.
 */
function generateNewUniqueRandomNumbers(
  count: number, range: number, usedNumbers: number[] ): number[] {
  const randomNumbers: number[] = [];

  while (randomNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * range);

    // Checks if the number is not in the array of used numbers or the result array.
    if (
      !usedNumbers.includes(randomNumber) &&
      !randomNumbers.includes(randomNumber)
    ) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
}

/**
 * Function to reset the game and show the game page with new random numbers.
 */
function playAgain(): void {
  // Generate new random numbers excluding the used question indices.
  const newRandomNumbersArray = generateNewUniqueRandomNumbers(
    10, 40, randomNumbersArray );

  // Add the new random numbers for next round to the variable randomNumbersArray.
  randomNumbersArray = newRandomNumbersArray;

  // Reset all alternative buttons to default state on the next question.
  resetAltBtns();

  // Reset chosenAlternative
  chosenAlternative = null;

  // Enable clicks for the next question
  allowClicks = true;

  // Reset question index to 0.
  questionIndex = 0;

  if (timerElement !== null) {
    timerElement.innerText = '00:00';
  }

  // Hide Finish btn.
  if (finishBtn !== null) {
    finishBtn.classList.add('hidden');
  }
  // Show Next question btn.
  if (nextQuestionBtn !== null) {
    nextQuestionBtn.classList.remove('hidden');
  }

  // Hide the last page
  if (lastPage !== null) {
    lastPage.classList.add('hidden');
  }

  // Display the first question.
  showGamePage();

  // Show alternative buttons
  if (alternative0Btn !== null) {
    alternative0Btn.classList.remove('hidden');
  }
  if (alternative1Btn !== null) {
    alternative1Btn.classList.remove('hidden');
  }
  if (alternative2Btn !== null) {
    alternative2Btn.classList.remove('hidden');
  }

  countPoints = 0;
}

// Run the quiz once again
if (tryAgainBtn !== null) {
  tryAgainBtn.addEventListener('click', playAgain);
}
