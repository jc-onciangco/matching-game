import { useDispatch, useSelector } from "react-redux";
import { show } from "../store/gameReducer";

import OnGameInfo from "./OnGameInfo";
import MainGame from "./MainGame";
import PostLevel from "./PostLevel";
import GameOver from "./GameOver";
import Menu from "./Menu";

const OnGame = () => {
  const dispatch = useDispatch();
  const levelFinished = useSelector((state) => state.game.levelFinished);
  const isGameOver = useSelector((state) => state.game.isGameOver);
  const isMenuOpen = useSelector((state) => state.game.isMenuOpen);

  return (
    <>
      <div className="container">
        {levelFinished && <PostLevel />}
        {isGameOver && <GameOver />}
        {isMenuOpen && <Menu />}
        <div className="inner-container">
          <OnGameInfo />
          <MainGame />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 100%;
            width: 100%;
            background-color: #e9e9e9;
          }

          .inner-container {
            height: 100%;
            width: 90%;
            margin: 0 auto;
          }

          @media screen and (max-width: 580px) {
            .inner-container {
              width: 96%;
            }
          }
        `}
      </style>
    </>
  );
};

export default OnGame;
