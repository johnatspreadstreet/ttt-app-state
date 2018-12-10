/* global $ */

// Tic-tac-toe has 8 win conditions
// If we do all in one array, it will be much easier
// Render function will render in 3's

'use strict';

const state = (function() {
  const cells = ['', '', '', '', '', '', '', '', ''];
  const xIsNext = false;

  // Winning line can be represented as an array of index values of the 3 winning cells
  // If null, then no winner has been found
  const winners = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]];

  return {
    cells,
    xIsNext,
    winners
  };
}());

function createBoardString(arr) {
  return `
    <div class="row">
        <div class="cell" id="0">
            <p>${arr[0]}&nbsp;</p>
        </div>
        <div class="cell" id="1">
            <p>${arr[1]}&nbsp;</p>
        </div>
        <div class="cell" id="2">
            <p>${arr[2]}&nbsp;</p>
        </div>
    </div>
    <div class="row">
        <div class="cell" id="3">
            <p>${arr[3]}&nbsp;</p>
        </div>
        <div class="cell" id="4">
            <p>${arr[4]}&nbsp;</p>
        </div>
        <div class="cell" id="5">
            <p>${arr[5]}&nbsp;</p>
        </div>
    </div>
    <div class="row">
        <div class="cell" id="6">
            <p>${arr[6]}&nbsp;</p>
        </div>
        <div class="cell" id="7">
            <p>${arr[7]}&nbsp;</p>
        </div>
        <div class="cell" id="8">
            <p>${arr[8]}&nbsp;</p>
        </div>
    </div>
    `;
}

// State modification functions
function resetGame() {
  // Allows the player to select a new game
  state.xIsNext = true;
  state.cells = Array(9).fill(null);
  state.winPattern = null;
  console.log('Reset game function ran');
}

function placeXorO() {
  // Allows the player to place an X or an O inside of a square
  console.log('Place X or O function ran successfully');
}

// Render functions


function preventCellChange() {
  // Prevents a player from changing their selection
  console.log('Prevent cell change ran');
}

function checkWinner() {
  // Shows if a winning line is on the board
  console.log('Render winning line ran');
}

function renderBoard() {
  // This will render the tic-tac-toe board
  $('.board').html(createBoardString(state.cells));
  console.log('render board ran');
}

// Event Listeners
function onCellClick() {
  // Retrieves the DOM info if applicable (ex. which cell was clicked?)
}

function onNewGameClick() {
  // Starts a new game
}


function main() {
  placeXorO();
  preventCellChange();
  checkWinner();
  resetGame();
  renderBoard();
}

$(main);