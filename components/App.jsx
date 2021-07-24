import { useSelector } from "react-redux";
import OnGame from "./OnGame";
import Home from "./Home";

const App = () => {
  const currentWindow = useSelector((state) => state.game.currentWindow);

  const windows = [
    {
      id: 0,
      name: "on_game",
      component: <OnGame />,
    },
    {
      id: 1,
      name: "home",
      component: <Home />,
    },
  ];

  return (
    <>
      <div className="container">
        {windows.find((window) => window.name === currentWindow).component}
      </div>
      <style jsx>
        {`
          .container {
            height: 100vh;
            width: 100%;
            background-color: pink;
            display: grid;
            place-items: center;
          }
        `}
      </style>
    </>
  );
};

export default App;
