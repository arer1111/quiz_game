// Define the Question interface for type safety
export interface Question {
  question: string;
  options: string[];
  answer: number; // Index of the correct answer (0-based)
  image: string; // Optional image URL for the question
}

// Quiz questions array
export const questions: Question[] = [
  {
    question: "Which gas planet is the largest planet in the Solar System?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 0, // Jupiter
    image: "assests/question1.jpg",
  },
  {
    question: "In what year were the first Winter Olympics Games held?",
    options: ["1954", "1890", "1924", "1974"],
    answer: 2, // 1924
    image: "assests/question2.jpg",
  },
  {
    question: "Where were French fries invented?",
    options: ["France", "Belgium", "The US", "Canada"],
    answer: 1, // Belgium
    image: "assests/question3.jpg",
  },
  {
    question: "How many bones does an adult human have?",
    options: ["200", "206", "216", "215"],
    answer: 1, // 206
    image: "assests/question4.jpg",
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
    image: "assests/question5.jpg",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: 2, // Canberra
    image: "assests/question6.jpg",
  },
];
