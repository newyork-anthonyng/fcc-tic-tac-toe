describe('Game Logic', function() {
	describe('#getGameBoard', function() {
		it('should return a 3x3 array', function() {
			var gameBoard = game.getGameBoard();

			expect(Array.isArray(gameBoard)).toBe(true);
			expect(gameBoard.length).toEqual(3);
		});

		it('should return 3 array elements, which each contain 3 elements', function() {
			var gameBoard = game.getGameBoard();

			expect(gameBoard[0].length).toEqual(3);
			expect(gameBoard[1].length).toEqual(3);
			expect(gameBoard[2].length).toEqual(3);
		});
	});
});
