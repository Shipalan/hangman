import "./home.css";
import { useFormik } from "formik";
import React, { useState, useEffect, ReactElement } from "react";
import { JsxElement } from "typescript";

const Home = () => {
  //#1 Generate a word to guess
  let word = "Money";
  let splitWord = word.toUpperCase().split("");

  //#2 update variable wordToGuess, state.
  let [wordToGuess, setWordToGuess] = useState(splitWord);

  let [correctGuess, setCorrectGuess] = useState<string[]>([]);
  let [incorrectGuesses, setIncorrectGuess] = useState<string[]>([]);

  let [hangman, setHangman] = useState<ReactElement[]>([]);

  const updateHangmanVisual = () => {
    incorrectGuesses.forEach((letter, index) => {
      console.log(index, letter);
      switch (index) {
        case 0:
          setHangman([<div id="head"></div>]);
          console.log(hangman);
          break;
        case 1:
          setHangman([...hangman, <div id="torso"></div>]);
          console.log(hangman);
          break;
        case 2:
          setHangman([...hangman, <div id="leftArm"></div>]);
          console.log(hangman);
          break;
        case 3:
          setHangman([...hangman, <div id="rightArm"></div>]);
          console.log(hangman);
          break;
        case 4:
          setHangman([...hangman, <div id="LeftLeg"></div>]);
          console.log(hangman);
          break;
        case 5:
          setHangman([...hangman, <div id="rightLeg"></div>]);
          console.log(hangman);
          break;
        default:
          console.log(index, "Default");
          break;
      }
    });
  };
  useEffect(() => {
    updateHangmanVisual();
  }, [incorrectGuesses]);

  const guessWord = () => {
    return splitWord.map((letter: string, index) => {
      if (correctGuess.includes(letter)) {
        return (
          <div className="letter" id={String(index)} key={index}>
            <p className="guessedLetter">{letter}</p>
          </div>
        );
      } else {
        return <div className="letter" id={String(index)} key={index}></div>;
      }
    });
  };

  const updateIncorrectGuesses = () => {
    return incorrectGuesses.map((letter: string, index) => {
      return (
        <div className="incorrectGuessedLetter" id={String(index)} key={index}>
          <p>{letter}</p>
        </div>
      );
    });
  };

  const formik = useFormik({
    initialValues: {
      guess: "",
    },
    onSubmit: (values) => {
      UpdateGuesses(values);
    },
  });

  const UpdateGuesses = async (guesses: { guess: string }) => {
    const guess = guesses.guess.toUpperCase();

    if (wordToGuess.includes(guess)) {
      setCorrectGuess([...correctGuess, guess]);
    } else {
      setIncorrectGuess([...incorrectGuesses, guess]);
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
            {hangman}
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
            <button type="submit" id="submitBtn">
              Submit
            </button>
          </form>
        </div>
        <div id="wordContainer">
          <div id="word">{guessWord()}</div>
          <div id="incorrectLettersCat">
            <h2>Incorrect Guesses</h2>
            <div id="incorrectGuesses">{updateIncorrectGuesses()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
