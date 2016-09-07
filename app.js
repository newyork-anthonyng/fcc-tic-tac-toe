'use strict';

$(function() {
	$('.square').click(function() {
		playMove($(this).data('coord'));
		render();
	});

	$('button').click(function() {
		game.resetGameBoard();
		game.resetScore();
		render();
		renderScore();
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
