import { useState } from "react";
import { useSelector } from "react-redux";

const Cell = ({ img, handleClickCell }) => {
  const checkingIfMatch = useSelector((state) => state.game.checkingIfMatch);

  return (
    <>
      <div
        onClick={() => {
          if (img.isOpen || checkingIfMatch) return;
          handleClickCell(img.id, img.imgId, img.randomPoints);
        }}
        className="cell"
      >
        <div className="inner-cell">
          <div className="cell-front">{img.randomPoints}</div>

          <div className="cell-back"></div>
        </div>
      </div>
      <style jsx>
        {`
          .cell {
            background-color: transparent;
            perspective: 1000px;
            width: 100px;
            height: 100px;
            cursor: pointer;
          }

          .inner-cell {
            position: relative;
            height: 100%;
            width: 100%;
            transition: transform 0.6s linear;
            transform-style: preserve-3d;
            transform: rotateY(${img.isOpen ? "180deg" : "0deg"});
          }

          .cell-front,
          .cell-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 35px;
            box-shadow: inset 0 4px 8px rgba(255, 255, 255, 0.8),
              0 12px 16px -6px rgba(0, 0, 0, 0.5),
              inset 0 -4px 6px rgba(0, 0, 0, 0.4);
          }

          .cell-front {
            background-color: #e9e9e9;
            color: #cccf02;
            display: grid;
            place-items: center;
            font-size: 1.8rem;
            font-weight: 700;
            transition: filter 0.2s linear;
          }
          .cell:hover .cell-front {
            filter: brightness(96%);
          }

          .cell-back {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 35px;
            background-image: url(${`/assets/${img.filename}`});
            transform: rotateY(180deg);
          }

          @media screen and (max-width: 580px) {
            .cell {
              width: ${img.cellSize}px;
              height: ${img.cellSize}px;
            }

            .cell-front,
            .cell-back {
              border-radius: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Cell;
