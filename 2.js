var total = {
  red: 0,
  yellow: 0,
  blue: 0
};

var clickConter = 0;

function changeColor(selector) {
  if (clickConter > 20) {
    alert("Game over pleas reload");
    return;
  }
  clickConter++;
  let div = document.querySelector(selector);

  var colors = ["red", "red", "red", "yellow", "yellow", "blue", "blue"];
  var randomNumber = getRandomInt(0, colors.length - 1);
  var selectedColor = colors[randomNumber];
  div.style.background = selectedColor;

  total[selectedColor] = total[selectedColor] + 1;

  var divFraction = document.querySelector("." + selectedColor);
  divFraction.setAttribute("top", total[selectedColor]);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
