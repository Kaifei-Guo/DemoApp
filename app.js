const btnChangeColor = document.querySelector("#btn-changeColor");
const contentEle = document.querySelector("#content");

btnChangeColor.addEventListener(
  "click",
  () => (contentEle.style.backgroundColor = randomColor(255))
);

function randomColor(max) {
  const r = Math.floor(Math.random() * max);
  const g = Math.floor(Math.random() * max);
  const b = Math.floor(Math.random() * max);

  return `rgb(${r}, ${g}, ${b})`;
}
