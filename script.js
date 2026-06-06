const gridContainer = document.querySelector(".container");
const button = document.querySelector(".num-squares");

function createRow(size) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        });

        row.appendChild(cell);
    }

    return row;
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const newRow = createRow(size);
        gridContainer.appendChild(newRow);
    } 
}

createGrid(64);

button.addEventListener("click", () => {
    let numSquares = 101;

    while (!(numSquares <= 100)) {
        numSquares = parseInt(prompt("Enter new grid size"));
    };

    gridContainer.innerHTML = "";
    createGrid(numSquares);
});