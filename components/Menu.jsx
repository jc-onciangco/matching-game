import { useDispatch } from "react-redux";
import {
  openMenu,
  backToHome,
  defaultState,
  playAgain,
} from "../store/gameReducer";

const Menu = () => {
  const dispatch = useDispatch();

  const handleClickResume = () => {
    dispatch(openMenu());
  };

  const handleClickRestart = () => {
    dispatch(openMenu());
    dispatch(playAgain());
    dispatch(defaultState());
  };

  const handleClickExit = () => {
    dispatch(backToHome());
    dispatch(defaultState());
  };

  return (
    <>
      <div className="container">
        <div className="modal">
          <div className="head">Pause</div>
          <div className="foot">
            <div
              onClick={() => handleClickResume()}
              className="footer-btn resume"
            >
              Resume
            </div>
            <div
              onClick={() => handleClickRestart()}
              className="footer-btn restart"
            >
              Restart
            </div>
            <div onClick={() => handleClickExit()} className="footer-btn exit">
              Exit
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
            font-weight: 600;
            color: white;
            font-size: 1.2rem;
            border-radius: 10px 10px 0 0;
            font-weight: 900;
          }

          .foot {
            height: 84%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .footer-btn {
            color: white;
            box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.6),
              0 8px 10px -6px rgba(0, 0, 0, 0.4),
              inset 0 -2px 4px rgba(0, 0, 0, 0.4);
            font-size: 1.1rem;
            font-weight: 900;
            padding: 12px 0;
            width: 150px;
            text-align: center;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.2s linear;
            margin: 0 0 20px 0;
          }

          .resume,
          .restart {
            background-color: #35ff35;
          }

          .exit {
            background-color: #ff635e;
          }
        `}
      </style>
    </>
  );
};

export default Menu;
