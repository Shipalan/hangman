import "../../App.css";
import { useFormik } from "formik";
import { useState, useEffect, ReactElement } from "react";
import GuessForm from "../../functions/GuessForm";
import UpdateGuesses from "../../functions/UpdateGuesses";
import renderFormInput from "../../functions/RenderFormInput";
const randomWords = require("random-words");

export type wordToGuess = string[];
export type correctGuess = string[];
export type incorrectGuesses = string[];
export type setIncorrectGuesses = React.Dispatch<
  React.SetStateAction<string[]>
>;
export type setCorrectGuesses = React.Dispatch<React.SetStateAction<string[]>>;

const Home = () => {
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

  // const updateHangmanVisual = () => {
  //   incorrectGuesses.forEach((letter, index) => {
  //     console.log(index, letter);
  //     switch (index) {
  //       case 0:
  //         setHangman([<div id="head"></div>]);

  //         break;
  //       case 1:
  //         setHangman([...hangman, <div id="torso"></div>]);
  //         break;
  //       case 2:
  //         setHangman([...hangman, <div id="leftArm"></div>]);
  //         break;
  //       case 3:
  //         setHangman([...hangman, <div id="rightArm"></div>]);
  //         break;
  //       case 4:
  //         setHangman([...hangman, <div id="leftLeg"></div>]);
  //         break;
  //       case 5:
  //         setHangman([...hangman, <div id="rightLeg"></div>]);
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // };
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
          {renderFormInput(
            incorrectGuesses,
            wordToGuess,
            correctGuess,
            setCorrectGuess,
            setIncorrectGuess
          )}
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
