//BONUS
//randomize color on each hover
//Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions. OPACITY.

const sketchContainer = document.getElementById("sketchContainer");

let gridNum = 16;

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
      box.style.backgroundColor = "black";

      const paint = (e) => {
        if (e.target.classList.contains("gridBox")) {
          e.target.style.backgroundColor = "black";
        }
      };

      document.addEventListener("mousemove", paint);

      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", paint);
      });
    });
  });
}
