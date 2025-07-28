// Define the Question interface for type safety. An interface is a TypeScript feature that allows you to define the structure of an object. In this case it shows the structure of a quiz question.
// The export keyword makes the interface available for import in other files - in this case, the main.ts file.
// The quizData.ts file is separate to keep the quiz questions organized and distinct from the main logic. This makes it easier to update or add questions without changing the main script. It also improves code readability and maintainability by separating data from functionality.
export interface Question {
  question: string;
  options: string[];
  answer: number; // Index of the correct answer (0-based)
  image: string; // Optional image URL for the question
}

// Quiz questions array. This is an array of objects to hold the quiz questions. Each object in the array follows the structure defined by the Question interface.
export const questions: Question[] = [
  {
    question: "Which gas planet is the largest planet in the Solar System?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 0, // Jupiter
    image: "assests/image0-2.jpg",
  },
  {
    question: "In what year were the first Winter Olympics Games held?",
    options: ["1954", "1890", "1924", "1974"],
    answer: 2, // 1924
    image: "assests/image5.jpg",
  },
  {
    question: "Where were French fries invented?",
    options: ["France", "Belgium", "The US", "Canada"],
    answer: 1, // Belgium
    image: "assests/image1.jpeg",
  },
  {
    question: "How many bones does an adult human have?",
    options: ["200", "206", "216", "215"],
    answer: 1, // 206
    image: "assests/image2.jpeg",
  },
  {
    question: "What are the three main 'simple types' in TypeScript?",
    options: [
      "Boolean, Number, String",
      "Array, object, boolean",
      "Object, array, symbol",
      "Object, string, number",
    ],
    answer: 0, // Boolean, Number, String
    image: "assests/image3.png",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: 2, // Canberra
    image: "assests/image4.png",
  },
];
