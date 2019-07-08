const { multiplesOfN } = require('../lib/index');

describe('mupltiples of n', () => {
  it('returns an array of nums that are mutiples of a num', () => {
    const num = 5;
    const multiples = multiplesOfN(num);
    
    expect(multiples).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });
});
