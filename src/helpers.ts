/* /**
 * Sorts an object array by a given property.
 * Example: [ { name: 'H' }, { name: 'A' } ]
 * @param array - The object array to pass in
 * @param property - The object key to sort by
 */
/*
export function sortArrayByText(array: any[], property: string): string[] {
  return array.sort((a, b) => {
    const textA = a[property];
    const textB = b[property];
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
}*/

 







/**
 * Citronernas kod nedan
 * 
 * 
 * 
 * 
 * 
 * 
 */


import {musicQuiz} from './Quiz-array.ts';

// Funktion som genererar unika random siffror. 
export function generateUniqueRandomNumbers(count: number, range: number): number[] {
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

// Skapar variabler för html-elementen.
const startBtn: HTMLButtonElement | null = document.querySelector('#start-quiz-btn');
const gamePage: HTMLDivElement | null = document.querySelector("#game-page");
let question: HTMLSpanElement | null = document.querySelector("#question");
const nextQuestionBtn: HTMLButtonElement | null = document.querySelector('#next-question-btn');
let alternative1Btn: HTMLButtonElement | null = document.querySelector('#alternative1-btn');
let alternative2Btn: HTMLButtonElement | null = document.querySelector('#alternative2-btn');
let alternative3Btn: HTMLButtonElement | null = document.querySelector('#alternative3-btn');


// Funktion som visar game-page (tar bort class=hidden) när användaren klickar på start-quiz knappen.
// Visar även första frågan.
export function showGamePage(): void {
  if (gamePage !== null){
    gamePage.classList.remove("hidden");
  } 
  // Print question to page.
  if (question !== null){
    question.innerHTML = `${musicQuiz[randomNumbersArray[0]].question}`;
  } 

  // Print alternatives for buttons to page.
  if (alternative1Btn  !== null){
    alternative1Btn.innerHTML = `${musicQuiz[randomNumbersArray[0]].options[0]}`;
  } 
  if (alternative2Btn !== null){
    alternative2Btn.innerHTML = `${musicQuiz[randomNumbersArray[0]].options[1]}`;
  }
  if (alternative3Btn !== null){
    alternative3Btn.innerHTML = `${musicQuiz[randomNumbersArray[0]].options[2]}`;
  } 
}

