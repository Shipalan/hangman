import { useContext } from "react";
import { HangmanContext } from "../pages/home/home";

const UpdateHangmanVisual = () => {
  const { incorrectGuesses, hangman, setHangman } = useContext(HangmanContext);

  incorrectGuesses.forEach((letter, index) => {
    console.log(index, letter);
    switch (index) {
      case 0:
        setHangman([<div id="head"></div>]);

        break;
      case 1:
        setHangman([...hangman, <div id="torso"></div>]);
        break;
      case 2:
        setHangman([...hangman, <div id="leftArm"></div>]);
        break;
      case 3:
        setHangman([...hangman, <div id="rightArm"></div>]);
        break;
      case 4:
        setHangman([...hangman, <div id="leftLeg"></div>]);
        break;
      case 5:
        setHangman([...hangman, <div id="rightLeg"></div>]);
        break;
      default:
        break;
    }
  });
};

export default UpdateHangmanVisual;
