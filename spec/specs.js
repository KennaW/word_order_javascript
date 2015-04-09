describe('wordOrder', function() {
    it('counts a word from a single-word input and returns the word', function() {
    expect(wordOrder("yeah")).to.eql(['yeah']);
    });

    it('accept two diferent words and return in sorted order', function() {
    expect(wordOrder("yeah nope")).to.eql(['yeah', 'nope']);
    });

    it('counts each instance of three words and returns word in order of frequency', function() {
    expect(wordOrder("yeah nope yeah")).to.eql(['yeah', 'nope']);
    });

    it('counts each instance of three words and returns word in order of frequency', function() {
    expect(wordOrder("yeah nope yeah sure nope yeah sure sure plok sure")).to.eql(['sure', 'yeah', 'nope', 'plok']);
    });
});
