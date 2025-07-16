# Quiz Game

## Project Overview

This is a browser-based quiz game built with HTML, CSS, and TypeScript using Vite. Players answer multiple-choice questions, track their score, and see results at the end. The game is mobile-friendly and uses click events for interaction.

## Game Plan

### Description

- Players start on a welcome screen with a "Start Quiz" button.
- Each question displays a prompt, four answer options, and a progress indicator.
- Clicking an answer highlights it as correct or incorrect, updates the score, and shows a "Next" button.
- After all questions, a results screen shows the final score with a "Play Again" option.

### How It's Built

- **HTML**: Structured in `src/index.html` with containers for start screen, questions, and results.
- **CSS**: Styled in `src/styles.css` with a mobile-first approach, using a grid for answer buttons and media queries for responsiveness.
- **TypeScript**: Managed in `src/main.ts` and `src/quizData.ts`. Uses interfaces for questions, click event listeners, and DOM manipulation.
- **Vite**: Configured in `vite.config.ts` with `root: 'src'` for development and build.

### Feature List (Prioritized)

1. Start screen with "Start Quiz" button.
2. Question slides with multiple-choice options.
3. Score tracking and progress display.
4. Correct/incorrect answer feedback.
5. Results screen with "Play Again" button.
6. Mobile-first responsive design.

## Setup

- Clone the repo: `git clone <repo-url>`
- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Build for production: `npm run build`
- Preview: `npm run preview`

## Hosting

- Hosted on GitHub Pages (to be set up).
