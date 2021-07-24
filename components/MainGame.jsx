import { useSelector, useDispatch } from "react-redux";
import Cell from "./Cell";
import { useState, useEffect } from "react";
import {
  startClassic,
  showCell,
  checkIfMatch,
  preventClickCell,
  closeCell,
  checkIfLevelComplete,
  checkIfGameOver,
} from "../store/gameReducer";

//ejbisagas@gmailcom

const gridCells = [
  {
    id: 0,
    cells: 8,
    requiredLevel: [1, 2, 3],
    columns: 4,
    mobileColumns: 4,
    cellSize: 105,
  },
  {
    id: 1,
    cells: 10,
    requiredLevel: [4, 5, 6, 7, 8],
    columns: 5,
    mobileColumns: 5,
    cellSize: 84,
  },
  {
    id: 2,
    cells: 12,
    requiredLevel: [9, 10, 11, 12, 13, 14],
    columns: 4,
    mobileColumns: 4,
    cellSize: 105,
  },
  {
    id: 3,
    cells: 16,
    requiredLevel: [15, 16, 17, 18, 19, 20],
    columns: 4,
    mobileColumns: 4,
    cellSize: 105,
  },
  {
    id: 4,
    cells: 20,
    requiredLevel: [21, 22, 23, 24, 25],
    columns: 5,
    mobileColumns: 4,
    cellSize: 90,
  },
  {
    id: 5,
    cells: 24,
    requiredLevel: [26, 27, 28, 29, 30],
    columns: 6,
    mobileColumns: 4,
    cellSize: 75,
  },
];

const getImageId = (cellsCount) => {
  let uniqueNumbers = [];

  for (var i = 0; i < cellsCount / 2; i++) {
    let randNum = 0;

    //get random unique images
    do {
      randNum = Math.floor(Math.random() * 20) + 1;
    } while (uniqueNumbers.includes(randNum));

    uniqueNumbers.push(randNum);
  }

  return uniqueNumbers
    .concat(uniqueNumbers) //to duplicate images
    .sort(() => 0.5 - Math.random()) // to randomly arrange
    .map((val) => {
      //to modify image data
      return {
        id: Math.random(),
        imgId: val,
        filename: `img${val}.jpg`,
        isOpen: true,
        randomPoints: Math.floor(Math.random() * 10) + 1,
      };
    });
};

const MainGame = () => {
  const dispatch = useDispatch();
  const currentLevel = useSelector((state) => state.game.gameLevel);
  const images = useSelector((state) => state.game.images);
  const firstClickedCell = useSelector((state) => state.game.firstClickedCell);
  const playAgainTrigger = useSelector((state) => state.game.playAgainTrigger);

  const currentGrid = gridCells.find((grid) =>
    grid.requiredLevel.includes(currentLevel)
  );

  useEffect(() => {
    dispatch(startClassic(getImageId(currentGrid.cells)));

    setTimeout(() => {
      dispatch(closeCell());
    }, 2500);
  }, [currentLevel, playAgainTrigger]);

  const handleClickCell = (id, imgId, randomPoints) => {
    dispatch(showCell({ id, imgId, randomPoints }));
    console.log(imgId);
    if (firstClickedCell) {
      dispatch(preventClickCell());

      setTimeout(() => {
        dispatch(
          checkIfMatch({
            firstClickedCell,
            lastClickedCell: imgId,
            randomPoints,
          })
        );

        setTimeout(() => {
          dispatch(checkIfLevelComplete());
          dispatch(checkIfGameOver());
        }, 800);
      }, 1000);
    }
  };

  return (
    <>
      <main className="container">
        <div className="grid-system">
          {images.map((img) => {
            return (
              <Cell
                handleClickCell={handleClickCell}
                img={{ ...img, cellSize: currentGrid.cellSize }}
                key={img.id}
              />
            );
          })}
        </div>
      </main>
      <style jsx>
        {`
          .container {
            height: 90vh;
            width: 100%;
            display: grid;
            place-items: center;
          }

          .grid-system {
            display: grid;
            grid-template-columns: repeat(${currentGrid.columns}, 1fr);
            grid-gap: 12px;
          }

          @media screen and (max-width: 580px) {
            .container {
              height: 92vh;
            }

            .grid-system {
              display: grid;
              grid-template-columns: repeat(${currentGrid.mobileColumns}, 1fr);
              place-items: center;
              grid-gap: 6px;
            }
          }
        `}
      </style>
    </>
  );
};

export default MainGame;
