import "./home.css";
import { useFormik } from "formik";

const Home = () => {
  const formik = useFormik({
    initialValues: {
      guess: "",
    },
    onSubmit: (values) => {
      console.log(values);
      UpdateGuesses(values);
    },
  });

  const UpdateGuesses = async (guesses: { guess: string }) => {};

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
          <div id="word">
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
            <div className="letter">
              <p className="guessedLetter">M</p>
            </div>
          </div>
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
