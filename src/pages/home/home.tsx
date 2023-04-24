import "./home.css";
import { useFormik } from "formik";
import React, { useState } from "react";

const Home = () => {
  //#1 Generate a word to guess
  const word: string[] = ["M", "O", "N", "E", "Y"];

  //#2 update variable wordToGuess, state.
  const [wordToGuess, setWordToGuess] = useState([]);

  //#3 create the blank spaces for the amount of letters in the word.
  const [hiddenLetter, setHiddenLetter] = useState();
  const guessWord = () => {
    return word.map((letter: string, index) => {
      return (
        <div className="letter" id={String(index)} key={index}>
          <p className="guessedLetter">{letter}</p>
        </div>
      );
    });
  };

  //#4 create the function to figure out if the guessed letter is correct or not.
  const isLetterCorrect = () => {};

  //#5 Update state when a correct letter is guessed
  const [correctGuess, setCorrectGuess] = useState([]);

  //#6 Update state when the letter is incorrect
  const [incorrectGuess, setIncorrectGuess] = useState([]);

  //#7 Show the letter that was guessed on the users screen in the right spot.

  const formik = useFormik({
    initialValues: {
      guess: "",
    },
    onSubmit: (values) => {
      console.log(values);
      UpdateGuesses(values);
    },
  });

  const UpdateGuesses = async (guesses: { guess: string }) => {
    const guess = guesses.guess;

    const filter = word.filter((letter) =>
      letter.toUpperCase().includes(guess.toUpperCase())
    );

    if (filter.length !== 0) {
    }
  };

  return (
    <div>
      <h1 id="title">Hangman</h1>
      <div id="container">
        <div id="heroContainer">
          <div id="hangmanVisual">
            <div id="verticalPost"></div>
            <div id="horizontalPost"></div>
            <div id="supportPost"></div>
            <div id="rope"></div>
            <div id="head" className="body"></div>
            <div id="torso" className="body"></div>
            <div id="leftArm" className="body"></div>
            <div id="rightArm" className="body"></div>
            <div id="leftLeg" className="body"></div>
            <div id="rightLeg" className="body"></div>
            <div id="postBase"></div>
          </div>
          <form onSubmit={formik.handleSubmit} id="guessForm">
            <label htmlFor="guess">Enter your guess</label>
            <input
              type="text"
              id="guess"
              name="guess"
              onChange={formik.handleChange}
              value={formik.values.guess}
              onBlur={formik.handleBlur}
            />
          </form>
        </div>
        <div id="wordContainer">
          <div id="word">{guessWord()}</div>
          <div id="incorrectLettersCat">
            <h2>Incorrect Guesses</h2>
            <div id="incorrectGuesses">
              <div className="incorrectGuessedLetter">
                <p>L</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
