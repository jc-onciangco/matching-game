import { useDispatch, useSelector } from "react-redux";
import { nextLevel, backToHome, defaultState } from "../store/gameReducer";

const PostLevel = () => {
  const dispatch = useDispatch();
  const gameLevel = useSelector((state) => state.game.gameLevel);
  const rewardPoints = useSelector((state) => state.game.rewardPoints);
  const remainingLives = useSelector(
    (state) => state.game.lives.filter((life) => life.life).length
  );

  const handleClickNextLevel = () => {
    dispatch(nextLevel());
  };

  const handleClickHome = () => {
    dispatch(backToHome());
    dispatch(defaultState());
  };

  return (
    <>
      <div className="container">
        <div className="modal">
          <div className="head">Level {gameLevel} Completed</div>
          <div className="rewards">
            <div className="rewards-label">REWARDS</div>
            <div className="rewards-container">
              {remainingLives !== 5 && (
                <div className="plus-lifepoints">+ 1 life points</div>
              )}
              <div className="bonus-gold">+ {rewardPoints} points</div>
            </div>
          </div>
          <div className="foot">
            <div
              onClick={() => handleClickNextLevel()}
              className="footer-btn next-level"
            >
              Next Level
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
            background-color: #9c5eff;
            display: grid;
            place-items: center;
            font-weight: 900;
            color: white;
            font-size: 1.2rem;
            border-radius: 10px 10px 0 0;
          }

          .rewards {
            height: 50%;
            width: 100%;
          }

          .rewards-label {
            height: 40%;
            width: 100%;
            display: grid;
            place-items: center;
            font-size: 1.3rem;
            font-weight: 900;
            color: salmon;
          }

          .rewards-container {
            height: 60%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
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
            background-color: #9c5eff;
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

          .next-level {
            background-color: #9c5eff;
          }

          .home {
            background-color: #ff635e;
          }

          .home:hover,
          .next-level:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </>
  );
};

export default PostLevel;
