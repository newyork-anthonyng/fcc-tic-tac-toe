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

	return {
		getGameBoard: getGameBoard
	};
})();
