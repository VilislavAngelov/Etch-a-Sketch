const sketchContainer = document.getElementById("sketchContainer");
let gridNum = 16;
let isMouseDown = false;

sizeGrid(gridNum);

function askSize() {
  gridNum = prompt("What size grid do you want?");
  while (gridNum > 100 || gridNum <= 1) {
    alert("Grid Size Should Be Between 2 and 100");
    gridNum = prompt("What size grid do you want?");
  }

  clearGrid();
  sizeGrid(gridNum);
}

function sizeGrid(gridNum) {
  for (let i = 0; i < gridNum; i++) {
    let gridCol = document.createElement("div");
    gridCol.classList.add("gridCol");
    sketchContainer.appendChild(gridCol);
    for (let j = 0; j < gridNum; j++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("gridBox");
      gridCol.appendChild(gridBox);
    }
  }

  paint();
}

function clearGrid() {
  document.getElementById("sketchContainer").innerHTML = "";
}

function paint() {
  const gridBoxes = document.querySelectorAll(".gridBox");

  gridBoxes.forEach((box) => {

    box.addEventListener("mousedown", () => {
      isMouseDown = true;
      if (!box.style.backgroundColor) {
        box.style.backgroundColor = randomColor();
      } else {
        increaseOpacity(box);
      }
    });

    box.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    box.addEventListener("mouseenter", () => {
      if (isMouseDown && box.style.backgroundColor) {
        increaseOpacity(box);
      } else if (isMouseDown && !box.style.backgroundColor) {
        box.style.backgroundColor = randomColor();
      }
    });
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.1)`;
}

function increaseOpacity(box) {
  const currentColor = box.style.backgroundColor;
  const [r, g, b, a] = currentColor.match(/[\d\.]+/g).map(Number);

  if (a < 1) {
    const newOpacity = Math.min(a + 0.1, 1).toFixed(1);
    box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${newOpacity})`;
    box.dataset.opacity = newOpacity;
  }
}
