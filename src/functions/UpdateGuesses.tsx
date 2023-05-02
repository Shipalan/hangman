import {
  correctGuess,
  incorrectGuesses,
  setCorrectGuesses,
  setIncorrectGuesses,
  wordToGuess,
} from "../pages/home/home";

const UpdateGuesses = async (
  guesses: { guess: string },
  incorrectGuesses: incorrectGuesses,
  wordToGuess: wordToGuess,
  correctGuess: correctGuess,
  setCorrectGuess: setCorrectGuesses,
  setIncorrectGuess: setIncorrectGuesses
) => {
  const guess = guesses.guess.toUpperCase();

  if (wordToGuess.includes(guess)) {
    setCorrectGuess([...correctGuess, guess]);
  }

  if (incorrectGuesses.length === 6) {
    alert("Game Over! Generate new word!");
  }
  if (!wordToGuess.includes(guess)) {
    setIncorrectGuess([...incorrectGuesses, guess]);
  }
};
export default UpdateGuesses;
