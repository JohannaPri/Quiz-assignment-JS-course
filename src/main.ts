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

// Importerar css.
import './scss/style.scss';
// Importerar array med quiz-frågor.
import { musicQuiz } from './questions.ts';

/* // Importerar funktioner.
import { generateUniqueRandomNumbers } from './helpers.ts'; 
import { showGamePage } from './helpers.ts';  */

// Skapar variabler för html-elementen.
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

// Funktion som genererar unika random siffror.
function generateUniqueRandomNumbers(count: number, range: number): number[] {
  /* if (count > range) {
      throw new Error("Count should not exceed the range for unique numbers");
  } */

  const randomNumbers: number[] = [];

  while (randomNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * range);

    // Kollar så att siffran inte redan finns i arrayen.
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
}

// Skapar en array-variabel med 10 random siffror mellan 0-39.
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

// Funktion som visar game-page (tar bort class=hidden) när användaren klickar på start-quiz knappen.
// Visar även första frågan.
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



let chosenAlternative: HTMLButtonElement;

function handleButtonClick(clickedButton: HTMLButtonElement): void {
/*   alternative0Btn.style.backgroundColor = 'white';
  alternative1Btn.style.backgroundColor = 'white';
  alternative2Btn.style.backgroundColor = 'white';

  clickedButton.style.backgroundColor = 'gray';  */
  
  chosenAlternative = clickedButton;
  
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
let questionIndex: number = 0; // 1 eftersom vi redan använde fråga 0 när användaren klickar på start quiz.

// Användaren klickar på ett svarsalternativ
// Registrera vilken knapp som klickades på. 0, 1 eller 2.
// Jämför valt alternativ med musicQuiz[randomNumbersArray[questionIndex]].correctAnswerIndex

// Function that compare the user's chosen alternative to the correct alternative. 
// Till next-knappen
/* function compareAnswer(e: any): void {
  let index = e.target.id.replace("alternative", "");
  index = Number(index.replace("-btn", ""));

  console.log(chosenAlternative);

  if (index === musicQuiz[randomNumbersArray[questionIndex]].correctAnswerIndex) {
    console.log("grattis");

    e.target.classList.add("correct");
    console.log(e.target);
    return;
    } else {
    e.target.classList.add("wrong");
    return;
    } 
} */






/**
 *
 *
 *
 * Show next question
 *
 *
 *
 */

/* // Function to handle button click and display the next question.
function showNextQuestion(): void {

  // Reset all alternative buttons to white.
  if (alternative0Btn !== null) {
    alternative0Btn.style.backgroundColor = 'white';
  }
  if (alternative1Btn !== null) {
    alternative1Btn.style.backgroundColor = 'white';
  }
  if (alternative2Btn !== null) {
    alternative2Btn.style.backgroundColor = 'white';
  } 
  
  console.log(chosenAlternative);

  // Check if there are more questions to display.
  if (questionIndex < randomNumbersArray.length) {
    // Display the next question.
    if (question !== null) {
      question.innerText = `${
        musicQuiz[randomNumbersArray[questionIndex]].question
      }`;
    }

    // Print alternatives for buttons to page.
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

    // Move to the next question for the next button click.
    questionIndex = questionIndex += 1 ;
  }
}

if (nextQuestionBtn !== null) {
  nextQuestionBtn.addEventListener('click', showNextQuestion);
}  */ 
 




/* // Function that compare the user's chosen alternative to the correct alternative. 
// Till next-knappen
function compareAnswer(): void {
  let index = chosenAlternative.id.replace('alternative', '');
  index = index.replace('-btn', '');
  
  console.log(index);
  console.log(chosenAlternative);
  console.log(chosenAlternative.id);

  if (index === String(musicQuiz[randomNumbersArray[questionIndex]].correctAnswerIndex)) {
    console.log('grattis');

    chosenAlternative.classList.add('correct');
    console.log(chosenAlternative);
    
  } else {
    chosenAlternative.classList.add('wrong');
    
  } 
  
} */






function showNextQuestion(): void {
  // Reset all alternative buttons to white.
  console.log('hej showNextQuestion');

  console.log(chosenAlternative);

  // Check if there are more questions to display.
  if (questionIndex < randomNumbersArray.length) {
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

    if (alternative0Btn !== null) {
      alternative0Btn.style.backgroundColor = 'white';
    }
    if (alternative1Btn !== null) {
      alternative1Btn.style.backgroundColor = 'white';
    }
    if (alternative2Btn !== null) {
      alternative2Btn.style.backgroundColor = 'white';
    }  

    // Move to the next question for the next button click.
    questionIndex = questionIndex += 1 ;
  } 
}


function compareAnswer(): void {
  let index = chosenAlternative.id.replace('alternative', '');
  index = index.replace('-btn', '');
  
  console.log(index);
  console.log(chosenAlternative);
  console.log(chosenAlternative.id);

  if (index === String(musicQuiz[randomNumbersArray[questionIndex]].correctAnswerIndex)) {
    console.log('grattis');

    chosenAlternative.classList.add('correct');
    console.log(chosenAlternative);
  } else {
    chosenAlternative.classList.add('wrong');
  } 

  // Introduce a delay of, for example, 1000 milliseconds (1 second)
  setTimeout(() => {
  // After the delay, show the next question
    showNextQuestion();
  }, 2000); 
}


if (nextQuestionBtn !== null) {
  nextQuestionBtn.addEventListener('click', compareAnswer);
}





