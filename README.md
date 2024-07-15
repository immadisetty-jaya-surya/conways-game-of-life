# Conway's Game of Life

This project is an implementation of Conway's Game of Life, a cellular automaton devised by the mathematician John Horton Conway. The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. 

The grid is a 30x30 2D array where each cell can either be alive (1) or dead (0). The game follows these simple rules:
1. Any live cell with fewer than two live neighbors dies (underpopulation).
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies (overpopulation).
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

The project includes a user interface built with HTML and JavaScript. The interface allows you to start and stop the simulation, randomize the initial state, or write the name "SURYA" on the grid. The grid is displayed on an HTML canvas element, and the game logic is implemented in JavaScript. Buttons are provided for user interaction to control the state of the grid and the simulation.
