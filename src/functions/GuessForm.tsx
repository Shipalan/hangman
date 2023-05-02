import { useFormik } from "formik";
import UpdateGuesses from "./UpdateGuesses";
import {
  correctGuess,
  incorrectGuesses,
  setCorrectGuesses,
  setIncorrectGuesses,
  wordToGuess,
} from "../pages/home/home";

const GuessForm = (
  incorrectGuesses: incorrectGuesses,
  wordToGuess: wordToGuess,
  correctGuess: correctGuess,
  setCorrectGuess: setCorrectGuesses,
  setIncorrectguess: setIncorrectGuesses
) => {
  const formik = useFormik({
    initialValues: { guess: "" },
    onSubmit: (values, { resetForm }) => {
      UpdateGuesses(
        values,
        incorrectGuesses,
        wordToGuess,
        correctGuess,
        setCorrectGuess,
        setIncorrectguess
      );
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} id="guessForm">
      <label id="guess" htmlFor="guess">
        Enter your guess
      </label>
      <input
        id="guess"
        name="guess"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.guess}
        onKeyDown={(e) => {
          if (new RegExp(/[a-zA-Z]/).test(e.key)) {
          } else e.preventDefault();
        }}
        maxLength={1}
      ></input>
      <button type="submit" id="submitBtn">
        Submit
      </button>
    </form>
  );
};

export default GuessForm;
