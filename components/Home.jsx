import { useDispatch } from "react-redux";
import { changeWindow, defaultState } from "../store/gameReducer";

const Home = () => {
  const dispatch = useDispatch();

  const handleClickStart = () => {
    dispatch(changeWindow("on_game"));
    dispatch(defaultState());
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <div>MATCHING</div>
          <div>GAME</div>
        </div>
        <div onClick={() => handleClickStart()} className="start-button">
          <div className="text">START</div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 100vh;
            width: 100%;
            background-color: #9c5eff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .start-button {
            position: relative;
            margin: 3rem 0 0 0;
            background-image: linear-gradient(to bottom, #9c5eff98, #9c5eff);
            font-size: 1.8rem;
            padding: 1.2rem 2.4rem;
            border-radius: 10px;
            color: white;
            font-weight: 900;
            border: 4px solid #7724fc;
            letter-spacing: 2px;
            text-shadow: 3px 3px 20px white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4),
              inset 0 -4px 8px rgba(0, 0, 0, 0.6),
              inset 0 4px 6px rgba(255, 255, 255, 0.4);
            cursor: pointer;
          }

          .start {
            filter: brightness(150%);
          }

          .start-button::before {
            position: absolute;
            content: "";
            height: 20%;
            width: 94%;
            top: 5px;
            left: 50%;
            transform: translate(-50%, 0);
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.6),
              transparent
            );
            border-radius: 10px;
          }

          .title {
            color: white;
            font-weight: 900;
            font-size: 3rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default Home;
