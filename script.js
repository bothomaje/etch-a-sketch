const gridContainer = document.querySelector(".container");

function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        });

        row.appendChild(cell);
    }

    return row;
}

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const newRow = createRow();
        gridContainer.appendChild(newRow);
    } 
}

createGrid();