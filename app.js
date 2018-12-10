/* global $ */

// Tic-tac-toe has 8 win conditions
// If we do all in one array, it will be much easier
// Render function will render in 3's

'use strict';

const state = (function() {
  const board = Array(9).fill(null);
  const xIsNext = false;
  const winPattern = null;

  // Winning line can be represented as an array of index values of the 3 winning cells
  // If null, then no winner has been found
  const winners = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]];

  const setMove = function(cellNo) {
    //Convert cellNo to integer in case it's still a string
    const cell = Math.abs(cellNo);

    //If there is a winner, this action must do nothing and return
    if (state.winPattern) return;

    //If something is already in cell, do nothing
    if (state.board[cell] !== null) return;

    //If xIsNext, then place 'X'; otherwise, place 'O'
    state.board[cell] = state.xIsNext ? 'X' : 'O';

    // set xIsNext to the *opposite* boolean value of current xIsNext
    state.xIsNext = !state.xIsNext;

    const winPattern = checkWinner(state.board);
    if (winPattern) {
      state.winPattern = winPattern;
    }
  };

  const newGame = function() {
    state.xIsNext = true;
    state.board = Array(9).fill(null);
    state.winPattern = null;
  };

  return {
    board,
    xIsNext,
    winners,
    newGame,
    setMove,
    winPattern
  };
}());

function template() {
  let html = '';

  //Create opening div
  html += '<div class="board">';

  //Iterate each "row" in our 'state.board'
  state.board.forEach((cell, ind) => {
    const winClass = (state.winPattern && state.winPattern.includes(ind)) ? 'win' : '';
    // If new row, open row div:
    if ( ind === 0 || ind === 3 || ind === 6) {
      html += '<div class="row">';
    }

    // Output blank character "&nbsp" if cell data is null, otherwise output cell data.
    // Blank char helps css
    html += `
            <div class="cell ${winClass}" id="${ind}">
                <p>${cell ? cell : '&nbsp;'}</p>
            </div>
        `;

    // Close row div:
    if (ind === 2 || ind === 5 || ind === 8) {
      html += '</div>';
    }
  });

  html += '</div>';

  return html;
}

// Event handlers
function onCellClick(event) {
  const cellId = $(event.target).closest('.cell').attr('id');
  state.setMove(cellId);
  renderBoard();
}

// Render functions
function renderBoard() {
  $('.game').html(template());
}

function renderSelection() {
  $('.game').on('click', '.cell', onCellClick);
}

function onNewGameClick() {
  state.newGame();
  renderBoard();
}

function renderNewGame() {
  $('#new-game').click(onNewGameClick);
}

function checkWinner(board) {
  const winPatterns = state.winners;

  for (let i = 0; i < winPatterns.length; i++) {
    const winPattern = winPatterns[i];

    // Prevent win with three nulls
    if ( !board[winPattern[0]] ) continue;

    if ( board[winPattern[0]] === board[winPattern[1]] && board[winPattern[1]] === board[winPattern[2]]) {
      return winPattern;
    }
  }

  return null;
}

function main() {
  renderBoard();
  renderSelection();
  renderNewGame();
}

$(main);