const questions = [
  {
    question: "Quelle est la capitale de l'Espagne?",
    answers: [
      { text: "Madrid", correct: true },
      { text: "Lisbonne", correct: false },
      { text: "Rome", correct: false },
      { text: "Barcelone", correct: false }
    ]
  },
  {
    question: "Qui a écrit 'Romeo et Juliette'?",
    answers: [
      { text: "Jane Austen", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Homer", correct: false }
    ]
  },
  {
    question: "Quel est l'élément le plus abondant dans l'atmosphère terrestre?",
    answers: [
      { text: "Argon", correct: false },
      { text: "Azote", correct: true },
      { text: "Hydrogène", correct: false },
      { text: "Oxygène", correct: false }
    ]
  },
  {
    question: "Qui a découvert la gravité?",
    answers: [
      { text: "Nikola Tesla", correct: false },
      { text: "Galilée", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Albert Einstein", correct: false }
    ]
  },
  {
    question: "Quel est le plus grand océan du monde?",
    answers: [
      { text: "Océan Atlantique", correct: false },
      { text: "Océan Indien", correct: false },
      { text: "Océan Arctique", correct: false },
      { text: "Océan Pacifique", correct: true }
    ]
  },
  {
    question: "Quel est le plus grand désert du monde?",
    answers: [
      { text: "Le désert de Gobi", correct: false },
      { text: "Le désert d'Atacama", correct: false },
      { text: "Le désert du Kalahari", correct: false },
      { text: "Le Sahara", correct: true }
    ]
  },
  {
    question: "Quel est l'animal terrestre le plus rapide?",
    answers: [
      { text: "Le kangourou", correct: false },
      { text: "L'antilope", correct: false },
      { text: "Le lion", correct: false },
      { text: "Le guépard", correct: true }
    ]
  },
  {
    question: "Quel est le plus grand organe du corps humain?",
    answers: [
      { text: "Le coeur", correct: false },
      { text: "Le cerveau", correct: false },
      { text: "La peau", correct: true },
      { text: "Le foie", correct: false }
    ]
  },
  {
    question: "Quelle est la planète la plus proche du soleil?",
    answers: [
      { text: "Vénus", correct: false },
      { text: "Mercure", correct: true },
      { text: "Mars", correct: false },
      { text: "Terre", correct: false }
    ]
  },
  {
    question: "Qui a inventé l'ampoule électrique?",
    answers: [
      { text: "Nikola Tesla", correct: false },
      { text: "Alexander Graham Bell", correct: false },
      { text: "Thomas Edison", correct: true },
      { text: "Benjamin Franklin", correct: false }
    ]
  },
  {
    question: "Quel est le métal le plus abondant dans l'écorce terrestre?",
    answers: [
      { text: "Cuivre", correct: false },
      { text: "Or", correct: false },
      { text: "Fer", correct: false },
      { text: "Aluminium", correct: true }
    ]
  },
  {
    question: "Quel est l'ingrédient principal du gaz naturel?",
    answers: [
      { text: "Éthane", correct: false },
      { text: "Butane", correct: false },
      { text: "Méthane", correct: true },
      { text: "Propane", correct: false }
    ]
  },
  {
    question: "Quelle est la plus grande île du monde?",
    answers: [
      { text: "Madagascar", correct: false },
      { text: "Borneo", correct: false },
      { text: "Australie", correct: false },
      { text: "Groenland", correct: true }
    ]
  },
  {
    question: "Qui a écrit '1984'?",
    answers: [
      { text: "Ray Bradbury", correct: false },
      { text: "Aldous Huxley", correct: false },
      { text: "Jules Verne", correct: false },
      { text: "George Orwell", correct: true }
    ]
  },
  {
    question: "Quel est le plus grand lac d'eau douce du monde?",
    answers: [
      { text: "Le lac Baïkal", correct: false },
      { text: "Le lac Victoria", correct: false },
      { text: "Le lac Tanganyika", correct: false },
      { text: "Le lac Supérieur", correct: true }
    ]
  },
  {
    question: "Quel est le plus haut sommet du monde?",
    answers: [
      { text: "Le mont Kilimandjaro", correct: false },
      { text: "Le mont Fuji", correct: false },
      { text: "Le mont Denali", correct: false },
      { text: "Le mont Everest", correct: true }
    ]
  },
  {
    question: "Qui a composé 'La Traviata'?",
    answers: [
      { text: "Ludwig van Beethoven", correct: false },
      { text: "Johann Sebastian Bach", correct: false },
      { text: "Giuseppe Verdi", correct: true },
      { text: "Wolfgang Amadeus Mozart", correct: false }
    ]
  },
  {
    question: "Quel est le plus long fleuve du monde?",
    answers: [
      { text: "Le Nil", correct: false },
      { text: "Le Yangtsé", correct: false },
      { text: "Le Mississippi", correct: false },
      { text: "L'Amazone", correct: true }
    ]
  },
  {
    question: "Qui a écrit 'Le Petit Prince'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "J.K. Rowling", correct: false },
      { text: "Leo Tolstoï", correct: false },
      { text: "Antoine de Saint-Exupéry", correct: true }
    ]
  },
  {
    question: "Quel est le plus grand mammifère terrestre?",
    answers: [
      { text: "L'hippopotame", correct: false },
      { text: "Le rhinocéros", correct: false },
      { text: "L'ours polaire", correct: false },
      { text: "L'éléphant africain", correct: true }
    ]
  },
  {
    question: "Quelle est la monnaie du Japon?",
    answers: [
      { text: "Le won", correct: false },
      { text: "Le dollar", correct: false },
      { text: "Le euro", correct: false },
      { text: "Le yen", correct: true }
    ]
  }
];


// const questions = [
//   {
//     question: "What is the capital of France?",
//     answers: [
//       { text: "Paris", correct: true },
//       { text: "London", correct: false },
//       { text: "Berlin", correct: false },
//       { text: "Rome", correct: false }
//     ]
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     answers: [
//       { text: "Leonardo da Vinci", correct: true },
//       { text: "Pablo Picasso", correct: false },
//       { text: "Vincent van Gogh", correct: false },
//       { text: "Michelangelo", correct: false }
//     ]
//   },
//   {
//     question: "Quelle est la capitale de l'Espagne?",
//     answers: [
//       { text: "Madrid", correct: true },
//       { text: "Barcelone", correct: false },
//       { text: "Rome", correct: false },
//       { text: "Lisbonne", correct: false }
//     ]
//   },
//   {
//     question: "Qui a écrit 'Romeo et Juliette'?",
//     answers: [
//       { text: "William Shakespeare", correct: true },
//       { text: "Jane Austen", correct: false },
//       { text: "Charles Dickens", correct: false },
//       { text: "Homer", correct: false }
//     ]
//   },
//   {
//     question: "Quel est l'élément le plus abondant dans l'atmosphère terrestre?",
//     answers: [
//       { text: "Azote", correct: true },
//       { text: "Oxygène", correct: false },
//       { text: "Argon", correct: false },
//       { text: "Hydrogène", correct: false }
//     ]
//   },
//   {
//     question: "Qui a découvert la gravité?",
//     answers: [
//       { text: "Isaac Newton", correct: true },
//       { text: "Albert Einstein", correct: false },
//       { text: "Galilée", correct: false },
//       { text: "Nikola Tesla", correct: false }
//     ]
//   },
//   {
//     question: "Quel est le plus grand océan du monde?",
//     answers: [
//       { text: "Océan Pacifique", correct: true },
//       { text: "Océan Atlantique", correct: false },
//       { text: "Océan Indien", correct: false },
//       { text: "Océan Arctique", correct: false }
//     ]
//   },
//   {
//     question: "Quel est le plus grand désert du monde?",
//     answers: [
//       { text: "Le Sahara", correct: true },
//       { text: "Le désert de Gobi", correct: false },
//       { text: "Le désert du Kalahari", correct: false },
//       { text: "Le désert d'Atacama", correct: false }
//     ]
//   },
//   {
//     question: "Quel est l'animal terrestre le plus rapide?",
//     answers: [
//       { text: "Le guépard", correct: true },
//       { text: "Le lion", correct: false },
//       { text: "Le kangourou", correct: false },
//       { text: "L'antilope", correct: false }
//     ]
//   },
//   {
//     question: "Quel est le plus grand organe du corps humain?",
//     answers: [
//       { text: "La peau", correct: true },
//       { text: "Le foie", correct: false },
//       { text: "Le cerveau", correct: false },
//       { text: "Le coeur", correct: false }
//     ]
//   },
//   {
//     question: "Quelle est la planète la plus proche du soleil?",
//     answers: [
//       { text: "Mercure", correct: true },
//       { text: "Vénus", correct: false },
//       { text: "Terre", correct: false },
//       { text: "Mars", correct: false }
//     ]
//   },
//   {
//     question: "Qui a inventé l'ampoule électrique?",
//     answers: [
//       { text: "Thomas Edison", correct: true },
//       { text: "Nikola Tesla", correct: false },
//       { text: "Benjamin Franklin", correct: false },
//       { text: "Alexander Graham Bell", correct: false }
//     ]
//   },
//   {
//     question: "Quel est le métal le plus abondant dans l'écorce terrestre?",
//     answers: [
//       { text: "Aluminium", correct: true },
//       { text: "Fer", correct: false },
//       { text: "Cuivre", correct: false },
//       { text: "Or", correct: false }
//     ]
//   },
//   {
//     question: "Quel est l'ingrédient principal du gaz naturel?",
//     answers: [
//       { text: "Méthane", correct: true },
//       { text: "Éthane", correct: false },
//       { text: "Propane", correct: false },
//       { text: "Butane", correct: false }
//     ]
//   },
//   {
//     question: "Quelle est la plus grande île du monde?",
//     answers: [
//       { text: "Groenland", correct: true },
//       { text: "Australie", correct: false },
//       { text: "Borneo", correct: false },
//       { text: "Madagascar", correct: false }
//     ]
//   },
//   {
//     question: "Qui a écrit '1984'?",
//     answers: [
//       { text: "George Orwell", correct: true },
//       { text: "Aldous Huxley", correct: false },
//       { text: "Ray Bradbury", correct: false },
//       { text: "Jules Verne", correct: false }
//     ]
//   },
//   {
//     question: "Quel est le plus grand lac d'eau douce du monde?",
//     answers: [
//       { text: "Le lac Supérieur", correct: true },
//       { text: "Le lac Baïkal", correct: false },
//       { text: "Le lac Victoria", correct: false },
//       { text: "Le lac Tanganyika", correct: false }
//     ]
//   },
//   {
//     question: "Quel est le plus haut sommet du monde?",
//     answers: [
//       { text: "Le mont Everest", correct: true },
//       { text: "Le mont Kilimandjaro", correct: false },
//       { text: "Le mont Fuji", correct: false },
//       { text: "Le mont Denali", correct: false }
//     ]
//   },
//   {
//     question: "Qui a composé 'La Traviata'?",
//     answers: [
//       { text: "Giuseppe Verdi", correct: true },
//       { text: "Wolfgang Amadeus Mozart", correct: false },
//       { text: "Ludwig van Beethoven", correct: false },
//       { text: "Johann Sebastian Bach", correct: false }
//     ]
//   },
//   {
//     question: "Quel est le plus long fleuve du monde?",
//     answers: [
//       { text: "L'Amazone", correct: true },
//       { text: "Le Nil", correct: false },
//       { text: "Le Yangtsé", correct: false },
//       { text: "Le Mississippi", correct: false }
//     ]
//   },
//   {
//     question: "Qui a écrit 'Le Petit Prince'?",
//     answers: [
//       { text: "Antoine de Saint-Exupéry", correct: true },
//       { text: "J.K. Rowling", correct: false },
//       { text: "Charles Dickens", correct: false },
//       { text: "Leo Tolstoï", correct: false }
//     ]
//   },
//   {
//     question: "Quel est le plus grand mammifère terrestre?",
//     answers: [
//       { text: "L'éléphant africain", correct: true },
//       { text: "L'hippopotame", correct: false },
//       { text: "Le rhinocéros", correct: false },
//       { text: "L'ours polaire", correct: false }
//     ]
//   },
//   {
//     question: "Quelle est la monnaie du Japon?",
//     answers: [
//       { text: "Le yen", correct: true },
//       { text: "Le won", correct: false },
//       { text: "Le dollar", correct: false },
//       { text: "Le euro", correct: false }
//     ]
//   }
// ];

