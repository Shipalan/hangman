import React, { useContext } from "react";
import { HangmanContext } from "../pages/home/home";

const HangmanVisual = () => {
  const { hangman } = useContext(HangmanContext);
  return (
    <div id="hangmanVisual">
      <div id="verticalPost"></div>
      <div id="horizontalPost"></div>
      <div id="supportPost"></div>
      <div id="rope"></div>
      {hangman}
      <div id="postBase"></div>
    </div>
  );
};
export default HangmanVisual;
