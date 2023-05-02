import {
  correctGuess,
  incorrectGuesses,
  setCorrectGuesses,
  setIncorrectGuesses,
  wordToGuess,
} from "../pages/home/home";
import GuessForm from "./GuessForm";

const renderFormInput = (
  incorrectGuesses: incorrectGuesses,
  wordToGuess: wordToGuess,
  correctGuess: correctGuess,
  setCorrectGuess: setCorrectGuesses,
  setIncorrectguess: setIncorrectGuesses
) => {
  if (incorrectGuesses.length < 6) {
    return GuessForm(
      incorrectGuesses,
      wordToGuess,
      correctGuess,
      setCorrectGuess,
      setIncorrectguess
    );
  } else {
    return (
      <div id="formPlaceHolder">
        <h2 id="gameOver">Game Over! You suck Bitch!</h2>
      </div>
    );
  }
};

export default renderFormInput;
