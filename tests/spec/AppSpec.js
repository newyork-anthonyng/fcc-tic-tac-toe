describe('Game Logic', function() {
	describe('#getGameBoard', function() {
		var gameBoard;

		beforeEach(function() {
			gameBoard = game.getGameBoard();
		});

		afterEach(function() {
			game.resetGameBoard();
		});

		it('should return a 3x3 array', function() {
			expect(Array.isArray(gameBoard)).toBe(true);
			expect(gameBoard.length).toEqual(3);
		});

		it('should return 3 array elements, which each contain 3 elements', function() {
			expect(gameBoard[0].length).toEqual(3);
			expect(gameBoard[1].length).toEqual(3);
			expect(gameBoard[2].length).toEqual(3);
		});
	});

	describe('#resetGameBoard', function() {
		afterEach(function() {
			game.resetGameBoard();
		});

		it('should set all squares on the gameBoard to null', function() {
			game.setGameBoard([1, 1], 'x');
			game.resetGameBoard();
			var gameBoard = game.getGameBoard();

			expect(gameBoard[0][0]).toBe(null);
			expect(gameBoard[0][1]).toBe(null);
			expect(gameBoard[0][2]).toBe(null);
			expect(gameBoard[1][0]).toBe(null);
			expect(gameBoard[1][1]).toBe(null);
			expect(gameBoard[1][2]).toBe(null);
			expect(gameBoard[2][0]).toBe(null);
			expect(gameBoard[2][1]).toBe(null);
			expect(gameBoard[2][2]).toBe(null);
		});

		it('should set currentPlayer to x', function() {
			game.nextTurn();
			game.resetGameBoard();
			expect(game.getCurrentPlayer()).toEqual('x');
		});
	});

	describe('#setGameBoard', function() {
		afterEach(function() {
			game.resetGameBoard();
		});

		it('should set a square on the gameBoard', function() {
			game.setGameBoard([1, 1], 'x');
			var gameBoard = game.getGameBoard();

			expect(gameBoard[1][1]).toEqual('x');
		});

		it('should do nothing if the coordinate is invalid', function() {
			game.setGameBoard([5, 5], 'x');
			var gameBoard = game.getGameBoard();

			expect(gameBoard[0][0]).toBe(null);
			expect(gameBoard[0][1]).toBe(null);
			expect(gameBoard[0][2]).toBe(null);
			expect(gameBoard[1][0]).toBe(null);
			expect(gameBoard[1][1]).toBe(null);
			expect(gameBoard[1][2]).toBe(null);
			expect(gameBoard[2][0]).toBe(null);
			expect(gameBoard[2][1]).toBe(null);
			expect(gameBoard[2][2]).toBe(null);
		});

		it('should do nothing if the coordinate is already occupied', function() {
			game.setGameBoard([0, 1], 'x');
			game.setGameBoard([0, 1], 'o');

			var gameBoard = game.getGameBoard();

			expect(gameBoard[0][1]).toEqual('x');
		});
	});

	describe('#checkForWinner', function() {
		afterEach(function() {
			game.resetGameBoard();
		});

		it('should return false if squares are all null', function() {
			var result = game.checkForWinner();

			expect(result).toBe(false);
		});

		it('should return true if there is a winner on vertical', function() {
			game.setGameBoard([0, 0], 'x');
			game.setGameBoard([0, 1], 'o');
			game.setGameBoard([1, 0], 'x');
			game.setGameBoard([1, 1], 'o');
			game.setGameBoard([2, 0], 'x');

			var result = game.checkForWinner();

			expect(result).toBe(true);
		});

		it('should return true if there is a winner on horizontal', function() {
			game.setGameBoard([0, 0], 'x');
			game.setGameBoard([1, 0], 'o');
			game.setGameBoard([0, 1], 'x');
			game.setGameBoard([2, 0], 'o');
			game.setGameBoard([0, 2], 'x');

			var result = game.checkForWinner();

			expect(result).toBe(true);
		});

		it('should return true if there is a winner on diagonal', function() {
			game.setGameBoard([0, 2], 'x');
			game.setGameBoard([0, 0], 'o');
			game.setGameBoard([1, 1], 'x');
			game.setGameBoard([2, 2], 'o');
			game.setGameBoard([2, 0], 'x');

			var result = game.checkForWinner();

			expect(result).toBe(true);
		});

		it('should return false if there is no winner', function() {
			game.setGameBoard([0, 0], 'x');
			game.setGameBoard([0, 1], 'o');
			game.setGameBoard([0, 2], 'x');

			var result = game.checkForWinner();

			expect(result).toBe(false);
		});
	});

	describe('#getCurrentPlayer', function() {
		it('should return the token of the current player', function() {
			var result = game.getCurrentPlayer();

			expect(result).toEqual('x');
		});
	});

	describe('#nextTurn', function() {
		afterEach(function() {
			game.resetGameBoard();
		});

		it('should toggle the token of the current player', function() {
			var result = game.getCurrentPlayer();
			expect(result).toEqual('x');

			game.nextTurn();
			result = game.getCurrentPlayer();
			expect(result).toEqual('o');
		});
	});

	describe('#playerTakesTurn', function() {
		afterEach(function() {
			game.resetGameBoard();
		});

		it('should set a square with the current player token', function() {
			game.playerTakesTurn([0, 0]);
			var gameBoard = game.getGameBoard();
			expect(gameBoard[0][0]).toEqual('x');

			game.playerTakesTurn([0, 1]);
			var gameBoard = game.getGameBoard();
			expect(gameBoard[0][1]).toEqual('o');
		});

		it('should not allow player to play on an occupied square', function() {
			game.playerTakesTurn([0, 0]);
			game.playerTakesTurn([0, 0]);

			var gameBoard = game.getGameBoard();
			expect(gameBoard[0][0]).toEqual('x');
		});
	});
});
