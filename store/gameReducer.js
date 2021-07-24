import { createSlice } from "@reduxjs/toolkit";

const lives = [
  {
    id: 0,
    life: true,
  },
  {
    id: 1,
    life: true,
  },
  {
    id: 2,
    life: true,
  },
  {
    id: 3,
    life: true,
  },
  {
    id: 4,
    life: true,
  },
];

export const myReducer = createSlice({
  name: "game",
  initialState: {
    currentWindow: "home",
    gameLevel: 1,
    images: [],
    firstClickedCell: null,
    checkingIfMatch: false,
    firstRandomPoints: null,
    currentScore: 0,
    lives,
    levelFinished: false,
    rewardPoints: 0,
    wrongMatch: 0,
    streak: 0,
    playAgainTrigger: false,
    isGameOver: false,
    isMenuOpen: false,
  },
  reducers: {
    changeWindow: (state, action) => {
      state.currentWindow = action.payload;
    },
    startClassic: (state, action) => {
      state.images = action.payload;
    },
    showCell: (state, action) => {
      const { id, imgId, randomPoints } = action.payload;

      state.images = state.images.map((img) => {
        if (img.id === id) {
          return {
            ...img,
            isOpen: true,
          };
        }

        return img;
      });

      if (state.streak === 3) state.streak = 0;

      if (!state.firstClickedCell) {
        state.firstClickedCell = imgId;
        state.firstRandomPoints = randomPoints;
      }
    },
    closeCell: (state) => {
      state.images = state.images.map((img) => {
        return {
          ...img,
          isOpen: false,
        };
      });
    },
    checkIfMatch: (state, action) => {
      const { firstClickedCell, lastClickedCell, randomPoints } =
        action.payload;

      //if did'nt match
      if (firstClickedCell !== lastClickedCell) {
        state.images = state.images
          .map((img) => {
            if (img.imgId === lastClickedCell) {
              return {
                ...img,
                isOpen: false,
              };
            } else if (img.imgId === firstClickedCell) {
              return {
                ...img,
                isOpen: false,
              };
            }

            return img;
          })
          .map((img) => {
            if (!img.isOpen) {
              return {
                ...img,
                randomPoints: Math.floor(Math.random() * 10) + 1,
              };
            }

            return img;
          });

        state.wrongMatch += 1;
        state.streak = 0;

        const lifeCount = state.lives.filter((life) => life.life).length;
        state.lives = state.lives.map((life, index) => {
          if (index === lifeCount - 1) {
            return {
              ...life,
              life: false,
            };
          }

          return life;
        });
      } else if (firstClickedCell === lastClickedCell) {
        //if matched
        state.currentScore += state.firstRandomPoints + randomPoints;
        state.firstRandomPoints = null;
        state.streak += 1;

        if (state.streak === 3) {
          state.currentScore += state.gameLevel * 20;
        }
      }

      state.firstClickedCell = null;
      state.checkingIfMatch = !state.checkingIfMatch;
    },
    checkIfLevelComplete: (state) => {
      if (state.images.every((img) => img.isOpen)) {
        state.levelFinished = true;
        const rewardScore = Math.round(
          (state.gameLevel / 100) * state.currentScore +
            state.lives.filter((life) => life.life).length * 5 +
            (state.wrongMatch === 0
              ? state.images.length
              : -(state.wrongMatch * 3))
        );

        state.rewardPoints = rewardScore < 0 ? 0 : rewardScore;
      }
    },
    checkIfGameOver: (state) => {
      const lifeCount = state.lives.filter((life) => life.life).length;
      if (lifeCount === 0) {
        state.isGameOver = true;
      }
    },
    preventClickCell: (state) => {
      state.checkingIfMatch = !state.checkingIfMatch;
    },
    nextLevel: (state) => {
      state.gameLevel += 1;
      state.levelFinished = false;
      state.currentScore += state.rewardPoints;
      state.rewardPoints = 0;
      state.wrongMatch = 0;
      state.streak = 0;

      if (state.lives.filter((life) => life.life).length === 5) return;

      const lifeCount = state.lives.filter((life) => life.life).length;
      state.lives = state.lives.map((life, index) => {
        if (index === lifeCount) {
          return {
            ...life,
            life: true,
          };
        }

        return life;
      });
    },
    playAgain: (state) => {
      state.playAgainTrigger = !state.playAgainTrigger;
    },
    backToHome: (state) => {
      state.currentWindow = "home";
      state.levelFinished = false;
      state.isGameOver = false;
    },
    defaultState: (state) => {
      state.currentScore = 0;
      state.lives = lives;
      state.gameLevel = 1;
      state.rewardPoints = 0;
      state.wrongMatch = 0;
      state.streak = 0;
      state.isGameOver = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const {
  changeWindow,
  startClassic,
  showCell,
  checkIfMatch,
  preventClickCell,
  closeCell,
  nextLevel,
  checkIfLevelComplete,
  checkIfGameOver,
  playAgain,
  backToHome,
  defaultState,
  openMenu,
} = myReducer.actions;
export default myReducer.reducer;
