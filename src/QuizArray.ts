// Creating an array for the questions and their right/wrong answers

const quiz = [
    {
      question: "Who composed the music for 'Jurassic Park'?",
      options: ["Hans Zimmer", "John Williams", "Alan Silvestri"],
      answer: 1
      wronganswer1: 0
      wronganswer1: 2
    },
    {
      question: "Who is the composer behind the music in the film 'The Lord of the Rings'?",
      options: ["Howard Shore", "Ennio Morricone", "James Horner"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    {
      question: "Who sings the song 'My Heart Will Go On' from the film 'Titanic'?",
      options: ["Celine Dion", "Adele", "Whitney Houston"],
      answer: 0
      wronganswer: 1
      wronganswer: 2
    },
    {
      question: "Which film features the song 'Eye of the Tiger'?",
      options: ["Rocky III", "Top Gun", "Dirty Dancing"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    {
      question: "What instrument does Marty McFly play in the film 'Back to the Future'?",
      options: ["Guitar", "Piano", "Drums"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    {
      question: "Who is the composer behind the music in the film 'The Dark Knight'?",
      options: ["Hans Zimmer", "John Williams", "James Newton Howard"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    {
      question: "Which song is played at the beginning of the film 'The Lion King'?",
      options: ["Circle of Life", "Can You Feel the Love Tonight", "Hakuna Matata"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    {
      question: "Which artist sings the song 'Skyfall,' the theme song for the James Bond film of the same name?",
      options: ["Adele", "Madonna", "Lady Gaga"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    {
      question: "Who composed the music for 'Pirates of the Caribbean'?",
      options: ["John Williams", "Hans Zimmer", "Alan Silvestri"],
      answer: 1
      wronganswer1: 0
      wronganswer2: 2
    },
    {
      question: "In what year was the film 'Grease' released, featuring songs like 'Summer Nights' and 'You're the One That I Want'?",
      options: ["1976", "1978", "1980"],
      answer: 1
      wronganswer1: 0
      wronganswer2: 2
    },
    {
      question: "Which film includes the song 'Ghostbusters'?",
      options: ["Ghost", "Ghostbusters", "Ghost Rider"],
      answer: 1
      wronganswer1: 0
      wronganswer2: 2
    },
    {
      question: "Who is the composer behind the music in the film 'Inception'?",
      options: ["Alan Silvestri", "Hans Zimmer", "James Newton Howard"],
      answer: 1
      wronganswer1: 0
      wronganswer2: 2
    },
    {
      question: "Which film features the song 'I Will Always Love You'?",
      options: ["Pretty Woman", "The Bodyguard", "Dirty Dancing"],
      answer: 1
      wronganswer1: 0
      wronganswer2: 2
    },
    {
      question: "In what year was the film 'The Sound of Music' released?",
      options: ["1955", "1965", "1975"],
      answer: 1
      wronganswer1: 0
      wronganswer2: 2
    },
    {
      question: "Which film includes the song 'Footloose'?",
      options: ["Footloose", "Dirty Dancing", "Flashdance"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    {
      question: "Who is the composer behind the music in the film 'Schindler's List'?",
      options: ["Hans Zimmer", "James Horner", "John Williams"],
      answer: 2
      wronganswer1: 0
      wronganswer2: 1
    },
    {
      question: "In what year was the film 'The Wizard of Oz' released?",
      options: ["1939", "1949", "1959"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    {
      question: "Which film includes the song 'I Want to Hold Your Hand'?",
      options: ["A Hard Day's Night", "Help!", "Yellow Submarine"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    {
      question: "Who is the composer behind the music in the film 'The Godfather'?",
      options: ["Ennio Morricone", "John Williams", "Nino Rota"],
      answer: 2
      wronganswer1: 0
      wronganswer2: 1
    },
    {
      question: "Which film includes the song 'Unchained Melody'?",
      options: ["Ghost", "The Notebook", "Titanic"],
      answer: 0
      wronganswer1: 1
      wronganswer2: 2
    },
    
  ];