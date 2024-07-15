const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const resolution = 20;
const rows = canvas.height / resolution;
const cols = canvas.width / resolution;

let grid = buildGrid();
function buildGrid(){
    return new Array(rows).fill(null).map(() => new Array(cols).fill(0))
}
function randomingGrid(){
    grid = grid.map(row => row.map(() => Math.floor(Math.random() * 2)))
    drawGrid()
}
function drawGrid(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    grid.forEach((row, y)=>{
        row.forEach((cell,x)=>{
            ctx.beginPath();
            ctx.rect(x * resolution, y*resolution,resolution,resolution);
            ctx.fillStyle = cell ? 'black' : 'white';
            ctx.fill();
            ctx.stroke();
        })
    })
}
function writeName(){
    grid = buildGrid();
    const namePattern = [
        [1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    ]
    for (let i = 0; i < namePattern.length; i++) {
        for (let j = 0; j < namePattern[i].length; j++) {
            grid[i+10][j+2] = namePattern[i][j]
        }
    }
    drawGrid()
}
function nextGen(grid){
    const nextGrid = grid.map(arr => [...arr]);
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const cell = grid[row][col];
            let numNeighbors = 0;
            for(let i=-1;i<2;i++){
                for(let j=-1;j<2;j++){
                    if(i===0 && j===0) continue;
                    const x = row+i;
                    const y = col+j;
                    if(x >= 0 && x < rows && y>=0 && y<cols){
                        numNeighbors += grid[x][y];
                    }
                }
            }

            if(cell === 1 && numNeighbors < 2){
                nextGrid[row][col] = 0;
            }else if (cell === 1 && numNeighbors > 3) {
                nextGrid[row][col] = 0;
            } else if (cell === 0 && numNeighbors === 3) {
                nextGrid[row][col] = 1;
            }
        }
    }
    return nextGrid;
}
let animationId;
function updateRecursion() {
    grid = nextGen(grid);
    drawGrid()
    animationId = requestAnimationFrame(updateRecursion)
}
function startGame() {
    if (!animationId) {
        updateRecursion()
    }
}
function stopGame() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null
    }
}

drawGrid();