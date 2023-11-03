const rgbValue = () => {
  return Math.floor(Math.random() * 255);
};

const generateColor = (num) => {
  let colors = [];

  for (let i = 0; i < num; i) {
    const red = rgbValue();
    const blue = rgbValue();
    const green = rgbValue();
    colors.push(`rgb(${red}, ${blue},${green})`);
  }
  return colors;
};

export { rgbValue, generateColor };
