import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../store/gameReducer";

const OnGameInfo = () => {
  const dispatch = useDispatch();
  const currentScore = useSelector((state) => state.game.currentScore);
  const gameLevel = useSelector((state) => state.game.gameLevel);
  const lives = useSelector((state) => state.game.lives);
  const streak = useSelector((state) => state.game.streak);

  const handleClickMenu = () => {
    dispatch(openMenu());
  };

  return (
    <>
      <section className="container">
        <div className="score-container">
          <div className="score">
            <span className="score-label">SCORE:</span>
            <span className="score-value">{currentScore}</span>
          </div>
          {(streak === 1 || streak === 2) && (
            <div className="streak">{streak} STREAK</div>
          )}
          {streak === 3 && (
            <div className="streak">+ {gameLevel * 20} points</div>
          )}
        </div>
        <div className="level-container">
          <div className="level">Level {gameLevel}</div>
        </div>
        <div className="menu-container">
          <div onClick={() => handleClickMenu()} className="menu">
            Menu
          </div>
        </div>
        <div className="lifepoints">
          {lives.map((life) => {
            return (
              <div
                style={{
                  backgroundColor: life.life ? "rgb(0, 235, 0)" : "transparent",
                  boxShadow: life.life
                    ? "inset 0 3px 6px rgb(201, 255, 115),0 4px 8px -6px rgba(0, 0, 0, 0.5),inset 0 -2px 5px rgba(0, 0, 0, 0.2)"
                    : "none",
                }}
                key={life.id}
                className="life"
              ></div>
            );
          })}
        </div>
      </section>
      <style jsx>
        {`
          .container {
            position: relative;
            display: flex;
            justify-content: space-between;
            height: 10vh;
            font-size: 1.2rem;
          }

          .lifepoints {
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translate(-50%, 100%);
            height: 15px;
            width: 300px;
            display: flex;
            justify-content: space-between;
          }

          .life {
            height: 100%;
            width: 18%;
            border-radius: 100px;
            border: 2px solid rgb(0, 235, 0);
          }

          .score-container {
            display: flex;
            align-items: center;
          }

          .score {
            height: 100%;
            display: flex;
            align-items: center;
          }

          .streak {
            margin: 0 0 0 25px;
            font-size: 1rem;
            font-weight: 900;
            color: rgb(255, 40, 40);
          }

          .score-label {
            margin: 0 6px 0 0;
            font-weight: 700;
          }

          .score-value {
            font-weight: 600;
          }

          .level {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translate(-50%, 0);
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 1.2rem;
            box-shadow: 0 6px 10px -6px rgba(0, 0, 0, 0.5),
              inset 0 -4px 8px rgba(0, 0, 0, 0.2);
            background-color: #027fc7;
            border-radius: 0 0 12px 12px;
            color: white;
            font-weight: 900;
          }

          .menu-container {
            height: 100%;
            display: flex;
            align-items: center;
          }

          .menu {
            font-size: 1rem;
            border-radius: 3px;
            height: 60%;
            display: flex;
            align-items: center;
            background-color: #b78bff;
            padding: 0 1rem;
            box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.6),
              0 4px 6px -4px rgba(0, 0, 0, 0.4),
              inset 0 -2px 4px rgba(0, 0, 0, 0.4);
            color: white;
            font-weight: 900;
            cursor: pointer;
          }

          @media screen and (max-width: 580px) {
            .container {
              height: 8vh;
              font-size: 1rem;
            }

            .score-label {
              font-weight: 900;
            }

            .streak {
              margin: 0 0 0 10px;
              font-size: 0.85rem;
              font-weight: 900;
              color: rgb(255, 40, 40);
              opacity: 0.8;
            }
          }
        `}
      </style>
    </>
  );
};

export default OnGameInfo;
