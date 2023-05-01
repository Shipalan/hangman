import { render } from "@testing-library/react";
import "./home.css";
import { useFormik } from "formik";
import { useState, useEffect, ReactElement } from "react";
const randomWords = require("random-words");

const Home = () => {
  //#1 Generate a word to guess
  // console.log(randomWords())
  // let word = String(randomWords());

  let [wordToGuess, setWordToGuess] = useState<string[]>([""]);

  let [correctGuess, setCorrectGuess] = useState<string[]>([]);
  let [incorrectGuesses, setIncorrectGuess] = useState<string[]>([]);

  let [hangman, setHangman] = useState<ReactElement[]>([]);

  const generateWord = () => {
    if (correctGuess.length && incorrectGuesses.length !== 0) {
      setCorrectGuess([]);
      setIncorrectGuess([]);
      setHangman([]);
    }

    let word = String(randomWords());
    let splitWord = word.toUpperCase().split("");

    setWordToGuess(splitWord);
  };

  //#2 update variable wordToGuess, state.

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
          setHangman([...hangman, <div id="leftLeg"></div>]);
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
    return wordToGuess.map((letter: string, index) => {
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

  useEffect(() => {
    guessWord();
  }, [wordToGuess]);

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
    }

    if (incorrectGuesses.length === 6) {
      alert("Game Over! Generate new word!");
    }
    if (!wordToGuess.includes(guess)) {
      setIncorrectGuess([...incorrectGuesses, guess]);
    }
  };

  const renderFormInput = () => {
    if (incorrectGuesses.length < 6) {
      return (
        <form onSubmit={formik.handleSubmit} id="guessForm">
          <label htmlFor="guess">Enter your guess</label>
          <input
            type="text"
            id="guess"
            name="guess"
            onChange={formik.handleChange}
            value={formik.values.guess}
            onBlur={formik.handleBlur}
            maxLength={1}
          />
          <button type="submit" id="submitBtn">
            Submit
          </button>
        </form>
      );
    } else {
      return (
        <div id="formPlaceHolder">
          <h2 id="gameOver">Game Over! You suck Bitch!</h2>
        </div>
      );
    }
  };

  useEffect(() => {
    if (correctGuess === wordToGuess) {
      alert("You have won you little bitch!");
    }
  }, [correctGuess]);

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
          {renderFormInput()}
        </div>
        <div id="wordContainer">
          <div id="word">{guessWord()}</div>
          <div id="incorrectLettersCat">
            <h2>Incorrect Guesses</h2>
            <div id="incorrectGuesses">{updateIncorrectGuesses()}</div>
          </div>
        </div>
        <button id="generateWord" onClick={(event) => generateWord()}>
          Generate Word
        </button>
      </div>
    </div>
  );
};
export default Home;
