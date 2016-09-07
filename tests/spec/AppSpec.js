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
	});

	describe('#setGameBoard', function() {
		afterEach(function() {
			game.resetGameBoard();
		});

		it('should set a square on the gameBoard', function() {
			game.setGameBoard([1, 1], 'x');
			gameBoard = game.getGameBoard();

			expect(gameBoard[1][1]).toEqual('x');
		});

		it('should do nothing if the coordinate is invalid', function() {
			game.setGameBoard([5, 5], 'x');
			gameBoard = game.getGameBoard();

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
	});
});