const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Madrid", "Paris"],
      correctAnswerIndex: 3,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Mercury"],
      correctAnswerIndex: 0,
    },
      {
    question: "Which programming language is often used for web development and runs in browsers?",
    options: ["Java", "Python", "JavaScript", "C#"],
    correctAnswerIndex: 2
  },
  {
    question: "Which programming language is known for its simplicity and readability?",
    options: ["C", "Java", "Python", "C++"],
    correctAnswerIndex: 2
  },
  {
    question: "Which programming language is commonly used for developing Android applications?",
    options: ["Java", "C#", "Python", "JavaScript"],
    correctAnswerIndex: 0
  },
  {
    question: "Which programming language is often referred to as the 'mother of all programming languages'?",
    options: ["Python", "C", "Java", "Fortran"],
    correctAnswerIndex: 1
  },
  {
    question: "In JavaScript, which keyword is used to declare a variable?",
    options: ["var", "let", "const", "variable"],
    correctAnswerIndex: 1
  },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswerIndex: 1,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "What gas do plants use for photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswerIndex: 1
    },
    {
      question: "Which scientist developed the theory of evolution by natural selection?",
      options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Galileo Galilei"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "G", "Go"],
      correctAnswerIndex: 0
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Brain", "Heart", "Liver", "Skin"],
      correctAnswerIndex: 3
    },
    {
      question: "Which famous playwright wrote Romeo and Juliet?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      correctAnswerIndex: 0
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
      correctAnswerIndex: 1
    },  {
      question: "What is the chemical symbol for oxygen?",
      options: ["O", "Ox", "Oy", "Om"],
      correctAnswerIndex: 0
    },
    {
      question: "In which year did World War II end?",
      options: ["1942", "1944", "1945", "1946"],
      correctAnswerIndex: 2
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Saturn", "Jupiter", "Neptune"],
      correctAnswerIndex: 2
    },
    {
      question: "Who wrote the play 'Hamlet'?",
      options: ["William Shakespeare", "George Orwell", "J.K. Rowling", "Charles Dickens"],
      correctAnswerIndex: 0
    },
    {
      question: "What is the process by which plants make their own food?",
      options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
      correctAnswerIndex: 1
    },
    {
      question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      options: ["Mars", "Venus", "Mercury", "Jupiter"],
      correctAnswerIndex: 1
    },

    {
      question: "Who painted the 'Starry Night'?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      correctAnswerIndex: 0
    },
    {
      question: "Which gas do plants release during photosynthesis?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      correctAnswerIndex: 2
    },
    {
      question: "Which continent is known as the 'Land of the Rising Sun'?",
      options: ["Africa", "Asia", "Europe", "Australia"],
      correctAnswerIndex: 1
    },
    {
      question: "Who is the author of the 'Harry Potter' book series?",
      options: ["Stephen King", "J.R.R. Tolkien", "J.K. Rowling", "George Orwell"],
      correctAnswerIndex: 2
    },
    {
    question: "Which programming language was created by Guido van Rossum?",
    options: ["C++", "Java", "Python", "C#"],
    correctAnswerIndex: 2
  },
  {
    question: "What is the object-oriented programming language developed by Microsoft?",
    options: ["C#", "Java", "Python", "Ruby"],
    correctAnswerIndex: 0
  },
  {
    question: "Which programming language is known for its use in game development and graphics?",
    options: ["Python", "Java", "C++", "C#"],
    correctAnswerIndex: 2
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "High-Level Text Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
    correctAnswerIndex: 0
  },
  {
    question: "Which programming language uses a syntax similar to C but with additional features?",
    options: ["C#", "Java", "C++", "Python"],
    correctAnswerIndex: 2
  },
  {
    question: "Which programming language is often used for building dynamic web applications?",
    options: ["Java", "C#", "JavaScript", "Python"],
    correctAnswerIndex: 2
  },
    {
      question: "What is the national flower of Japan?",
      options: ["Cherry Blossom", "Rose", "Tulip", "Sunflower"],
      correctAnswerIndex: 0
    },
    {
      question: "What is the symbol for the chemical element 'Silver'?",
      options: ["Si", "Ag", "Au", "Sv"],
      correctAnswerIndex: 1
    },
    {
      question: "Which gas do humans breathe out during respiration?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correctAnswerIndex: 0
    },
    {
      question: "What is the longest river in the world?",
      options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
      correctAnswerIndex: 0
    },
    {
      question: "Who is known as the 'Father of Modern Physics'?",
      options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the capital city of Brazil?",
      options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
      correctAnswerIndex: 1
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
      correctAnswerIndex: 3
    },
     {
    question: "Which programming language is known for its portability and is commonly used for system programming?",
    options: ["C", "Java", "Python", "Ruby"],
    correctAnswerIndex: 0
  },
  {
    question: "In Python, how do you indicate the end of a block of code?",
    options: ["Curly braces", "Indentation", "Semicolons", "Parentheses"],
    correctAnswerIndex: 1
  },
  {
    question: "What is the extension for JavaScript files?",
    options: [".java", ".py", ".js", ".cpp"],
    correctAnswerIndex: 2
  },
  {
    question: "Which programming language is often used for scientific and numeric computing?",
    options: ["C#", "Java", "Python", "Ruby"],
    correctAnswerIndex: 2
  },
  {
    question: "In C++, what is an object?",
    options: ["A variable", "A function", "A class", "A loop"],
    correctAnswerIndex: 2
  },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswerIndex: 1
      },

      {
        question: "Who wrote the novel '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Ir", "In", "Io"],
        correctAnswerIndex: 0
      },
    {
    question: "Which programming language is known for its use in building enterprise-level applications?",
    options: ["Java", "C#", "Python", "Ruby"],
    correctAnswerIndex: 0
  },
  {
    question: "In JavaScript, which function is used to print output to the console?",
    options: ["print()", "console.log()", "display()", "output()"],
    correctAnswerIndex: 1
  },
  {
    question: "Which programming language uses a virtual machine to run its code?",
    options: ["C#", "Java", "Python", "C++"],
    correctAnswerIndex: 1
  },
  {
    question: "In Python, what is a 'list'?",
    options: ["A data type for storing numbers", "A collection of key-value pairs", "An ordered collection of items", "A type of loop"],
    correctAnswerIndex: 2
  },
  {
    question: "Which programming language is commonly used for building desktop applications?",
    options: ["Java", "C#", "Python", "Ruby"],
    correctAnswerIndex: 1
  },
      {
        question: "Which planet is known as the 'Evening Star' or 'Morning Star'?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the process by which plants release water vapor?",
        options: ["Photosynthesis", "Transpiration", "Respiration", "Condensation"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the national flower of India?",
        options: ["Lotus", "Rose", "Tulip", "Sunflower"],
        correctAnswerIndex: 0
      },
      {
        question: "Which artist is famous for painting the 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the process of converting sugar into energy in cells called?",
        options: ["Digestion", "Photosynthesis", "Respiration", "Transpiration"],
        correctAnswerIndex: 2
      },
      {
        question: "Which gas gives soda its fizz?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswerIndex: 2
      },
  
      {
        question: "What is the smallest planet in our solar system?",
        options: ["Mars", "Saturn", "Jupiter", "Mercury"],
        correctAnswerIndex: 3
      },
      {
        question: "Which famous scientist developed the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswerIndex: 1
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "Korea", "Vietnam"],
        correctAnswerIndex: 1
      },
     {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    correctAnswerIndex: 1
  },
  {
    question: "Which programming language is known for its use in web scraping and data analysis?",
    options: ["Java", "C#", "Python", "Ruby"],
    correctAnswerIndex: 2
  },
  {
    question: "In C#, which data type is used to represent text?",
    options: ["int", "double", "string", "boolean"],
    correctAnswerIndex: 2
  },
  {
    question: "Which programming language is often used for building cross-platform mobile applications?",
    options: ["Java", "C#", "Python", "Flutter"],
    correctAnswerIndex: 3
  },
  {
    question: "In Java, what is an 'interface'?",
    options: ["A function that performs a specific task", "A class with predefined methods", "A blueprint for creating objects", "A variable that stores data"],
    correctAnswerIndex: 2
  },
  {
    question: "Which programming language is known for its use in game development and virtual reality?",
    options: ["Java", "C#", "Python", "UnityScript"],
    correctAnswerIndex: 1
  },
  {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "System Quality Language", "Superior Query Language", "Simple Question Language"],
    correctAnswerIndex: 0
  },
  {
    question: "Which programming language is commonly used for building web servers and network applications?",
    options: ["Java", "C#", "Python", "Ruby"],
    correctAnswerIndex: 0
  },
  {
    question: "In C++, what is 'inheritance'?",
    options: ["A type of loop", "A feature for reusing code", "A way to define variables", "A method for printing output"],
    correctAnswerIndex: 1
  },
      {
        question: "What is the national animal of Australia?",
        options: ["Kangaroo", "Koala", "Platypus", "Emu"],
        correctAnswerIndex: 0
      },
      {
        question: "Which planet is often referred to as the 'Blue Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswerIndex: 0
      },
      {
        question: "Who is considered the founder of the modern Olympic Games?",
        options: ["Usain Bolt", "Michael Phelps", "Pierre de Coubertin", "Jesse Owens"],
        correctAnswerIndex: 2
      },
      {
        question: "What is the largest species of shark?",
        options: ["Hammerhead Shark", "Tiger Shark", "Great White Shark", "Whale Shark"],
        correctAnswerIndex: 3
      },
      {
        question: "Which famous scientist formulated the laws of motion and universal gravitation?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nicolaus Copernicus"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the primary function of the mitochondria in a cell?",
        options: ["Energy Production", "Cell Division", "Protein Synthesis", "Photosynthesis"],
        correctAnswerIndex: 0
      },
      {
        question: "Which gas is known as the 'silent killer'?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Carbon Monoxide"],
        correctAnswerIndex: 3
      },
      {
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "F. Scott Fitzgerald", "J.D. Salinger", "Mark Twain"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the chemical symbol for calcium?",
        options: ["Ca", "C", "Cl", "Ce"],
        correctAnswerIndex: 0
      },
      {
        question: "Which planet is known as the 'Giant of our Solar System'?",
        options: ["Mars", "Saturn", "Jupiter", "Neptune"],
        correctAnswerIndex: 2
      },
      {
        question: "Who is the author of the play 'The Crucible'?",
        options: ["Arthur Miller", "William Shakespeare", "Tennessee Williams", "George Bernard Shaw"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the world's tallest mountain?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "Mount Fuji"],
        correctAnswerIndex: 1
      },
      {
        question: "Which gas do plants primarily release during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswerIndex: 2
      },
      {
        question: "Who is the author of the book '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.R.R. Tolkien"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the chemical symbol for lead?",
        options: ["L", "P", "Pb", "Ld"],
        correctAnswerIndex: 2
      },
      {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the process by which plants release water vapor into the atmosphere?",
        options: ["Photosynthesis", "Transpiration", "Respiration", "Condensation"],
        correctAnswerIndex: 1
      },
      {
        question: "Who painted the 'Girl with a Pearl Earring'?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Johannes Vermeer", "Pablo Picasso"],
        correctAnswerIndex: 2
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Saturn", "Jupiter", "Neptune"],
        correctAnswerIndex: 2
      },
      {
        question: "What is the world's largest desert?",
        options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Antarctic Desert"],
        correctAnswerIndex: 1
      },
      {
        question: "Who wrote the novel 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "Agatha Christie"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the primary component of natural gas?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctAnswerIndex: 3
      },
      {
        question: "What is the largest moon in our solar system?",
        options: ["Io", "Titan", "Ganymede", "Phobos"],
        correctAnswerIndex: 2
      },
      {
        question: "Which famous scientist is known for formulating the laws of motion and universal gravitation?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the process of converting sugar into energy in cells called?",
        options: ["Photosynthesis", "Transpiration", "Respiration", "Digestion"],
        correctAnswerIndex: 2
      },
      {
        question: "Which gas is responsible for the distinctive smell of rotten eggs?",
        options: ["Oxygen", "Carbon Dioxide", "Sulfur Dioxide", "Hydrogen Sulfide"],
        correctAnswerIndex: 3
      },
      {
        question: "Who painted the famous artwork 'The Starry Night'?",
        options: ["Salvador Dalí", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Madrid", "Paris"],
        correctAnswerIndex: 3
      },
      {
        question: "Which gas is commonly used in balloons to make them float?",
        options: ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"],
        correctAnswerIndex: 2
      },
      {
        question: "What is the world's largest ocean?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswerIndex: 3
      },
      {
        question: "Which gas gives carbonated drinks their fizziness?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswerIndex: 1
      },
      {
        question: "Who authored the book 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "J.D. Salinger"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the chemical symbol for potassium?",
        options: ["P", "K", "Ks", "Pt"],
        correctAnswerIndex: 1
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Jupiter", "Venus", "Mercury"],
        correctAnswerIndex: 0
      },
      {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswerIndex: 1
      },
      {
        question: "Which gas do plants use for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the capital of South Korea?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        correctAnswerIndex: 0
      },
      {
        question: "Who is known as the 'Father of Modern Physics'?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Au", "Sv"],
        correctAnswerIndex: 1
      },
      {
        question: "Which famous scientist developed the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswerIndex: 1
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Heart", "Liver", "Skin"],
        correctAnswerIndex: 3
      },
      {
        question: "What is the national flower of Japan?",
        options: ["Cherry Blossom", "Rose", "Tulip", "Sunflower"],
        correctAnswerIndex: 0
      },
      {
        question: "What gas do humans exhale during respiration?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswerIndex: 0
      },
      {
        question: "Who is the author of the 'Harry Potter' book series?",
        options: ["Stephen King", "J.R.R. Tolkien", "J.K. Rowling", "George Orwell"],
        correctAnswerIndex: 2
      }
  ];

export default quizQuestions
