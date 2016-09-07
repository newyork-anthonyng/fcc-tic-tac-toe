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

	return {
		getGameBoard: getGameBoard,
		setGameBoard: setGameBoard,
		resetGameBoard: resetGameBoard
	};
})();
