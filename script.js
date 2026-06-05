const gridContainer = document.querySelector(".container");

function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }

    return row;
}

function createGrid() {
    for (let i = 0; i < 16; i++) {
        newRow = createRow();
        gridContainer.appendChild(newRow);
    } 
}

createGrid();