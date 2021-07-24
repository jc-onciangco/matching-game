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
        isOpen: false,
      };
    });
};

export default getImageId;
