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
const question: HTMLSpanElement | null = document.querySelector('#question');
const nextQuestionBtn: HTMLButtonElement | null = document.querySelector('#next-question-btn');
const alternative0Btn: HTMLButtonElement | null = document.querySelector('#alternative0-btn');
const alternative1Btn: HTMLButtonElement | null = document.querySelector('#alternative1-btn');
const alternative2Btn: HTMLButtonElement | null = document.querySelector('#alternative2-btn');






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
}

if (startBtn !== null) {
  startBtn.addEventListener('click', showGamePage);
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

  // Check if there are more questions to display.
  if (questionIndex < randomNumbersArray.length - 1) {
    // Display the next question.
    if (question !== null) {
      question.innerText = `${musicQuiz[randomNumbersArray[questionIndex + 1]].question}`;
    }

    // Print alternatives for buttons to the page.
    if (alternative0Btn !== null) {
      alternative0Btn.innerHTML = `${musicQuiz[randomNumbersArray[questionIndex + 1]].options[0]}`;
    }
    if (alternative1Btn !== null) {
      alternative1Btn.innerHTML = `${musicQuiz[randomNumbersArray[questionIndex + 1]].options[1]}`;
    }
    if (alternative2Btn !== null) {
      alternative2Btn.innerHTML = `${musicQuiz[randomNumbersArray[questionIndex + 1]].options[2]}`;
    }

    // Move to the next question for the next button click.
    questionIndex += 1;
  } else {
    // Handle the case when there are no more questions (quiz is finished).
    // (redirect to results page)
    console.log('Quiz finished!');
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

  // Show the next question
  showNextQuestion();
}


if (nextQuestionBtn !== null) {
  nextQuestionBtn.addEventListener('click', compareAnswer);
}





