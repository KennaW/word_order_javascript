describe('wordOrder', function() {
    it('counts a word from a single-word input and returns the word', function() {
    expect(wordOrder("yeah")).to.eql(['yeah']);
    });

    it('counts each instance of three words anf returns word in order of frequency', function() {
    expect(wordOrder("yeah nope yeah")).to.eql(['nope', 'yeah']);
    });

    it('counts each instance of three words anf returns word in order of frequency', function() {
    expect(wordOrder("yeah nope yeah sure nope yeah sure sure plok sure")).to.eql(['plok', 'nope', 'yeah', 'sure']);
    });
});
