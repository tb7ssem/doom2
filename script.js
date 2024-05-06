const colorBox = document.getElementById("colorBox");
const changeColorButton = document.getElementById("changeColorButton");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomColor();
  colorBox.style.backgroundColor = newColor;
});
