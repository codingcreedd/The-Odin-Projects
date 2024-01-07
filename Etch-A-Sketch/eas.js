const gridSizeButton = document.querySelector('.grid-size-btn');
const resetButton = document.querySelector('.reset-btn');

const gridContainer = document.querySelector('.grid-container');

let currentGridSize = 1;

gridSizeButton.addEventListener('click', () => {
    resetGrids();
    const gridSize = promptUser();
    currentGridSize = gridSize;

    const cellSize = 700 / gridSize; 

    addGrid(gridSize, cellSize, gridContainer);
});

resetButton.addEventListener('click', () => {
    resetGrids(gridContainer, currentGridSize);
});


//FUNCTIONS

function promptUser(){
    const gridSize = parseInt(prompt('Enter grid size: '));
    if(gridSize <= 64)
        return gridSize;
    else if(gridSize > 64)
        return 64;
    else if(gridSize < 1)
        return currentGridSize;
    else
        return 1;
}

function addGrid(gridSize, cellSize, gridContainer){
    gridContainer.style.cssText = `grid-template-columns: repeat(${gridSize}, ${cellSize}px); grid-template-rows: repeat(${gridSize}, ${cellSize}px);`;
    for(let i = 0; i < gridSize * gridSize; i++){
        const gridElement = document.createElement('div');
        gridElement.setAttribute('class', 'grid-element');
        gridElement.style.cssText = "border: 1px solid rgb(235, 235, 235);";
        gridContainer.appendChild(gridElement);


        let mouse_down = false;
        gridContainer.addEventListener('mousedown', (event) => {
            event.preventDefault();
            mouse_down = true;
        });
        
        gridContainer.addEventListener('mouseup', () => {mouse_down = false;});

        gridElement.addEventListener('click', () => {
            gridElement.style.cssText = "background: black; border: none";
        });

        gridElement.addEventListener('mouseover', () => {

            if(mouse_down === true){
                gridElement.style.cssText = "background: black; border: none";
            }
        });
    }

}

function resetGrids(){
    const gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach((grid_element) => {
        grid_element.style.cssText = "background: none; border: 1px solid rgb(235,235,235);";
    });
}
