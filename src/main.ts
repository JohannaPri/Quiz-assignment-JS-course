/**
 *
 *
 * Jennis exempel-kod:
 * (Citronernas kod längre ned)
 *
 *
 */

/* import './scss/style.scss'; // Importera huvud-SCSS-filen
import typescriptLogo from './assets/icons/typescript.svg'; // Exempel på hur ni importerar bilder
import { sortArrayByText } from './helpers'; // Exempel på hur ni importerar en funktion från en annan fil

 */

/**
 * Här definierar vi en mall för hur vi vill att vår array ska se ut.
 * Ett så kallat "interface".
 * Den är för att garantera att ALLA objekt i vår array har samtliga egenskaper.
 * Prova t.ex. att lägga till en egenskap i interfacet, och notera hur arrayen nedanför
 * får rödmarkeringar där denna egenskap saknas.
 */
/* interface IExampleArray {
  name: string;
  age: number;
}

// Här skriver vi att vår array med namnet myExampleArray ska följa reglerna (interfacet)
// i IExampleArray och att det är en array genom att vi sätter [] efter
const myExampleArray: IExampleArray[] = [
  {
    name: 'Hans',
    age: 25,
  },
  {
    name: 'Greta',
    age: 30,
  },
  {
    name: 'Häxan',
    age: 87,
  },
];

// Skriv ut den sorterade arrayen i konsolen, använd en importerad funktion
console.table(sortArrayByText(myExampleArray, 'name'));

// Använd samma funktion för att sortera på en annan egenskap
console.table(sortArrayByText(myExampleArray, 'age'));

// Hämta ett HTML-element från index.html
const container: HTMLDivElement | null = document.querySelector('#app');

if (container !== null) { // Om HTML-elementet finns
  container.innerHTML = `
    <div>
      <h1>Hello FED23D!</h1>
      <img src="${typescriptLogo}" loading="lazy" width="32" height="32"
        alt="Blå bakgrund, vita bokstäver ovanpå med texten TS">
    </div>
  `;
}
 */






/**
 *
 *
 * Citronernas kod:
 *
 *
 */

// Imports CSS.
import './scss/style.scss';
// Imports array with quiz.
import { musicQuiz } from './questions.ts';

/* // Imports functions.
import { generateUniqueRandomNumbers } from './helpers.ts'; 
import { showGamePage } from './helpers.ts';  */

// Creates variables for the HTML elements.
const startPage: HTMLDivElement | null = document.querySelector('#start-page');
const startBtn: HTMLButtonElement | null = document.querySelector('#start-quiz-btn');
const gamePage: HTMLDivElement | null = document.querySelector('#game-page');
const lastPage: HTMLDivElement | null = document.querySelector('#last-page');
const question: HTMLSpanElement | null = document.querySelector('#question');
const nextQuestionBtn: HTMLButtonElement | null = document.querySelector('#next-question-btn');
const alternative0Btn: HTMLButtonElement | null = document.querySelector('#alternative0-btn');
const alternative1Btn: HTMLButtonElement | null = document.querySelector('#alternative1-btn');
const alternative2Btn: HTMLButtonElement | null = document.querySelector('#alternative2-btn');
// const tryAgainBtn: HTMLButtonElement | null = document.querySelector('#try-again-btn');

// Variables for timer
let startTime: number;
let timerInterval: number;






/**
 *
 *
 *
 * Generate random numbers
 *
 *
 *
 */
// Function generating unique numbers.
function generateUniqueRandomNumbers(count: number, range: number): number[] {
  /* if (count > range) {
      throw new Error("Count should not exceed the range for unique numbers");
  } */

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
const randomNumbersArray = generateUniqueRandomNumbers(10, 40);
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
  const questionNumberElement: HTMLDivElement | null = document.querySelector('#questionNumber');
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
// Function to start timer
function startTimer(): void {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

// Function to stop timer
function stopTimer(): void {
  clearInterval(timerInterval);
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
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}

// Function to update the timer display
function updateTimer(): void {
  const currentTime = Date.now();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000); // in seconds

  const timerElement: HTMLSpanElement | null = document.querySelector('#timer');
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


// Function controlling clicks on alternative buttons. 
function handleButtonClick(clickedButton: HTMLButtonElement): void {
  if (!allowClicks) {
    return; // Clicks are disabled
  }

  if (chosenAlternative !== null) {
    return; // Only allow one click per question
  }

  chosenAlternative = clickedButton;

  const correctAnswerIndex = musicQuiz[randomNumbersArray[questionIndex]].correctAnswerIndex;

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


// Function that disables alternative buttons after selecting an answer.
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

// Function displaying the next question.
function showNextQuestion(): void {

  // Increment the questionIndex before updating the display
  questionIndex += 1;

  // Check if there are more questions to display.
  if (questionIndex < randomNumbersArray.length) {
    // Update the question number display
    const questionNumberElement: HTMLDivElement | null = document.querySelector('#questionNumber');
    if (questionNumberElement !== null) {
      questionNumberElement.innerText = `${questionIndex + 1}/${randomNumbersArray.length}`;
    }

    // Reset all alternative buttons to default state on the next question.
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

    // Reset chosenAlternative
    chosenAlternative = null;

    // Enable clicks for the next question
    allowClicks = true;

  
    // Display the next question.
    if (question !== null) {
      question.innerText = `${musicQuiz[randomNumbersArray[questionIndex]].question}`;
    } 
  
    // Print alternatives for buttons to the page.
    if (alternative0Btn !== null) {
      alternative0Btn.innerHTML = `${musicQuiz[randomNumbersArray[questionIndex]].options[0]}`;
    }
    if (alternative1Btn !== null) {
      alternative1Btn.innerHTML = `${musicQuiz[randomNumbersArray[questionIndex]].options[1]}`;
    }
    if (alternative2Btn !== null) {
      alternative2Btn.innerHTML = `${musicQuiz[randomNumbersArray[questionIndex]].options[2]}`;
    }
  } else {
    // Handle the case when there are no more questions (quiz is finished).
    // (redirect to results page)
    console.log('Quiz finished!');
    
    if (nextQuestionBtn !== null) {
      nextQuestionBtn.innerHTML = 'Finish';
    }
    
    if (question !== null) {
      question.innerText = 'You have answered all questions! Click Finish to see your result!';
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
      nextQuestionBtn.addEventListener('click', () => {
        // Stop the timer on the 10th question
        stopTimer();  

        if (lastPage !== null) {
          lastPage.classList.remove('hidden');
        }
        if (gamePage !== null) {
          gamePage.classList.add('hidden');
        }
      });
    }
  } 
}


// Function controlling the selected answer. 
function compareAnswer(): void {
  if (chosenAlternative === null || !allowClicks) {
    return; // no alternative selected or already processed
  }

  // Disable further clicks
  allowClicks = false;

  const correctAnswerIndex = musicQuiz[randomNumbersArray[questionIndex]].correctAnswerIndex;

  // Add 'correct' or 'wrong' class based on the correctness
  if (chosenAlternative.id === `alternative${correctAnswerIndex}-btn`) {
    chosenAlternative.classList.add('correct');
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




