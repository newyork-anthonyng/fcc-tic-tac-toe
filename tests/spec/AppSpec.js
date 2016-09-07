describe('Game Logic', function() {
	describe('#getGameBoard', function() {
		it('should return a 3x3 array', function() {
			var gameBoard = game.getGameBoard();

			expect(Array.isArray(gameBoard)).toBe(true);
			expect(gameBoard.length).toEqual(3);
		});
	});
});
