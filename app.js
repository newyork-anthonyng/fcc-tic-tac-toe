'use strict';

$(function() {
	$('.square').click(function() {
		playMove($(this).data('coord'));
		render();
	});
});

function playMove(coords) {
	var playerDidMove = game.playerTakesTurn(coords);

	if(playerDidMove) {
		var winner = game.checkForWinner();
		if(winner) {
			alert('Winner! ' + winner);
			game.incrementScore(winner);
			renderScore();

			game.resetGameBoard();
			return;
		}

		game.nextTurn();
	}
}

function render() {
	renderSquares();
}

function renderSquares() {
	$('.square').each(function() {
		var myCoord = $(this).data('coord');

		let gameBoard = game.getGameBoard();
		var myToken = gameBoard[myCoord[0]][myCoord[1]];

		$(this).removeClass('player-x player-o');

		if(myToken === 'x') {
			$(this).addClass('player-x');
		} else if(myToken === 'o') {
			$(this).addClass('player-o');
		}
	});
}

function renderScore() {
	var scores = game.getScore();
	var scoreText = 'x: ' + scores['x'] + ', o: ' + scores['o'];

	$('.score').text(scoreText);
}

let game = (function() {
	let gameBoard = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	];
	let currentPlayer = 'x';
	let score = {
		x: 0,
		o: 0
	};

	let getGameBoard = function() {
		return gameBoard;
	};

	let setGameBoard = function(coord, token) {
		var x = coord[0];
		var y = coord[1];

		var invalidCoord = (x < 0 || x > 2) || (y < 0 || y > 2);
		if(invalidCoord) return false;

		var isOccupied = gameBoard[x][y] !== null;
		if(isOccupied) return false;

		gameBoard[x][y] = token;
		return true;
	};

	let resetGameBoard = function() {
		gameBoard = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];

		currentPlayer = 'x';
	};

	let checkDiagonals = function() {
		var leftDiagonal = (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[1][1] !== null) ? gameBoard[0][0] : false;
		var rightDiagonal = (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[1][1] !== null) ? gameBoard[0][2] : false;

		return (leftDiagonal || rightDiagonal);
	};

	let checkVerticals = function() {
		var leftVertical = (gameBoard[0][0] === gameBoard[1][0] && gameBoard[1][0] === gameBoard[2][0] && gameBoard[1][0] !== null) ? gameBoard[0][0] : false;
		var middleVertical = (gameBoard[0][1] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][1] && gameBoard[1][1] !== null) ? gameBoard[0][1] : false;
		var rightVertical = (gameBoard[0][2] === gameBoard[1][2] && gameBoard[1][2] === gameBoard[2][2] && gameBoard[1][2] !== null) ? gameBoard[0][2] : false;

		return (leftVertical || middleVertical || rightVertical);
	};

	let checkHorizontals = function() {
		var leftHorizontal = (gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][1] === gameBoard[0][2] && gameBoard[0][1] !== null) ? gameBoard[0][0] : false;
		var middleHorizontal = (gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[1][2] && gameBoard[1][1] !== null) ? gameBoard[1][0] : false;
		var rightHorizontal = (gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][1] === gameBoard[2][2] && gameBoard[2][1] !== null) ? gameBoard[2][0] : false;

		return (leftHorizontal || middleHorizontal || rightHorizontal);
	};

	let checkForWinner = function() {
		return (checkDiagonals() || checkVerticals() || checkHorizontals());
	};

	let getCurrentPlayer = function() {
		return currentPlayer;
	};

	let nextTurn = function() {
		if(currentPlayer === 'x') {
			currentPlayer = 'o';
		} else {
			currentPlayer = 'x';
		}
	};

	let playerTakesTurn = function(coord) {
		return setGameBoard(coord, getCurrentPlayer());
	};

	let getScore = function() {
		return score;
	};

	let incrementScore = function(player) {
		score[player]++;
	};

	let resetScore = function() {
		score = {
			x: 0,
			o: 0
		};
	};

	return {
		getGameBoard: getGameBoard,
		setGameBoard: setGameBoard,
		resetGameBoard: resetGameBoard,
		checkForWinner: checkForWinner,
		getCurrentPlayer: getCurrentPlayer,
		nextTurn: nextTurn,
		playerTakesTurn: playerTakesTurn,
		getScore: getScore,
		incrementScore: incrementScore,
		resetScore: resetScore
	};
})();
