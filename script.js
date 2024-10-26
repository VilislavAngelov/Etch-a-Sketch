//constraints
//hover event to chage div's color and leave a trail mousedown or mouseup to start/stop
//button to change grid size, asking via promt
//Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide)
//user input maximum is 100
//button onClick function

//BONUS
//randomize color on each hover
//Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions. OPACITY.

const sketchContainer = document.getElementById("sketchContainer");

let gridNum = 16;

sizeGrid(gridNum);

function sizeGrid(gridNum) {
    for (let i = 0; i < gridNum; i++){
        let gridCol = document.createElement('div')
        gridCol.classList.add("gridCol");
        sketchContainer.appendChild(gridCol);
        for(let j = 0; j < gridNum; j++) {
            let gridBox = document.createElement('div')
            gridBox.classList.add("gridBox");
            gridCol.appendChild(gridBox);
        }
    }
}

const gridBoxes = document.querySelectorAll(".gridBox");

gridBoxes.forEach(function(box) {
    box.addEventListener("mouseover", function() {
        box.style.backgroundColor = "black";
    })
})