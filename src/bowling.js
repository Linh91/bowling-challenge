describe('Bowling scoreboard', function() {
  var bs;
  beforeEach(function() {
    bs = new Bowling();
  });

  describe('by default', function() {
    it('has a dash', function() {
      expect(bs._defaultScore).toEqual(0);
    });
  });
});
