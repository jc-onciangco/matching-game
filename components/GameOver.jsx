import { useDispatch, useSelector } from "react-redux";
import { playAgain, backToHome, defaultState } from "../store/gameReducer";

const GameOver = () => {
  const dispatch = useDispatch();
  const currentScore = useSelector((state) => state.game.currentScore);

  const handleClickPlayAgain = () => {
    dispatch(playAgain());
    dispatch(defaultState());
  };

  const handleClickHome = () => {
    dispatch(backToHome());
    dispatch(defaultState());
  };

  return (
    <>
      <div className="container">
        <div className="modal">
          <div className="head">Game Over</div>
          <div className="gameover-score">
            <div className="score-label">Your Score</div>
            <div className="score-container">{currentScore}</div>
          </div>
          <div className="foot">
            <div
              onClick={() => handleClickPlayAgain()}
              className="footer-btn play-again"
            >
              Play Again
            </div>
            <div onClick={() => handleClickHome()} className="footer-btn home">
              Home
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 100vh;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 5;
            background-color: rgba(0, 0, 0, 0.6);
            display: grid;
            place-items: center;
          }

          .modal {
            height: 400px;
            width: 360px;
            background-color: #e9e9e9;
            border-radius: 10px;
            box-shadow: inset 0 6px 10px rgba(255, 255, 255, 0.8),
              0 16px 20px -6px rgba(0, 0, 0, 0.5),
              inset 0 -8px 12px rgba(0, 0, 0, 0.4);
          }

          .head {
            height: 16%;
            width: 100%;
            background-color: #ff635e;
            display: grid;
            place-items: center;
            font-weight: 900;
            color: white;
            font-size: 1.2rem;
            border-radius: 10px 10px 0 0;
          }

          .gameover-score {
            height: 50%;
            width: 100%;
          }

          .score-label {
            height: 40%;
            width: 100%;
            display: grid;
            place-items: center;
            font-size: 1.3rem;
            font-weight: 900;
            color: salmon;
          }

          .score-container {
            height: 60%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            font-weight: 900;
            color: rgb(48, 223, 4);
          }

          .foot {
            height: 34%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
          }

          .footer-btn {
            color: white;
            box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.6),
              0 8px 10px -6px rgba(0, 0, 0, 0.4),
              inset 0 -2px 4px rgba(0, 0, 0, 0.4);
            font-size: 1.1rem;
            font-weight: 900;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.2s linear;
          }

          .play-again {
            background-color: #35ff35;
          }

          .home {
            background-color: #ff635e;
          }
        `}
      </style>
    </>
  );
};

export default GameOver;
