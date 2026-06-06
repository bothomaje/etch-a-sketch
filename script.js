const gridContainer = document.querySelector(".container");
const button = document.querySelector(".num-squares");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function createRow(size) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = getRandomColor();
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