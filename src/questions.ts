//  Create a interface for questions and answer options

interface IQuizQuestion  {
    question: string;
    options: string[];
    correctAnswerIndex: number;
}

//  An Array with the musicquiz-questions

export const musicQuiz: IQuizQuestion[] = [
  
  {
    question: 'Who composed the music for "Jurassic Park"?',
    options: ['Hans Zimmer', 'John Williams', 'Alan Silvestri'],
    correctAnswerIndex: 1, // Index for correct answer (John Williams)
  },
  {
    question: 'Who is the composer behind the music in the film "The Lord of the Rings"?',
    options: ['Howard Shore', 'Ennio Morricone', 'James Horner'],
    correctAnswerIndex: 0, // Howard Shore
  },
  {
    question: 'Who sings the song "My Heart Will Go On" from the film "Titanic"?',
    options: ['Celine Dion', 'Adele', 'Whitney Houston'],
    correctAnswerIndex: 0, // Celine Dion
  },
  {
    question: 'Which film features the song "Eye of the Tiger"?',
    options: ['Rocky III', 'Top Gun', 'Dirty Dancing'],
    correctAnswerIndex: 0, // Rocky III
  },
  {
    question: 'What instrument does Marty McFly play in the film "Back to the Future"?',
    options: ['Guitar', 'Piano', 'Drums'],
    correctAnswerIndex: 0, // Guitar
  },
  {
    question: 'Who is the composer behind the music in the film "The Dark Knight"?',
    options: ['Hans Zimmer', 'John Williams', 'James Newton Howard'],
    correctAnswerIndex: 0, // Hans Zimmer
  },
  {
    question: 'Which song is played at the beginning of the film "The Lion King"?',
    options: ['Circle of Life', 'Can You Feel the Love Tonight', 'Hakuna Matata'],
    correctAnswerIndex: 0, // Circle of Life
  },
  {
    question: 'Which artist sings the song "Skyfall" the theme song for the James Bond film of the same name?',
    options: ['Adele', 'Madonna', 'Lady Gaga'],
    correctAnswerIndex: 0, // Adele
  },
  {
    question: 'Who composed the music for "Pirates of the Caribbean"?',
    options: ['John Williams', 'Hans Zimmer', 'Alan Silvestri'],
    correctAnswerIndex: 1, // Hans Zimmer
  },
  {
    question: 'In what year was the film Grease released featuring songs like "Youre the One That I Want"?',
    options: ['1976', '1978', '1980'],
    correctAnswerIndex: 1, // 1978
  },
  {
    question: 'Which film includes the song "Ghostbusters"?',
    options: ['Ghost', 'Ghostbusters', 'Ghost Rider'],
    correctAnswerIndex: 1, // Ghostbusters
  },
  {
    question: 'Who is the composer behind the music in the film "Inception"?',
    options: ['Alan Silvestri', 'Hans Zimmer', 'James Newton Howard'],
    correctAnswerIndex: 1, // Hans Zimmer
  },
  {
    question: 'Which film features the song "I Will Always Love You"?',
    options: ['Pretty Woman', 'The Bodyguard', 'Dirty Dancing'],
    correctAnswerIndex: 1, // The Bodyguard
  },
  {
    question: 'In what year was the film "The Sound of Music" released?',
    options: ['1955', '1965', '1975'],
    correctAnswerIndex: 1, // 1965
  },
  {
    question: 'Which film includes the song "Footloose"?',
    options: ['Footloose', 'Dirty Dancing', 'Flashdance'],
    correctAnswerIndex: 0, // Footloose
  },
  {
    question: 'Who is the composer behind the music in the film "Schindlers List"?',
    options: ['Hans Zimmer', 'James Horner', 'John Williams'],
    correctAnswerIndex: 2, // John Williams
  },
  {
    question: 'In what year was the film "The Wizard of Oz" released?',
    options: ['1939', '1949', '1959'],
    correctAnswerIndex: 0, // 1939
  },
  {
    question: 'Which film includes the song "I Want to Hold Your Hand"?',
    options: ['A Hard Days Night', 'Help!', 'Yellow Submarine'],
    correctAnswerIndex: 0, // A Hard Day's Night
  },
  {
    question: 'Who is the composer behind the music in the film "The Godfather"?',
    options: ['Ennio Morricone', 'John Williams', 'Nino Rota'],
    correctAnswerIndex: 2, // Nino Rota
  },
  {
    question: 'Which film includes the song "Unchained Melody"?',
    options: ['Ghost', 'The Notebook', 'Titanic'],
    correctAnswerIndex: 0, // Ghost
  },
  {
    question: 'Which Disney song does Simba sing in "The Lion King" as he grows up?',
    options: ['Hakuna Matata', 'Can You Feel the Love Tonight', 'Circle of Life'],
    correctAnswerIndex: 2, // Circle of Life
  },
  {
    question: 'In "Beauty and the Beast," Belle sings about her dream of adventure in which song?',
    options: ['Be Our Guest', 'Belle', 'Something There'],
    correctAnswerIndex: 1, // Belle
  },
  {
    question: 'Which Disney princess sings "Colors of the Wind"?',
    options: ['Ariel (The Little Mermaid)', 'Belle (Beauty and the Beast)', 'Pocahontas'],
    correctAnswerIndex: 2, // Pocahontas
  },
  {
    question: 'What is the name of the infamous song that Captain Hook and the pirates sing in "Peter Pan"?',
    options: ['Heigh-Ho, Heigh-Ho', 'Yo Ho (A Pirates Life for Me)','Hakuna Matata'],
    correctAnswerIndex: 1, // Yo Ho (A Pirate's Life for Me)
  },
  {
    question: 'Which Disney song does Elsa sing when she expresses her powers in "Frozen"?',
    options: ['Do You Want to Build a Snowman?', 'Let It Go', 'For the First Time in Forever'],
    correctAnswerIndex: 1, // Let It Go
  },
  {
    question: 'In "Aladdin," Aladdin and Jasmine sing a romantic duet. What is its name?',
    options: ['A Whole New World', 'Friend Like Me', 'Prince Ali'],
    correctAnswerIndex: 0, // A Whole New World
  },
  {
    question: 'Which song does Dory sing in "Finding Nemo" when leads Marlin and Nemo through the whale\'s belly?',
    options: ['Under the Sea', 'Just Keep Swimming', 'Part of Your World'],
    correctAnswerIndex: 1, // Just Keep Swimming
  },
  {
    question: 'Which Disney song does Mufasa sing to Simba as advice in "The Lion King"?',
    options: ['Circle of Life', 'Remember Me', 'Be Prepared'],
    correctAnswerIndex: 0, // Circle of Life
  },
  {
    question: 'Which song does Mulan sing that reflects her inner struggles and desires?',
    options: ['Honor to Us All', 'I will Make a Man Out of You', 'Reflection'],
    correctAnswerIndex: 2, // Reflection
  },
  {
    question: 'Which song does Sleeping Beauty sing when she dreams about her prince in "Sleeping Beauty"?',
    options: ['Once Upon a Dream', 'A Dream Is a Wish Your Heart Makes', 'Part of Your World'],
    correctAnswerIndex: 0, // Once Upon a Dream
  },
  {
    question: 'Which Disney song does Hercules sing as he trains to become a true hero?',
    options: ['Zero to Hero', 'I Wont Say (I am in Love)', 'Go the Distance'],
    correctAnswerIndex: 2, // Go the Distance
  },
  {
    question: 'In "Mulan," Mulan and the other soldiers sing a song before the war. What is the name of the song?',
    options: ['Reflection', 'I will Make a Man Out of You', 'Honor to Us All'],
    correctAnswerIndex: 1, // I'll Make a Man Out of You
  },
  {
    question: 'In "Beauty and the Beast," Gaston sings about himself and his feats in which song?',
    options: ['Gaston', 'Be Our Guest', 'Belle'],
    correctAnswerIndex: 0, // Gaston
  },
  {
    question: 'Which Disney song does Ariel sing when expressing her longing to be human in "The Little Mermaid"?',
    options: ['Part of Your World', 'Under the Sea', 'Kiss the Girl'],
    correctAnswerIndex: 0, // Part of Your World
  },
  {
    question: 'In "The Princess and the Frog," Dr. Facilier sings a dark song. What is the name of the song?',
    options: ['Almost There', 'Friends on the Other Side', 'Dig a Little Deeper'],
    correctAnswerIndex: 1, // Friends on the Other Side
  },
  {
    question: 'Which Disney song does Rafiki sing when introducing Simba as the new lion king?',
    options: ['Be Prepared', 'Circle of Life', 'Can You Feel the Love Tonight'],
    correctAnswerIndex: 1, // Circle of Life
  },
  {
    question: 'In "Moana," Moana sings a powerful song about knowing who she is. What is the name of the song?',
    options: ['How Far I will Go', 'We Know the Way', 'You are Welcome'],
    correctAnswerIndex: 0, // How Far I'll Go
  },
  {
    question: 'Which Disney song does Tantor, Tarzan\'s friend, sing when he is afraid to cross the vine bridge?',
    options: ['Two Worlds', 'Son of Man', 'Trashin the Camp'],
    correctAnswerIndex: 2, // Trashin' the Camp
  },
  {
    question: 'In "Tangled," Rapunzel sings about her desired adventure. What is the name of the song?',
    options: ['I See the Light', 'When Will My Life Begin?', 'Mother Knows Best'],
    correctAnswerIndex: 1, // When Will My Life Begin?
  },
  {
    question: 'Which Disney song does Scar sing in "The Lion King" as he plots his evil plan?',
    options: ['Be Prepared', 'I Just Cant Wait to Be King', 'Hakuna Matata'],
    correctAnswerIndex: 0, // Be Prepared
  },
];