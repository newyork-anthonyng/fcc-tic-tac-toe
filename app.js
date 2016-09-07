'use strict';

$(function() {
	console.log('app.js loaded.');
});

// board will be a 3x3 array
/*
[
	[x, o, x],
	[x, o, x],
	[x, o, x],
]
Empty spaces will be null
Filled spaces will either be 'x' or 'o'
*/

let game = (function() {
	let gameBoard = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	];

	let getGameBoard = function() {
		return gameBoard;
	};

	let setGameBoard = function(coord, token) {
		var x = coord[0];
		var y = coord[1];

		var invalidCoord = (x < 0 || x > 2) || (y < 0 || y > 2);
		if(invalidCoord) return;

		gameBoard[x][y] = token;
	};

	let resetGameBoard = function() {
		gameBoard = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];
	};

	let checkDiagonals = function() {
		var leftDiagonal = gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2];
		var rightDiagonal = gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0];
		var notNull = !(gameBoard[1][1] === null);

		return (leftDiagonal || rightDiagonal) && notNull;
	};

	let checkVerticals = function() {
		var leftVertical = gameBoard[0][0] === gameBoard[1][0] && gameBoard[1][0] === gameBoard[2][0] && gameBoard[1][0] !== null;
		var middleVertical = gameBoard[0][1] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][1] && gameBoard[1][1] !== null;
		var rightVertical = gameBoard[0][2] === gameBoard[1][2] && gameBoard[1][2] === gameBoard[2][2] && gameBoard[1][2] !== null;

		return (leftVertical || middleVertical || rightVertical);
	};

	let checkHorizontals = function() {
		var leftHorizontal = gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][1] === gameBoard[0][2] && gameBoard[0][1] !== null;
		var middleHorizontal = gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[1][2] && gameBoard[1][1] !== null;
		var rightHorizontal = gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][1] === gameBoard[2][2] && gameBoard[2][1] !== null;

		return (leftHorizontal || middleHorizontal || rightHorizontal);
	};

	let checkForWinner = function() {
		return (checkDiagonals() || checkVerticals() || checkHorizontals());
	};

	return {
		getGameBoard: getGameBoard,
		setGameBoard: setGameBoard,
		resetGameBoard: resetGameBoard,
		checkDiagonals: checkDiagonals,
		checkVerticals: checkVerticals,
		checkHorizontals: checkHorizontals,
		checkForWinner: checkForWinner
	};
})();
