let slider = document.querySelector("#slider");
let output = document.querySelector("#output");
let grid = document.querySelector(".grid");
let resetButton = document.querySelector("#reset");

//Slider Control
output.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function () {
  output.textContent = `${this.value} x ${this.value}`;
  updateGrid(this.value, this.value);
};

//Slider Control

function createGrid() {
  for (let i = 0; i < 256; i++) {
    let gridItems = document.createElement("div");
    gridItems.classList.add("square");
    grid.appendChild(gridItems);
  }
}

function updateGrid(rows, columns) {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${slider.value}, 2fr)`
  );

  grid.style.setProperty("grid-template-rows", `repeat(${slider.value}, 2fr)`);

  for (let i = 0; i < rows * columns; i++) {
    let gridItems = document.createElement("div");
    gridItems.classList.add("square");
    grid.appendChild(gridItems);
  }
}

const square = document.querySelector("div");
square.addEventListener("mouseover", function (event) {
  event.target.classList.replace("square", "color");
});

resetButton.addEventListener("click", function () {
  grid.innerHTML = "";
  slider.value = "16";
  output.textContent = `${slider.value} x ${slider.value}`;
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();
